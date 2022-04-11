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

export type AddTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  repeatWeekdays?: InputMaybe<Array<Weekday>>;
  title?: InputMaybe<Scalars['String']>;
};

/** The icons available to accompany category/tag titles */
export enum CategoryIcon {
  Globe = 'GLOBE',
  Rocket = 'ROCKET',
  Star = 'STAR',
  Water = 'WATER'
}

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  members: User;
};

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

export type EditMessageInput = {
  content: Scalars['String'];
  messageId: Scalars['Float'];
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
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<SafeUser>;
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  content: Scalars['String'];
  edittedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  sender: User;
  sentAt: Scalars['DateTime'];
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
  addTodo?: Maybe<Todo>;
  deleteMessage?: Maybe<Scalars['Boolean']>;
  deleteTodo: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  editMessage?: Maybe<Message>;
  login?: Maybe<LoginResponse>;
  logout: Scalars['Boolean'];
  registerUser: RegistrationResponse;
  sendMessageToChat?: Maybe<Message>;
  sendMessageToUser?: Maybe<Message>;
  updateTodo?: Maybe<Todo>;
  updateUserPassword: Scalars['Boolean'];
};


export type MutationAddTodoArgs = {
  input: AddTodoInput;
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['ID'];
};


export type MutationEditMessageArgs = {
  input: EditMessageInput;
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationSendMessageToChatArgs = {
  input: SendMessageToChatInput;
};


export type MutationSendMessageToUserArgs = {
  input: SendMessageToUserInput;
};


export type MutationUpdateTodoArgs = {
  updateInput: UpdateTodoInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdatePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  getMyTodos: Array<Todo>;
  me?: Maybe<User>;
  myChats: Array<Chat>;
};


export type QueryGetMyTodosArgs = {
  excludeArchived: Scalars['Boolean'];
};


export type QueryMyChatsArgs = {
  excludeArchived: Scalars['Boolean'];
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

export type SendMessageToChatInput = {
  chatId: Scalars['Float'];
  content: Scalars['String'];
};

export type SendMessageToUserInput = {
  content: Scalars['String'];
  recipientId: Scalars['String'];
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
  supertask?: Maybe<Todo>;
  title: Scalars['String'];
  user: User;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateTodoInput = {
  date: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  repeatWeekdays?: InputMaybe<Array<Weekday>>;
  title?: InputMaybe<Scalars['String']>;
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

export type MyChatsQueryVariables = Exact<{
  excludeArchived: Scalars['Boolean'];
}>;


export type MyChatsQuery = { __typename?: 'Query', myChats: Array<{ __typename?: 'Chat', id: string, members: { __typename?: 'User', id: string, username: string } }> };

export type SendMessageToUserMutationVariables = Exact<{
  input: SendMessageToUserInput;
}>;


export type SendMessageToUserMutation = { __typename?: 'Mutation', sendMessageToUser?: { __typename?: 'Message', id: string } | null };

export type SendMessageToChatMutationVariables = Exact<{
  input: SendMessageToChatInput;
}>;


export type SendMessageToChatMutation = { __typename?: 'Mutation', sendMessageToChat?: { __typename?: 'Message', id: string, content: string, sentAt: any, chat: { __typename?: 'Chat', id: string } } | null };

export type EditMessageMutationVariables = Exact<{
  input: EditMessageInput;
}>;


export type EditMessageMutation = { __typename?: 'Mutation', editMessage?: { __typename?: 'Message', id: string, content: string, sentAt: any, edittedAt: any, chat: { __typename?: 'Chat', id: string } } | null };

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage?: boolean | null };

export type MyTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTodosQuery = { __typename?: 'Query', getMyTodos: Array<{ __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean, repeatWeekdays: Array<Weekday> }> };

export type AddTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: { __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean, repeatWeekdays: Array<Weekday> } | null };

export type UpdateTodoMutationVariables = Exact<{
  updateInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string } | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegistrationResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null } };

export type LoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };


export const MyChatsDocument = gql`
    query MyChats($excludeArchived: Boolean!) {
  myChats(excludeArchived: $excludeArchived) {
    id
    members {
      id
      username
    }
  }
}
    `;

/**
 * __useMyChatsQuery__
 *
 * To run a query within a React component, call `useMyChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyChatsQuery({
 *   variables: {
 *      excludeArchived: // value for 'excludeArchived'
 *   },
 * });
 */
