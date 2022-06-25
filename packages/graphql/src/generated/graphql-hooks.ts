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

export type AddTagInput = {
  color?: InputMaybe<CategoryColor>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<CategoryIcon>;
  label: Scalars['String'];
  taggedItem?: InputMaybe<TaggableInput>;
};

export type AddTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  repeatWeekdays?: InputMaybe<Array<Weekday>>;
  tagUpdates?: InputMaybe<Array<UpdateTagInput>>;
  title?: InputMaybe<Scalars['String']>;
};

/** Info on the availability of a unique input (i.e. username) */
export type AvailabilityDto = {
  __typename?: 'AvailabilityDto';
  alternatives?: Maybe<Array<Scalars['String']>>;
  attemptedInput?: Maybe<Scalars['String']>;
  fieldName: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  timeChecked: Scalars['DateTime'];
};

/** Colors a user may associate with a category/tag */
export enum CategoryColor {
  Blue = 'BLUE',
  Default = 'DEFAULT',
  Green = 'GREEN',
  Red = 'RED',
  Yellow = 'YELLOW'
}

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

export type CreateFeedbackInput = {
  details: Scalars['String'];
  /** The maximum rating a user had the option to give, i.e. 5 stars */
  maxRating?: InputMaybe<Scalars['Int']>;
  purpose: Scalars['String'];
  /** The user's rating out of 10, e.g. 2.5 of 5 stars would yield a value of 5 */
  rating?: InputMaybe<Scalars['Int']>;
};

export type DailyFloatMetric = {
  __typename?: 'DailyFloatMetric';
  id: Scalars['ID'];
  max: Scalars['Float'];
  metric: Metric;
  metricType: MetricType;
  min: Scalars['Float'];
};

export type EditFeedbackDto = {
  __typename?: 'EditFeedbackDto';
  success: Scalars['Boolean'];
};

export type EditMessageInput = {
  content: Scalars['String'];
  messageId: Scalars['String'];
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
  applyTag?: Maybe<Tag>;
  createTag?: Maybe<Tag>;
  deleteMessage?: Maybe<Scalars['Boolean']>;
  deleteTag: Scalars['Boolean'];
  deleteTodo: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserById: Scalars['Boolean'];
  editMessage?: Maybe<Message>;
  login?: Maybe<LoginResponse>;
  logout: Scalars['Boolean'];
  registerUser: RegistrationResponse;
  sendFeedback: EditFeedbackDto;
  sendMessageToChat?: Maybe<Message>;
  sendMessageToUser?: Maybe<Message>;
  updateSettings?: Maybe<UserSettingsDto>;
  updateTag?: Maybe<Tag>;
  updateTodo?: Maybe<Todo>;
  updateUserPassword: Scalars['Boolean'];
};


export type MutationAddTodoArgs = {
  input: AddTodoInput;
};


export type MutationApplyTagArgs = {
  tagId: Scalars['ID'];
  taggableId: Scalars['ID'];
};


