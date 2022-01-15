/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** The icons available to accompany category/tag titles */
export enum CategoryIcon {
  Globe = 'GLOBE',
  Rocket = 'ROCKET',
  Star = 'STAR',
  Water = 'WATER'
}

export type CounterMetric = {
  __typename?: 'CounterMetric';
  id: Scalars['ID'];
  interval: Scalars['Int'];
  maximum: Scalars['Int'];
  metric: Metric;
  metricType: MetricType;
  minimum: Scalars['Int'];
};

export type DailyFloatMetric = {
  __typename?: 'DailyFloatMetric';
  id: Scalars['ID'];
  max: Scalars['Float'];
  metric: Metric;
  metricType: MetricType;
  min: Scalars['Float'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Journal = {
  __typename?: 'Journal';
  dailyWordGoal: Scalars['Int'];
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  metric: Metric;
  metricType: MetricType;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<SafeUser>;
};

export type Metric = {
  __typename?: 'Metric';
  description: Scalars['String'];
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  taggable: Taggable;
  title: Scalars['String'];
  user: User;
};

/** The types of metrics a user can create */
export enum MetricType {
  Counter = 'COUNTER',
  Float = 'FLOAT',
  Journal = 'JOURNAL',
  Scale = 'SCALE',
  Selection = 'SELECTION',
  String = 'STRING',
  Timer = 'TIMER'
}

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  login?: Maybe<LoginResponse>;
  logout: Scalars['Boolean'];
  registerUser: RegistrationResponse;
  updateUserPassword: Scalars['Boolean'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdatePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

/** User registration data */
export type RegisterUserInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<SafeUser>;
};

/** User data excluding authentication-unsafe fields */
export type SafeUser = {
  __typename?: 'SafeUser';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  googleId: Scalars['String'];
  id: Scalars['ID'];
  isEmailVerified: Scalars['Boolean'];
  stars: Scalars['Int'];
  username: Scalars['String'];
};

/** A Numeric Rating Scale */
export type Scale = {
  __typename?: 'Scale';
  id: Scalars['ID'];
  max: Scalars['Int'];
  metric: Metric;
  metricType: MetricType;
  min: Scalars['Int'];
};

export type SelectionCategory = {
  __typename?: 'SelectionCategory';
  id: Scalars['ID'];
  metric: SelectionMetric;
  title: Scalars['String'];
};

export type SelectionEntry = {
  __typename?: 'SelectionEntry';
  datetime: Scalars['DateTime'];
  id: Scalars['ID'];
  metric: SelectionMetric;
  selectedOptions: Array<SelectionOption>;
};

/** A Numeric Rating Selection */
export type SelectionMetric = {
  __typename?: 'SelectionMetric';
  id: Scalars['ID'];
  maxSelections: Scalars['Int'];
  metric: Metric;
  metricType: MetricType;
  minSelections: Scalars['Int'];
};

export type SelectionOption = {
  __typename?: 'SelectionOption';
  category: SelectionCategory;
  id: Scalars['ID'];
  metric: SelectionMetric;
  selectingEntries: Array<SelectionEntry>;
  title: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  icon?: Maybe<CategoryIcon>;
  id: Scalars['ID'];
  taggedItems: Array<Taggable>;
  title: Scalars['String'];
  user: User;
};

export type Taggable = {
  __typename?: 'Taggable';
  id: Scalars['ID'];
  tags: Array<Tag>;
};

export type TimerMetric = {
  __typename?: 'TimerMetric';
  goalLength: Scalars['Int'];
  goalPerDay: Scalars['Int'];
  id: Scalars['ID'];
  metric: Metric;
  metricType: MetricType;
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String'];
  doesRepeat: Scalars['Boolean'];
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  isCompleted: Scalars['Boolean'];
  repeatWeekdays: Array<Weekday>;
  subtasks: Array<Todo>;
  title: Scalars['String'];
  user: User;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  username: Scalars['String'];
};

/** Centralized user reference */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  googleId: Scalars['String'];
  id: Scalars['ID'];
  isEmailVerified: Scalars['Boolean'];
  stars: Scalars['Int'];
  username: Scalars['String'];
};

export type UserLoginInput = {
  passwordInput: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

/** The days of the week */
export enum Weekday {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string } | null | undefined };

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegistrationResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null | undefined } };

export type LoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null | undefined } | null | undefined };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };


export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const RegisterDocument = gql`
    mutation Register($input: RegisterUserInput!) {
  registerUser(input: $input) {
    user {
      id
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: UserLoginInput!) {
  login(input: $input) {
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;