export function useMyChatsQuery(baseOptions: Apollo.QueryHookOptions<MyChatsQuery, MyChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyChatsQuery, MyChatsQueryVariables>(MyChatsDocument, options);
      }
export function useMyChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyChatsQuery, MyChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyChatsQuery, MyChatsQueryVariables>(MyChatsDocument, options);
        }
export type MyChatsQueryHookResult = ReturnType<typeof useMyChatsQuery>;
export type MyChatsLazyQueryHookResult = ReturnType<typeof useMyChatsLazyQuery>;
export type MyChatsQueryResult = Apollo.QueryResult<MyChatsQuery, MyChatsQueryVariables>;
export function refetchMyChatsQuery(variables: MyChatsQueryVariables) {
      return { query: MyChatsDocument, variables: variables }
    }
export const SendMessageToUserDocument = gql`
    mutation SendMessageToUser($input: SendMessageToUserInput!) {
  sendMessageToUser(input: $input) {
    id
  }
}
    `;
export type SendMessageToUserMutationFn = Apollo.MutationFunction<SendMessageToUserMutation, SendMessageToUserMutationVariables>;

/**
 * __useSendMessageToUserMutation__
 *
 * To run a mutation, you first call `useSendMessageToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageToUserMutation, { data, loading, error }] = useSendMessageToUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageToUserMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageToUserMutation, SendMessageToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageToUserMutation, SendMessageToUserMutationVariables>(SendMessageToUserDocument, options);
      }
export type SendMessageToUserMutationHookResult = ReturnType<typeof useSendMessageToUserMutation>;
export type SendMessageToUserMutationResult = Apollo.MutationResult<SendMessageToUserMutation>;
export type SendMessageToUserMutationOptions = Apollo.BaseMutationOptions<SendMessageToUserMutation, SendMessageToUserMutationVariables>;
export const SendMessageToChatDocument = gql`
    mutation SendMessageToChat($input: SendMessageToChatInput!) {
  sendMessageToChat(input: $input) {
    id
    chat {
      id
    }
    content
    sentAt
  }
}
    `;
export type SendMessageToChatMutationFn = Apollo.MutationFunction<SendMessageToChatMutation, SendMessageToChatMutationVariables>;

/**
 * __useSendMessageToChatMutation__
 *
 * To run a mutation, you first call `useSendMessageToChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageToChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageToChatMutation, { data, loading, error }] = useSendMessageToChatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageToChatMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageToChatMutation, SendMessageToChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageToChatMutation, SendMessageToChatMutationVariables>(SendMessageToChatDocument, options);
      }
export type SendMessageToChatMutationHookResult = ReturnType<typeof useSendMessageToChatMutation>;
export type SendMessageToChatMutationResult = Apollo.MutationResult<SendMessageToChatMutation>;
export type SendMessageToChatMutationOptions = Apollo.BaseMutationOptions<SendMessageToChatMutation, SendMessageToChatMutationVariables>;
export const EditMessageDocument = gql`
    mutation EditMessage($input: EditMessageInput!) {
  editMessage(input: $input) {
    id
    chat {
      id
    }
    content
    sentAt
    edittedAt
  }
}
    `;
export type EditMessageMutationFn = Apollo.MutationFunction<EditMessageMutation, EditMessageMutationVariables>;

/**
 * __useEditMessageMutation__
 *
 * To run a mutation, you first call `useEditMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMessageMutation, { data, loading, error }] = useEditMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditMessageMutation(baseOptions?: Apollo.MutationHookOptions<EditMessageMutation, EditMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMessageMutation, EditMessageMutationVariables>(EditMessageDocument, options);
      }
export type EditMessageMutationHookResult = ReturnType<typeof useEditMessageMutation>;
export type EditMessageMutationResult = Apollo.MutationResult<EditMessageMutation>;
export type EditMessageMutationOptions = Apollo.BaseMutationOptions<EditMessageMutation, EditMessageMutationVariables>;
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($messageId: ID!) {
  deleteMessage(messageId: $messageId)
}
    `;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, options);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const MyTodosDocument = gql`
    query MyTodos {
  getMyTodos(excludeArchived: true) {
    id
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
  addTodo(input: {}) {
    id
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
    id
    title
    description
    isCompleted
    isArchived
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