export type MutationCreateTagArgs = {
  tagInput: AddTagInput;
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['ID'];
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


export type MutationSendFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationSendMessageToChatArgs = {
  input: SendMessageToChatInput;
};


export type MutationSendMessageToUserArgs = {
  input: SendMessageToUserInput;
};


export type MutationUpdateSettingsArgs = {
  input: UpdateUserSettingsInput;
};


export type MutationUpdateTagArgs = {
  updateInput: UpdateTagInput;
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
  getTodo: Array<Todo>;
  me?: Maybe<User>;
  myChats: Array<Chat>;
  mySettings?: Maybe<UserSettingsDto>;
  myTags: Array<Tag>;
  randomAvailableUsername?: Maybe<Scalars['String']>;
  usernameAvailability: AvailabilityDto;
  users?: Maybe<Array<User>>;
};


export type QueryGetMyTodosArgs = {
  excludeArchived: Scalars['Boolean'];
};


export type QueryGetTodoArgs = {
  id: Scalars['String'];
};


export type QueryMyChatsArgs = {
  excludeArchived: Scalars['Boolean'];
};


export type QueryUsernameAvailabilityArgs = {
  input: UsernameAvailabilityArgs;
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
  chatId: Scalars['String'];
  content: Scalars['String'];
};

export type SendMessageToUserInput = {
  content: Scalars['String'];
  recipientId: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  color: CategoryColor;
  description: Scalars['String'];
  icon?: Maybe<CategoryIcon>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  label: Scalars['String'];
  user: User;
};

export type Taggable = {
  __typename?: 'Taggable';
  id: Scalars['ID'];
  tags: Array<Tag>;
};

export type TaggableInput = {
  id: Scalars['ID'];
};

/** The visual themes that can be used to style the app */
export enum ThemePreference {
  Dark = 'DARK',
  Device = 'DEVICE',
  HighContrast = 'HIGH_CONTRAST',
  Light = 'LIGHT',
  Oled = 'OLED'
}

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
  tags: Array<Tag>;
  title: Scalars['String'];
  user: User;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateTagInput = {
  applyTaggables?: InputMaybe<Array<TaggableInput>>;
  color?: InputMaybe<CategoryColor>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<CategoryIcon>;
  id: Scalars['ID'];
  label?: InputMaybe<Scalars['String']>;
  removeTaggables?: InputMaybe<Array<TaggableInput>>;
  taggables?: InputMaybe<Array<TaggableInput>>;
};

export type UpdateTodoInput = {
  date: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  repeatWeekdays?: InputMaybe<Array<Weekday>>;
  tagUpdates?: InputMaybe<Array<UpdateTagInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserSettingsInput = {
  audioEnabled?: InputMaybe<Scalars['Boolean']>;
  globalVolume?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  pinTimeout?: InputMaybe<Scalars['Int']>;
  themePreference?: InputMaybe<ThemePreference>;
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

/** Users' settings and preferences */
export type UserSettingsDto = {
  __typename?: 'UserSettingsDto';
  audioEnabled: Scalars['Boolean'];
  globalVolume: Scalars['Int'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  language: Scalars['String'];
  pin?: Maybe<Scalars['String']>;
  pinTimeout?: Maybe<Scalars['Int']>;
  themePreference: ThemePreference;
  user: SafeUser;
};

export type UsernameAvailabilityArgs = {
  recommendationsWanted?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
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

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage?: boolean | null };

export type EditMessageMutationVariables = Exact<{
  input: EditMessageInput;
}>;


export type EditMessageMutation = { __typename?: 'Mutation', editMessage?: { __typename?: 'Message', id: string, content: string, sentAt: any, edittedAt: any, chat: { __typename?: 'Chat', id: string } } | null };

export type MyChatsQueryVariables = Exact<{
  excludeArchived: Scalars['Boolean'];
}>;


export type MyChatsQuery = { __typename?: 'Query', myChats: Array<{ __typename?: 'Chat', id: string, members: { __typename?: 'User', id: string, username: string } }> };

export type SendMessageToChatMutationVariables = Exact<{
  input: SendMessageToChatInput;
}>;


export type SendMessageToChatMutation = { __typename?: 'Mutation', sendMessageToChat?: { __typename?: 'Message', id: string, content: string, sentAt: any, chat: { __typename?: 'Chat', id: string } } | null };

export type SendMessageToUserMutationVariables = Exact<{
  input: SendMessageToUserInput;
}>;


export type SendMessageToUserMutation = { __typename?: 'Mutation', sendMessageToUser?: { __typename?: 'Message', id: string } | null };

export type SendFeedbackMutationVariables = Exact<{
  input: CreateFeedbackInput;
}>;


export type SendFeedbackMutation = { __typename?: 'Mutation', sendFeedback: { __typename?: 'EditFeedbackDto', success: boolean } };

export type CreateTagMutationVariables = Exact<{
  input: AddTagInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag?: { __typename?: 'Tag', id: string, label: string, description: string, color: CategoryColor, icon?: CategoryIcon | null } | null };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag: boolean };

export type MyTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTagsQuery = { __typename?: 'Query', myTags: Array<{ __typename?: 'Tag', id: string, label: string, description: string, color: CategoryColor, icon?: CategoryIcon | null }> };

export type UpdateTagMutationVariables = Exact<{
  input: UpdateTagInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag?: { __typename?: 'Tag', id: string, label: string, description: string, color: CategoryColor, icon?: CategoryIcon | null } | null };

export type AddTodoMutationVariables = Exact<{
  input: AddTodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: { __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean, repeatWeekdays: Array<Weekday>, tags: Array<{ __typename?: 'Tag', id: string, label: string, description: string, color: CategoryColor, icon?: CategoryIcon | null }> } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean };

export type MyTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTodosQuery = { __typename?: 'Query', getMyTodos: Array<{ __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean, repeatWeekdays: Array<Weekday>, tags: Array<{ __typename?: 'Tag', id: string, label: string, description: string, color: CategoryColor, icon?: CategoryIcon | null }> }> };

export type UpdateTodoMutationVariables = Exact<{
  updateInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, title: string, description: string, isCompleted: boolean, isArchived: boolean } | null };

export type LoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string } | null };

