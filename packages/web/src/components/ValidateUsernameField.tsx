import type { FC, ReactNode } from 'react';
import React from 'react';
import { useUsernameAvailabilityLazyQuery } from '@nyoomy/graphql';
import { FieldSuggestionList } from './FieldSuggestionList';
import { ValidateTextField } from './ValidateTextField';
import type { UsernameAvailabilityQuery } from '../../../graphql/src/generated/graphql-hooks';

enum UsernameProblemKind {
    WrongLength,
    InvalidChars,
    Taken,
}

interface IUsernameProblem {
    problemType: UsernameProblemKind;
    helperText: ReactNode;
}

export interface IValidateUsernameFieldProps {
    value: string;
    loading?: boolean;
    handleChange: (val: string) => void;
}

const determineProblems = (
    username: string,
    availability: UsernameAvailabilityQuery['usernameAvailability'] | undefined,
    suggestionsNode: ReactNode
): IUsernameProblem[] => {
    const problemList = [];
    const minLength = 1;
    const maxLength = 32;
    if (username.length < minLength || username.length > maxLength) {
        problemList.push({
            problemType: UsernameProblemKind.WrongLength,
            helperText: 'Username must be between 1 and 32 characters.',
        });
    }
    if (username.includes('@') || username.includes(' ')) {
        problemList.push({
            problemType: UsernameProblemKind.InvalidChars,
            helperText:
                'Username can only contain letters, numbers, and underscores.',
        });
    }
    if (availability != null && !availability.isAvailable) {
        problemList.push({
            problemType: UsernameProblemKind.Taken,
            helperText: (
                <>
                    {`"${username}"`} is already taken. Suggestions:{' '}
                    {suggestionsNode}
                </>
            ),
        });
    }
    return problemList;
};

const getSuggestionsNode = (
    suggestions: string[],
    handleChange: (val: string) => void
) => (
    <FieldSuggestionList suggestions={suggestions} handleClick={handleChange} />
);

export const ValidateUsernameField: FC<IValidateUsernameFieldProps> = ({
    value: username,
    handleChange: parentHandleChange,
    loading: parentLoading = false,
}) => {
    const [
        checkAvailability,
        { data: availabilityData, loading: availabilityLoading },
    ] = useUsernameAvailabilityLazyQuery();
    const availability = availabilityData?.usernameAvailability;
    const loading = parentLoading || availabilityLoading;

    const handleChange = (val: string) => {
        void checkAvailability({
            variables: { input: { username, recommendationsWanted: 3 } },
        });
        parentHandleChange(val);
    };

    const suggestionsNode = getSuggestionsNode(
        availability?.alternatives ?? [],
        handleChange
    );

    const problems: IUsernameProblem[] = determineProblems(
        username,
        availability,
        suggestionsNode
    );

    const hasProblems = problems.length > 0;

    return (
        <ValidateTextField
            value={username}
            isValid={!hasProblems}
            handleChange={(val) => handleChange(val)}
            loading={loading}
            textFieldProps={{
                helperText: hasProblems ? problems[0].helperText : undefined,
                placeholder: 'e.g. johnny_123',
                required: true,
            }}
        />
    );
};
