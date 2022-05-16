import type { FC } from 'react';
import React from 'react';
import { ClearAll as ClearAllIcon } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import type { Tag as TagDto } from '@nyoomy/graphql';
import { colorOptions } from './TagChip';

type Tag = Omit<TagDto, 'user' | 'isArchived'>;

interface ITagFilterSelectorProps {
    allTags: Tag[];
    selectedTags: Tag[];
    setSelectedTags: (tags: (prev: Tag[]) => Tag[]) => void;
    loading?: boolean;
}

export const TagFilterSelector: FC<ITagFilterSelectorProps> = ({
    allTags,
    selectedTags,
    setSelectedTags,
    loading = false,
}) => {
    const toggleTag = (tag: typeof selectedTags[number]): void =>
        setSelectedTags((prev) =>
            prev.some((selectedTag) => selectedTag.id === tag.id)
                ? prev.filter((selectedTag) => selectedTag.id !== tag.id)
                : prev.concat(tag)
        );

    const clearTags = () => setSelectedTags(() => [] as Tag[]);

    const isTagSelected = (tag: typeof selectedTags[number]): boolean =>
        selectedTags.some((selectedTag) => selectedTag.id === tag.id);

    return (
        <Stack direction="row" spacing={0.5}>
            {allTags?.map((tag) => (
                <Chip
                    key={tag.id}
                    label={tag.label}
                    size="small"
                    variant={isTagSelected(tag) ? 'filled' : 'outlined'}
                    onClick={() => toggleTag(tag)}
                    sx={
                        tag.color === 'DEFAULT'
                            ? {
                                  opacity: isTagSelected(tag) ? 1 : 0.5,
                              }
                            : {
                                  backgroundColor:
                                      colorOptions[tag.color].color,
                                  opacity: isTagSelected(tag) ? 1 : 0.5,
                              }
                    }
                />
            ))}
            {selectedTags.length > 0 && (
                <Tooltip title="Clear Filters">
                    <IconButton onClick={clearTags} size="small">
                        <ClearAllIcon />
                    </IconButton>
                </Tooltip>
            )}
            {loading && <CircularProgress />}
        </Stack>
    );
};