export type RandomUsernameQueryVariables = Exact<{ [key: string]: never; }>;


export type RandomUsernameQuery = { __typename?: 'Query', randomAvailableUsername?: string | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegistrationResponse', user?: { __typename?: 'SafeUser', id: string, username: string } | null } };

export type UsernameAvailabilityQueryVariables = Exact<{
  input: UsernameAvailabilityArgs;
}>;


export type UsernameAvailabilityQuery = { __typename?: 'Query', usernameAvailability: { __typename?: 'AvailabilityDto', attemptedInput?: string | null, fieldName: string, isAvailable: boolean, alternatives?: Array<string> | null, timeChecked: any } };

export type AllSettingsFragment = { __typename?: 'UserSettingsDto', language: string, themePreference: ThemePreference, audioEnabled: boolean, globalVolume: number, pin?: string | null, pinTimeout?: number | null, isPublic: boolean };

export type MySettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type MySettingsQuery = { __typename?: 'Query', mySettings?: { __typename?: 'UserSettingsDto', language: string, themePreference: ThemePreference, audioEnabled: boolean, globalVolume: number, pin?: string | null, pinTimeout?: number | null, isPublic: boolean } | null };

export type UpdateSettingsMutationVariables = Exact<{
  input: UpdateUserSettingsInput;
}>;


export type UpdateSettingsMutation = { __typename?: 'Mutation', updateSettings?: { __typename?: 'UserSettingsDto', language: string, themePreference: ThemePreference, audioEnabled: boolean, globalVolume: number, pin?: string | null, pinTimeout?: number | null, isPublic: boolean } | null };

export const AllSettingsFragmentDoc = gql`
    fragment AllSettings on UserSettingsDto {
  language
  themePreference
  audioEnabled
  globalVolume
  pin
  pinTimeout
  isPublic
}
    `;
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
export const SendFeedbackDocument = gql`
    mutation SendFeedback($input: CreateFeedbackInput!) {
  sendFeedback(input: $input) {
    success
  }
}
    `;
export type SendFeedbackMutationFn = Apollo.MutationFunction<SendFeedbackMutation, SendFeedbackMutationVariables>;

/**
 * __useSendFeedbackMutation__
 *
 * To run a mutation, you first call `useSendFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFeedbackMutation, { data, loading, error }] = useSendFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SendFeedbackMutation, SendFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendFeedbackMutation, SendFeedbackMutationVariables>(SendFeedbackDocument, options);
      }
export type SendFeedbackMutationHookResult = ReturnType<typeof useSendFeedbackMutation>;
export type SendFeedbackMutationResult = Apollo.MutationResult<SendFeedbackMutation>;
export type SendFeedbackMutationOptions = Apollo.BaseMutationOptions<SendFeedbackMutation, SendFeedbackMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($input: AddTagInput!) {
  createTag(tagInput: $input) {
    id
    label
    description
    color
    icon
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: ID!) {
  deleteTag(tagId: $id)
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const MyTagsDocument = gql`
    query MyTags {
  myTags {
    id
    label
    description
    color
    icon
  }
}
    `;

/**
 * __useMyTagsQuery__
 *
 * To run a query within a React component, call `useMyTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTagsQuery(baseOptions?: Apollo.QueryHookOptions<MyTagsQuery, MyTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTagsQuery, MyTagsQueryVariables>(MyTagsDocument, options);
      }
export function useMyTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTagsQuery, MyTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTagsQuery, MyTagsQueryVariables>(MyTagsDocument, options);
        }
export type MyTagsQueryHookResult = ReturnType<typeof useMyTagsQuery>;
export type MyTagsLazyQueryHookResult = ReturnType<typeof useMyTagsLazyQuery>;
export type MyTagsQueryResult = Apollo.QueryResult<MyTagsQuery, MyTagsQueryVariables>;
export function refetchMyTagsQuery(variables?: MyTagsQueryVariables) {
      return { query: MyTagsDocument, variables: variables }
    }
export const UpdateTagDocument = gql`
    mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(updateInput: $input) {
    id
    label
    description
    color
    icon
  }
}
    `;
export type UpdateTagMutationFn = Apollo.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
      }
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const AddTodoDocument = gql`
    mutation AddTodo($input: AddTodoInput!) {
  addTodo(input: $input) {
    id
    title
    description
    isCompleted
    isArchived
    repeatWeekdays
    tags {
      id
      label
      description
      color
      icon
    }
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
 *      input: // value for 'input'
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
export const MyTodosDocument = gql`
    query MyTodos {
  getMyTodos(excludeArchived: true) {
    id
    title
    description
    isCompleted
    isArchived
    repeatWeekdays
    tags {
      id
      label
      description
      color
      icon
    }
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
export const RandomUsernameDocument = gql`
    query RandomUsername {
  randomAvailableUsername
}
    `;

/**
 * __useRandomUsernameQuery__
 *
 * To run a query within a React component, call `useRandomUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomUsernameQuery({
 *   variables: {
 *   },
 * });
 */
export function useRandomUsernameQuery(baseOptions?: Apollo.QueryHookOptions<RandomUsernameQuery, RandomUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RandomUsernameQuery, RandomUsernameQueryVariables>(RandomUsernameDocument, options);
      }
export function useRandomUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RandomUsernameQuery, RandomUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RandomUsernameQuery, RandomUsernameQueryVariables>(RandomUsernameDocument, options);
        }
