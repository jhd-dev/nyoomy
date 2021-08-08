/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CounterEntry = {
  __typename?: 'CounterEntry';
  id: Scalars['ID'];
  metric: CounterMetric;
  date: Scalars['String'];
  count: Scalars['Int'];
};

export type CounterMetric = {
  __typename?: 'CounterMetric';
  id: Scalars['ID'];
  label: Scalars['String'];
  description: Scalars['String'];
  user: User;
  metricEntries: Array<CounterEntry>;
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
  interval: Scalars['Int'];
};

export type CounterMetricDailyEntry = {
  __typename?: 'CounterMetricDailyEntry';
  metricId: Scalars['String'];
  date: Scalars['String'];
  count: Scalars['Int'];
  label: Scalars['String'];
  description: Scalars['String'];
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
  interval: Scalars['Int'];
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  error?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: RegistrationResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  updateUserPassword: Scalars['Boolean'];
  addCounter?: Maybe<CounterMetricDailyEntry>;
};


export type MutationRegisterUserArgs = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  currentUser?: Maybe<User>;
  getCounters: Array<CounterMetricDailyEntry>;
  getDayCounters: Array<CounterMetricDailyEntry>;
};


export type QueryGetDayCountersArgs = {
  date: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  displayName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  tokenVersion: Scalars['Int'];
  birthday: Scalars['String'];
  picture: Scalars['String'];
  isPublic: Scalars['Boolean'];
  isEmailVerified: Scalars['Boolean'];
  bio: Scalars['String'];
  cron: Scalars['String'];
  language: Scalars['String'];
  metrics: Array<CounterMetric>;
  createdAt: Scalars['DateTime'];
};

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'displayName' | 'username'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  displayName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'RegistrationResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'displayName' | 'username'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type CountersQueryVariables = Exact<{ [key: string]: never; }>;


export type CountersQuery = (
  { __typename?: 'Query' }
  & { getCounters: Array<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type DayCountersQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type DayCountersQuery = (
  { __typename?: 'Query' }
  & { getDayCounters: Array<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type AddCounterMutationVariables = Exact<{ [key: string]: never; }>;


export type AddCounterMutation = (
  { __typename?: 'Mutation' }
  & { addCounter?: Maybe<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'displayName' | 'username'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'displayName' | 'username'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    user {
      id
      displayName
      username
    }
    error
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
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
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
export const RegisterDocument = gql`
    mutation Register($displayName: String!, $email: String!, $username: String!, $password: String!) {
  registerUser(
    displayName: $displayName
    email: $email
    username: $username
    password: $password
  ) {
    user {
      id
      displayName
      username
    }
    errors {
      field
      message
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
 *      displayName: // value for 'displayName'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
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
export const CountersDocument = gql`
    query Counters {
  getCounters {
    metricId
    label
    description
    maximum
    minimum
    interval
    date
    count
  }
}
    `;

/**
 * __useCountersQuery__
 *
 * To run a query within a React component, call `useCountersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountersQuery(baseOptions?: Apollo.QueryHookOptions<CountersQuery, CountersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountersQuery, CountersQueryVariables>(CountersDocument, options);
      }
export function useCountersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountersQuery, CountersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountersQuery, CountersQueryVariables>(CountersDocument, options);
        }
export type CountersQueryHookResult = ReturnType<typeof useCountersQuery>;
export type CountersLazyQueryHookResult = ReturnType<typeof useCountersLazyQuery>;
export type CountersQueryResult = Apollo.QueryResult<CountersQuery, CountersQueryVariables>;
export function refetchCountersQuery(variables?: CountersQueryVariables) {
      return { query: CountersDocument, variables: variables }
    }
export const DayCountersDocument = gql`
    query DayCounters($date: String!) {
  getDayCounters(date: $date) {
    metricId
    label
    description
    maximum
    minimum
    interval
    date
    count
  }
}
    `;

/**
 * __useDayCountersQuery__
 *
 * To run a query within a React component, call `useDayCountersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDayCountersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDayCountersQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useDayCountersQuery(baseOptions: Apollo.QueryHookOptions<DayCountersQuery, DayCountersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DayCountersQuery, DayCountersQueryVariables>(DayCountersDocument, options);
      }
export function useDayCountersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DayCountersQuery, DayCountersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DayCountersQuery, DayCountersQueryVariables>(DayCountersDocument, options);
        }
export type DayCountersQueryHookResult = ReturnType<typeof useDayCountersQuery>;
export type DayCountersLazyQueryHookResult = ReturnType<typeof useDayCountersLazyQuery>;
export type DayCountersQueryResult = Apollo.QueryResult<DayCountersQuery, DayCountersQueryVariables>;
export function refetchDayCountersQuery(variables?: DayCountersQueryVariables) {
      return { query: DayCountersDocument, variables: variables }
    }
export const AddCounterDocument = gql`
    mutation AddCounter {
  addCounter {
    metricId
    label
    description
    maximum
    minimum
    interval
    date
    count
  }
}
    `;
export type AddCounterMutationFn = Apollo.MutationFunction<AddCounterMutation, AddCounterMutationVariables>;

/**
 * __useAddCounterMutation__
 *
 * To run a mutation, you first call `useAddCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCounterMutation, { data, loading, error }] = useAddCounterMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddCounterMutation(baseOptions?: Apollo.MutationHookOptions<AddCounterMutation, AddCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCounterMutation, AddCounterMutationVariables>(AddCounterDocument, options);
      }
export type AddCounterMutationHookResult = ReturnType<typeof useAddCounterMutation>;
export type AddCounterMutationResult = Apollo.MutationResult<AddCounterMutation>;
export type AddCounterMutationOptions = Apollo.BaseMutationOptions<AddCounterMutation, AddCounterMutationVariables>;
export const UsersDocument = gql`
    query Users {
  getAllUsers {
    displayName
    username
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export function refetchUsersQuery(variables?: UsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }
export const MeDocument = gql`
    query Me {
  currentUser {
    id
    displayName
    username
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