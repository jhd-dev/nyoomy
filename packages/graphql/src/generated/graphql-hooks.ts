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

/** A single day's data for a particular CounterMetric */
export type CounterEntry = {
  __typename?: 'CounterEntry';
  id: Scalars['ID'];
  metric: CounterMetric;
  date: Scalars['String'];
  count: Scalars['Int'];
};

export type CounterMetric = IMetric & {
  __typename?: 'CounterMetric';
  id: Scalars['ID'];
  metricType: MetricType;
  user: User;
  label: Scalars['String'];
  description: Scalars['String'];
  metricEntries: Array<CounterEntry>;
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
  interval: Scalars['Int'];
};

export type CounterMetricDailyEntry = {
  __typename?: 'CounterMetricDailyEntry';
  metricId: Scalars['String'];
  metricType: MetricType;
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

export type IMetric = {
  id: Scalars['ID'];
  metricType: MetricType;
  user: User;
  label: Scalars['String'];
  description: Scalars['String'];
};

export type ITodo = {
  id: Scalars['ID'];
  user: User;
  title: Scalars['String'];
  description: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  error?: Maybe<Scalars['String']>;
};

/** The types of metrics a user can create */
export enum MetricType {
  Counter = 'COUNTER',
  Timer = 'TIMER'
}

export type Mutation = {
  __typename?: 'Mutation';
  addTodo?: Maybe<TodoResponse>;
  updateTodo?: Maybe<TodoResponse>;
  deleteTodo: Scalars['Boolean'];
  registerUser: RegistrationResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  updateUserPassword: Scalars['Boolean'];
  addTimer?: Maybe<TimerMetricPayload>;
  addCounter?: Maybe<CounterMetricDailyEntry>;
  updateCounter?: Maybe<CounterMetricDailyEntry>;
  updateTimer?: Maybe<TimerMetricPayload>;
  deleteCounter: Scalars['Boolean'];
  deleteTimer: Scalars['Boolean'];
};


export type MutationUpdateTodoArgs = {
  updateInput: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateCounterArgs = {
  updateInput: UpdateCounterMetricInput;
};


export type MutationUpdateTimerArgs = {
  updateInput: UpdateTimerMetricInput;
};


export type MutationDeleteCounterArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTimerArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getTimers: Array<TimerMetricPayload>;
  getMyTodos: Array<TodoResponse>;
  getAllUsers: Array<User>;
  currentUser?: Maybe<User>;
  getCounters: Array<CounterMetricDailyEntry>;
  getDayCounters: Array<CounterMetricDailyEntry>;
};


export type QueryGetMyTodosArgs = {
  excludeArchived?: Maybe<Scalars['Boolean']>;
};


export type QueryGetDayCountersArgs = {
  date: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type SubTodo = ITodo & {
  __typename?: 'SubTodo';
  id: Scalars['ID'];
  user: User;
  title: Scalars['String'];
  description: Scalars['String'];
  supertask: Todo;
  subtasks: Array<SubTodo>;
  isCompleted: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
};

export type TimerAttempt = {
  __typename?: 'TimerAttempt';
  id: Scalars['ID'];
  entry: TimerEntry;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  didFinish: Scalars['Boolean'];
  didSucceed?: Maybe<Scalars['Boolean']>;
};

export type TimerEntry = {
  __typename?: 'TimerEntry';
  id: Scalars['ID'];
  metric: TimerMetric;
  date: Scalars['String'];
  attempts: Array<TimerAttempt>;
};

export type TimerMetric = {
  __typename?: 'TimerMetric';
  id: Scalars['ID'];
  metricType: MetricType;
  user: User;
  metricEntries: Array<TimerEntry>;
  label: Scalars['String'];
  description: Scalars['String'];
  goalLength: Scalars['Int'];
  goalPerDay: Scalars['Int'];
};

export type TimerMetricPayload = {
  __typename?: 'TimerMetricPayload';
  metricId: Scalars['String'];
  metricType: Scalars['String'];
  date: Scalars['String'];
  label: Scalars['String'];
  description: Scalars['String'];
  goalLength: Scalars['Int'];
  goalPerDay: Scalars['Int'];
  startTime?: Maybe<Scalars['String']>;
};

export type Todo = ITodo & {
  __typename?: 'Todo';
  id: Scalars['ID'];
  user: User;
  title: Scalars['String'];
  description: Scalars['String'];
  entries: Array<TodoEntry>;
  subtasks: Array<SubTodo>;
  isCompleted: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  repeatWeekdays: Array<Weekday>;
  doesRepeat: Scalars['Boolean'];
};

/** A single day's data for a particular CounterMetric */
export type TodoEntry = {
  __typename?: 'TodoEntry';
  id: Scalars['ID'];
  todo: Todo;
  date: Scalars['String'];
  isCompleted: Scalars['Boolean'];
};

export type TodoResponse = {
  __typename?: 'TodoResponse';
  todoId: Scalars['String'];
  date: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  repeatWeekdays: Array<Weekday>;
};

export type UpdateCounterMetricInput = {
  metricId: Scalars['ID'];
  date: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['Int']>;
  minimum?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UpdateTimerMetricInput = {
  metricId: Scalars['ID'];
  date: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['Int']>;
  goalLength?: Maybe<Scalars['Int']>;
  goalPerDay?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  todoId: Scalars['ID'];
  date: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  repeatWeekdays?: Maybe<Array<Weekday>>;
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
  timerMetrics: Array<TimerMetric>;
  todos: Array<Todo>;
  createdAt: Scalars['DateTime'];
};

/** The days of the week */
export enum Weekday {
  Sunday = 'SUNDAY',
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY'
}

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
    & Pick<CounterMetricDailyEntry, 'metricId' | 'metricType' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type DayCountersQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type DayCountersQuery = (
  { __typename?: 'Query' }
  & { getDayCounters: Array<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'metricType' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type AddCounterMutationVariables = Exact<{ [key: string]: never; }>;


export type AddCounterMutation = (
  { __typename?: 'Mutation' }
  & { addCounter?: Maybe<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'metricType' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )> }
);

export type AddTimerMutationVariables = Exact<{ [key: string]: never; }>;


export type AddTimerMutation = (
  { __typename?: 'Mutation' }
  & { addTimer?: Maybe<(
    { __typename?: 'TimerMetricPayload' }
    & Pick<TimerMetricPayload, 'metricId' | 'metricType' | 'label' | 'description' | 'date' | 'goalLength' | 'goalPerDay' | 'startTime'>
  )> }
);

export type UpdateTimerMutationVariables = Exact<{
  updateInput: UpdateTimerMetricInput;
}>;


export type UpdateTimerMutation = (
  { __typename?: 'Mutation' }
  & { updateTimer?: Maybe<(
    { __typename?: 'TimerMetricPayload' }
    & Pick<TimerMetricPayload, 'metricId' | 'metricType' | 'label' | 'description' | 'date' | 'goalLength' | 'goalPerDay' | 'startTime'>
  )> }
);

export type UpdateCounterMutationVariables = Exact<{
  updateInput: UpdateCounterMetricInput;
}>;


export type UpdateCounterMutation = (
  { __typename?: 'Mutation' }
  & { updateCounter?: Maybe<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'metricType' | 'date' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'count'>
  )> }
);

export type DeleteCounterMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCounterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCounter'>
);

export type DeleteTimerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTimerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTimer'>
);

export type MetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type MetricsQuery = (
  { __typename?: 'Query' }
  & { getCounters: Array<(
    { __typename?: 'CounterMetricDailyEntry' }
    & Pick<CounterMetricDailyEntry, 'metricId' | 'metricType' | 'label' | 'description' | 'maximum' | 'minimum' | 'interval' | 'date' | 'count'>
  )>, getTimers: Array<(
    { __typename?: 'TimerMetricPayload' }
    & Pick<TimerMetricPayload, 'metricId' | 'metricType' | 'label' | 'description' | 'date' | 'goalLength' | 'goalPerDay' | 'startTime'>
  )> }
);

export type MyTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTodosQuery = (
  { __typename?: 'Query' }
  & { getMyTodos: Array<(
    { __typename?: 'TodoResponse' }
    & Pick<TodoResponse, 'todoId' | 'date' | 'title' | 'description' | 'isCompleted' | 'isArchived' | 'repeatWeekdays'>
  )> }
);

export type AddTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { addTodo?: Maybe<(
    { __typename?: 'TodoResponse' }
    & Pick<TodoResponse, 'todoId' | 'date' | 'title' | 'description' | 'isCompleted' | 'isArchived' | 'repeatWeekdays'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  updateInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo?: Maybe<(
    { __typename?: 'TodoResponse' }
    & Pick<TodoResponse, 'todoId' | 'date' | 'title' | 'description'>
  )> }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTodo'>
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
    metricType
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
    metricType
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
    metricType
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
export const AddTimerDocument = gql`
    mutation AddTimer {
  addTimer {
    metricId
    metricType
    label
    description
    date
    goalLength
    goalPerDay
    startTime
  }
}
    `;
export type AddTimerMutationFn = Apollo.MutationFunction<AddTimerMutation, AddTimerMutationVariables>;

/**
 * __useAddTimerMutation__
 *
 * To run a mutation, you first call `useAddTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTimerMutation, { data, loading, error }] = useAddTimerMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddTimerMutation(baseOptions?: Apollo.MutationHookOptions<AddTimerMutation, AddTimerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTimerMutation, AddTimerMutationVariables>(AddTimerDocument, options);
      }
export type AddTimerMutationHookResult = ReturnType<typeof useAddTimerMutation>;
export type AddTimerMutationResult = Apollo.MutationResult<AddTimerMutation>;
export type AddTimerMutationOptions = Apollo.BaseMutationOptions<AddTimerMutation, AddTimerMutationVariables>;
export const UpdateTimerDocument = gql`
    mutation UpdateTimer($updateInput: UpdateTimerMetricInput!) {
  updateTimer(updateInput: $updateInput) {
    metricId
    metricType
    label
    description
    date
    goalLength
    goalPerDay
    startTime
  }
}
    `;
export type UpdateTimerMutationFn = Apollo.MutationFunction<UpdateTimerMutation, UpdateTimerMutationVariables>;

/**
 * __useUpdateTimerMutation__
 *
 * To run a mutation, you first call `useUpdateTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimerMutation, { data, loading, error }] = useUpdateTimerMutation({
 *   variables: {
 *      updateInput: // value for 'updateInput'
 *   },
 * });
 */
export function useUpdateTimerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimerMutation, UpdateTimerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTimerMutation, UpdateTimerMutationVariables>(UpdateTimerDocument, options);
      }
export type UpdateTimerMutationHookResult = ReturnType<typeof useUpdateTimerMutation>;
export type UpdateTimerMutationResult = Apollo.MutationResult<UpdateTimerMutation>;
export type UpdateTimerMutationOptions = Apollo.BaseMutationOptions<UpdateTimerMutation, UpdateTimerMutationVariables>;
export const UpdateCounterDocument = gql`
    mutation UpdateCounter($updateInput: UpdateCounterMetricInput!) {
  updateCounter(updateInput: $updateInput) {
    metricId
    metricType
    date
    label
    description
    maximum
    minimum
    interval
    count
  }
}
    `;
export type UpdateCounterMutationFn = Apollo.MutationFunction<UpdateCounterMutation, UpdateCounterMutationVariables>;

/**
 * __useUpdateCounterMutation__
 *
 * To run a mutation, you first call `useUpdateCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCounterMutation, { data, loading, error }] = useUpdateCounterMutation({
 *   variables: {
 *      updateInput: // value for 'updateInput'
 *   },
 * });
 */
export function useUpdateCounterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCounterMutation, UpdateCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCounterMutation, UpdateCounterMutationVariables>(UpdateCounterDocument, options);
      }