export type RandomUsernameQueryHookResult = ReturnType<typeof useRandomUsernameQuery>;
export type RandomUsernameLazyQueryHookResult = ReturnType<typeof useRandomUsernameLazyQuery>;
export type RandomUsernameQueryResult = Apollo.QueryResult<RandomUsernameQuery, RandomUsernameQueryVariables>;
export function refetchRandomUsernameQuery(variables?: RandomUsernameQueryVariables) {
      return { query: RandomUsernameDocument, variables: variables }
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
export const UsernameAvailabilityDocument = gql`
    query UsernameAvailability($input: UsernameAvailabilityArgs!) {
  usernameAvailability(input: $input) {
    attemptedInput
    fieldName
    isAvailable
    alternatives
    timeChecked
  }
}
    `;

/**
 * __useUsernameAvailabilityQuery__
 *
 * To run a query within a React component, call `useUsernameAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameAvailabilityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUsernameAvailabilityQuery(baseOptions: Apollo.QueryHookOptions<UsernameAvailabilityQuery, UsernameAvailabilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsernameAvailabilityQuery, UsernameAvailabilityQueryVariables>(UsernameAvailabilityDocument, options);
      }
export function useUsernameAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsernameAvailabilityQuery, UsernameAvailabilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsernameAvailabilityQuery, UsernameAvailabilityQueryVariables>(UsernameAvailabilityDocument, options);
        }
export type UsernameAvailabilityQueryHookResult = ReturnType<typeof useUsernameAvailabilityQuery>;
export type UsernameAvailabilityLazyQueryHookResult = ReturnType<typeof useUsernameAvailabilityLazyQuery>;
export type UsernameAvailabilityQueryResult = Apollo.QueryResult<UsernameAvailabilityQuery, UsernameAvailabilityQueryVariables>;
export function refetchUsernameAvailabilityQuery(variables: UsernameAvailabilityQueryVariables) {
      return { query: UsernameAvailabilityDocument, variables: variables }
    }
export const MySettingsDocument = gql`
    query MySettings {
  mySettings {
    ...AllSettings
  }
}
    ${AllSettingsFragmentDoc}`;

/**
 * __useMySettingsQuery__
 *
 * To run a query within a React component, call `useMySettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMySettingsQuery(baseOptions?: Apollo.QueryHookOptions<MySettingsQuery, MySettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MySettingsQuery, MySettingsQueryVariables>(MySettingsDocument, options);
      }
export function useMySettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MySettingsQuery, MySettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MySettingsQuery, MySettingsQueryVariables>(MySettingsDocument, options);
        }
export type MySettingsQueryHookResult = ReturnType<typeof useMySettingsQuery>;
export type MySettingsLazyQueryHookResult = ReturnType<typeof useMySettingsLazyQuery>;
export type MySettingsQueryResult = Apollo.QueryResult<MySettingsQuery, MySettingsQueryVariables>;
export function refetchMySettingsQuery(variables?: MySettingsQueryVariables) {
      return { query: MySettingsDocument, variables: variables }
    }
export const UpdateSettingsDocument = gql`
    mutation UpdateSettings($input: UpdateUserSettingsInput!) {
  updateSettings(input: $input) {
    ...AllSettings
  }
}
    ${AllSettingsFragmentDoc}`;
export type UpdateSettingsMutationFn = Apollo.MutationFunction<UpdateSettingsMutation, UpdateSettingsMutationVariables>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, options);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = Apollo.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>;