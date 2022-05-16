import type { FC, SetStateAction } from 'react';
import React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {
    CategoryColor,
    useCreateTagMutation,
    useDeleteTagMutation,
    useMyTagsQuery,
} from '@nyoomy/graphql';
import type { Tag as TagDto } from '@nyoomy/graphql';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { colorOptions, TagChip } from './TagChip';
import IconButton from '@mui/material/IconButton';
import { Delete as DeleteIcon } from '@mui/icons-material';

type Tag = Omit<TagDto, 'user' | 'isArchived'>;

interface ITagSelectorProps {
    selectedTags: Tag[];
    setSelectedTags: (value: SetStateAction<Tag[]>) => void;
}

export const TagSelector: FC<ITagSelectorProps> = ({
    selectedTags,
    setSelectedTags,
}) => {
    const filterOptions = createFilterOptions<Tag>({
        ignoreCase: true,
        trim: true,
        stringify: ({ label }) => label,
    });

    const [createTag] = useCreateTagMutation({
        refetchQueries: ['Me', 'MyTags', 'MyTodos'],
    });
    const [deleteTag] = useDeleteTagMutation({
        refetchQueries: ['Me', 'MyTags', 'MyTodos'],
    });

    const { data: myTagsData } = useMyTagsQuery();
    const allTags: Tag[] = myTagsData?.myTags ?? [];

    const sortTags = (tags: Tag[]): Tag[] =>
        tags
            .slice()
            .sort(
                (tag1, tag2) =>
                    -tag2.label[0]
                        .toLocaleUpperCase()
                        .localeCompare(tag1.label[0].toLocaleUpperCase())
            );

    return (
        <Autocomplete
            multiple
            freeSolo
            disableCloseOnSelect
            value={selectedTags}
            options={sortTags(allTags)}
            groupBy={(tag) =>
                /[0-9]/.test(tag.label[0])
                    ? '#'
                    : tag.label[0].toLocaleUpperCase()
            }
            filterOptions={filterOptions}
            onChange={async (_e, newVal) => {
                const newValTags: typeof allTags = newVal.filter(
                    (tag): tag is Tag => typeof tag !== 'string'
                );
                const newValStrings: string[] = newVal.filter(
                    (tag): tag is string => typeof tag === 'string'
                );
                for (const tagString of newValStrings) {
                    if (newValTags.some((tag) => tag.label === tagString)) {
                        continue;
                    }
                    const { data } = await createTag({
                        variables: {
                            input: {
                                label: tagString ?? 'New Tag',
                                color: CategoryColor.Default,
                            },
                        },
                    });
                    if (data?.createTag) newValTags.push(data.createTag);
                }
                setSelectedTags(
                    newValTags
                        .slice()
                        .reverse()
                        .filter(
                            (tag, i, arr) =>
                                arr.findIndex((tag2) => tag2.id === tag.id) ===
                                i
                        )
                        .reverse()
                );
            }}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        checked={selected}
                        style={{
                            marginRight: 8,
                            color: colorOptions[option.color].color,
                        }}
                    ></Checkbox>
                    <Typography>{option.label}</Typography>
                    <Tooltip title={`Delete tag "${option.label}"`}>
                        <IconButton
                            color="warning"
                            size="small"
                            onClick={async (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setSelectedTags((prev) =>
                                    prev.filter((tag) => tag.id !== option.id)
                                );
                                await deleteTag({
                                    variables: { id: option.id },
                                });
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </li>
            )}
            renderInput={(inputParams) => (
                <TextField label="Tags" placeholder="Tags" {...inputParams} />
            )}
            renderTags={(value: Tag[], getTagProps) =>
                value.map((option: Tag, index: number) => (
                    <TagChip
                        tagId={option.id}
                        label={option.label}
                        color={option.color}
                        handleDelete={(_e) => {
                            setSelectedTags((prev) =>
                                prev.filter((tag) => tag.id !== option.id)
                            );
                        }}
                        {...getTagProps({ index })}
                    />
                ))
            }
            limitTags={10}
        />
    );
};