export type UpdateCounterMutationHookResult = ReturnType<typeof useUpdateCounterMutation>;
export type UpdateCounterMutationResult = Apollo.MutationResult<UpdateCounterMutation>;
export type UpdateCounterMutationOptions = Apollo.BaseMutationOptions<UpdateCounterMutation, UpdateCounterMutationVariables>;
export const DeleteCounterDocument = gql`
    mutation DeleteCounter($id: ID!) {
  deleteCounter(id: $id)
}
    `;
export type DeleteCounterMutationFn = Apollo.MutationFunction<DeleteCounterMutation, DeleteCounterMutationVariables>;

/**
 * __useDeleteCounterMutation__
 *
 * To run a mutation, you first call `useDeleteCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCounterMutation, { data, loading, error }] = useDeleteCounterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCounterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCounterMutation, DeleteCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCounterMutation, DeleteCounterMutationVariables>(DeleteCounterDocument, options);
      }
export type DeleteCounterMutationHookResult = ReturnType<typeof useDeleteCounterMutation>;
export type DeleteCounterMutationResult = Apollo.MutationResult<DeleteCounterMutation>;
export type DeleteCounterMutationOptions = Apollo.BaseMutationOptions<DeleteCounterMutation, DeleteCounterMutationVariables>;
export const DeleteTimerDocument = gql`
    mutation DeleteTimer($id: ID!) {
  deleteTimer(id: $id)
}
    `;
export type DeleteTimerMutationFn = Apollo.MutationFunction<DeleteTimerMutation, DeleteTimerMutationVariables>;

/**
 * __useDeleteTimerMutation__
 *
 * To run a mutation, you first call `useDeleteTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimerMutation, { data, loading, error }] = useDeleteTimerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTimerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTimerMutation, DeleteTimerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTimerMutation, DeleteTimerMutationVariables>(DeleteTimerDocument, options);
      }
export type DeleteTimerMutationHookResult = ReturnType<typeof useDeleteTimerMutation>;
export type DeleteTimerMutationResult = Apollo.MutationResult<DeleteTimerMutation>;
export type DeleteTimerMutationOptions = Apollo.BaseMutationOptions<DeleteTimerMutation, DeleteTimerMutationVariables>;
export const MetricsDocument = gql`
    query Metrics {
  getCounters {
    metricId
    metricType
    label
    description
    maximum
    minimum
    interval
    date
    count
  }
  getTimers {
    metricId
    metricType
    label
    description
    date
    goalLength
    goalPerDay
    startTime
  }
}
    `;

/**
 * __useMetricsQuery__
 *
 * To run a query within a React component, call `useMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMetricsQuery(baseOptions?: Apollo.QueryHookOptions<MetricsQuery, MetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MetricsQuery, MetricsQueryVariables>(MetricsDocument, options);
      }
export function useMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MetricsQuery, MetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MetricsQuery, MetricsQueryVariables>(MetricsDocument, options);
        }
export type MetricsQueryHookResult = ReturnType<typeof useMetricsQuery>;
export type MetricsLazyQueryHookResult = ReturnType<typeof useMetricsLazyQuery>;
export type MetricsQueryResult = Apollo.QueryResult<MetricsQuery, MetricsQueryVariables>;
export function refetchMetricsQuery(variables?: MetricsQueryVariables) {
      return { query: MetricsDocument, variables: variables }
    }
export const MyTodosDocument = gql`
    query MyTodos {
  getMyTodos {
    todoId
    date
    title
    description
    isCompleted
    isArchived
    repeatWeekdays
  }
}
    `;

/**
 * __useMyTodosQuery__
 *
 * To run a query within a React component, call `useMyTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTodosQuery(baseOptions?: Apollo.QueryHookOptions<MyTodosQuery, MyTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTodosQuery, MyTodosQueryVariables>(MyTodosDocument, options);
      }
export function useMyTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTodosQuery, MyTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTodosQuery, MyTodosQueryVariables>(MyTodosDocument, options);
        }
export type MyTodosQueryHookResult = ReturnType<typeof useMyTodosQuery>;
export type MyTodosLazyQueryHookResult = ReturnType<typeof useMyTodosLazyQuery>;
export type MyTodosQueryResult = Apollo.QueryResult<MyTodosQuery, MyTodosQueryVariables>;
export function refetchMyTodosQuery(variables?: MyTodosQueryVariables) {
      return { query: MyTodosDocument, variables: variables }
    }
export const AddTodoDocument = gql`
    mutation AddTodo {
  addTodo {
    todoId
    date
    title
    description
    isCompleted
    isArchived
    repeatWeekdays
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($updateInput: UpdateTodoInput!) {
  updateTodo(updateInput: $updateInput) {
    todoId
    date
    title
    description
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateInput: // value for 'updateInput'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
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