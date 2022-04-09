/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/**
 * The icons available to accompany category/tag titles
 * @typedef {("GLOBE"|"ROCKET"|"STAR"|"WATER")} CategoryIcon
 */

/**
 * @typedef {Object} Chat
 * @property {DateTime} createdAt
 * @property {string} id
 * @property {boolean} isArchived
 * @property {User} members
 */

/**
 * @typedef {Object} CounterMetric
 * @property {string} id
 * @property {number} interval
 * @property {number} maximum
 * @property {Metric} metric
 * @property {MetricType} metricType
 * @property {number} minimum
 */

/**
 * @typedef {Object} DailyFloatMetric
 * @property {string} id
 * @property {number} max
 * @property {Metric} metric
 * @property {MetricType} metricType
 * @property {number} min
 */

/**
 * A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
 * @typedef {*} DateTime
 */

/**
 * @typedef {Object} EditMessageInput
 * @property {string} content
 * @property {number} messageId
 */

/**
 * @typedef {Object} FieldError
 * @property {string} field
 * @property {string} message
 */

/**
 * @typedef {Object} Journal
 * @property {number} dailyWordGoal
 * @property {string} id
 * @property {boolean} isArchived
 * @property {Metric} metric
 * @property {MetricType} metricType
 */

/**
 * @typedef {Object} LoginResponse
 * @property {string} [error]
 * @property {SafeUser} [user]
 */

/**
 * @typedef {Object} Message
 * @property {Chat} chat
 * @property {string} content
 * @property {DateTime} edittedAt
 * @property {string} id
 * @property {User} sender
 * @property {DateTime} sentAt
 */

/**
 * @typedef {Object} Metric
 * @property {string} description
 * @property {string} id
 * @property {boolean} isArchived
 * @property {Taggable} taggable
 * @property {string} title
 * @property {User} user
 */

/**
 * The types of metrics a user can create
 * @typedef {("COUNTER"|"FLOAT"|"JOURNAL"|"SCALE"|"SELECTION"|"STRING"|"TIMER")} MetricType
 */

/**
 * @typedef {Object} Mutation
 * @property {Todo} [addTodo]
 * @property {boolean} [deleteMessage]
 * @property {boolean} deleteTodo
 * @property {boolean} deleteUser
 * @property {boolean} deleteUserById
 * @property {Message} [editMessage]
 * @property {LoginResponse} [login]
 * @property {boolean} logout
 * @property {RegistrationResponse} registerUser
 * @property {Message} [sendMessageToChat]
 * @property {Message} [sendMessageToUser]
 * @property {Todo} [updateTodo]
 * @property {boolean} updateUserPassword
 */

/**
 * @typedef {Object} Query
 * @property {Array<Todo>} getMyTodos
 * @property {User} [me]
 * @property {Array<Chat>} myChats
 */

/**
 * User registration data
 * @typedef {Object} RegisterUserInput
 * @property {string} displayName
 * @property {string} email
 * @property {string} password
 * @property {string} username
 */

/**
 * @typedef {Object} RegistrationResponse
 * @property {Array<FieldError>} [errors]
 * @property {SafeUser} [user]
 */

/**
 * User data excluding authentication-unsafe fields
 * @typedef {Object} SafeUser
 * @property {DateTime} createdAt
 * @property {string} email
 * @property {string} googleId
 * @property {string} id
 * @property {boolean} isEmailVerified
 * @property {number} stars
 * @property {string} username
 */

/**
 * A Numeric Rating Scale
 * @typedef {Object} Scale
 * @property {string} id
 * @property {number} max
 * @property {Metric} metric
 * @property {MetricType} metricType
 * @property {number} min
 */

/**
 * @typedef {Object} SelectionCategory
 * @property {string} id
 * @property {SelectionMetric} metric
 * @property {string} title
 */

/**
 * @typedef {Object} SelectionEntry
 * @property {DateTime} datetime
 * @property {string} id
 * @property {SelectionMetric} metric
 * @property {Array<SelectionOption>} selectedOptions
 */

/**
 * A Numeric Rating Selection
 * @typedef {Object} SelectionMetric
 * @property {string} id
 * @property {number} maxSelections
 * @property {Metric} metric
 * @property {MetricType} metricType
 * @property {number} minSelections
 */

/**
 * @typedef {Object} SelectionOption
 * @property {SelectionCategory} category
 * @property {string} id
 * @property {SelectionMetric} metric
 * @property {Array<SelectionEntry>} selectingEntries
 * @property {string} title
 */

/**
 * @typedef {Object} SendMessageToChatInput
 * @property {number} chatId
 * @property {string} content
 */

/**
 * @typedef {Object} SendMessageToUserInput
 * @property {string} content
 * @property {string} recipientId
 */

/**
 * @typedef {Object} Tag
 * @property {CategoryIcon} [icon]
 * @property {string} id
 * @property {Array<Taggable>} taggedItems
 * @property {string} title
 * @property {User} user
 */

/**
 * @typedef {Object} Taggable
 * @property {string} id
 * @property {Array<Tag>} tags
 */

/**
 * @typedef {Object} TimerMetric
 * @property {number} goalLength
 * @property {number} goalPerDay
 * @property {string} id
 * @property {Metric} metric
 * @property {MetricType} metricType
 */

/**
 * @typedef {Object} Todo
 * @property {string} description
 * @property {boolean} doesRepeat
 * @property {string} id
 * @property {boolean} isArchived
 * @property {boolean} isCompleted
 * @property {Array<Weekday>} repeatWeekdays
 * @property {Array<Todo>} subtasks
 * @property {string} title
 * @property {User} user
 */

/**
 * @typedef {Object} UpdatePasswordInput
 * @property {string} newPassword
 * @property {string} oldPassword
 * @property {string} username
 */

/**
 * @typedef {Object} UpdateTodoInput
 * @property {string} date
 * @property {string} [description]
 * @property {string} id
 * @property {boolean} [isArchived]
 * @property {boolean} [isCompleted]
 * @property {Array<Weekday>} [repeatWeekdays]
 * @property {string} [title]
 */

/**
 * Centralized user reference
 * @typedef {Object} User
 * @property {DateTime} createdAt
 * @property {string} email
 * @property {string} googleId
 * @property {string} id
 * @property {boolean} isEmailVerified
 * @property {number} stars
 * @property {string} username
 */

/**
 * @typedef {Object} UserLoginInput
 * @property {string} passwordInput
 * @property {string} usernameOrEmail
 */

/**
 * The days of the week
 * @typedef {("FRIDAY"|"MONDAY"|"SATURDAY"|"SUNDAY"|"THURSDAY"|"TUESDAY"|"WEDNESDAY")} Weekday
 */
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
  metric: Metric;
  metricType: MetricType;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoryIcon: CategoryIcon;
  Chat: ResolverTypeWrapper<Chat>;
  CounterMetric: ResolverTypeWrapper<CounterMetric>;
  DailyFloatMetric: ResolverTypeWrapper<DailyFloatMetric>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EditMessageInput: EditMessageInput;
  FieldError: ResolverTypeWrapper<FieldError>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Journal: ResolverTypeWrapper<Journal>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Message: ResolverTypeWrapper<Message>;
  Metric: ResolverTypeWrapper<Metric>;
  MetricType: MetricType;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RegisterUserInput: RegisterUserInput;
  RegistrationResponse: ResolverTypeWrapper<RegistrationResponse>;
  SafeUser: ResolverTypeWrapper<SafeUser>;
  Scale: ResolverTypeWrapper<Scale>;
  SelectionCategory: ResolverTypeWrapper<SelectionCategory>;
  SelectionEntry: ResolverTypeWrapper<SelectionEntry>;
  SelectionMetric: ResolverTypeWrapper<SelectionMetric>;
  SelectionOption: ResolverTypeWrapper<SelectionOption>;
  SendMessageToChatInput: SendMessageToChatInput;
  SendMessageToUserInput: SendMessageToUserInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tag: ResolverTypeWrapper<Tag>;
  Taggable: ResolverTypeWrapper<Taggable>;
  TimerMetric: ResolverTypeWrapper<TimerMetric>;
  Todo: ResolverTypeWrapper<Todo>;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdateTodoInput: UpdateTodoInput;
  User: ResolverTypeWrapper<User>;
  UserLoginInput: UserLoginInput;
  Weekday: Weekday;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Chat: Chat;
  CounterMetric: CounterMetric;
  DailyFloatMetric: DailyFloatMetric;
  DateTime: Scalars['DateTime'];
  EditMessageInput: EditMessageInput;
  FieldError: FieldError;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Journal: Journal;
  LoginResponse: LoginResponse;
  Message: Message;
  Metric: Metric;
  Mutation: {};
  Query: {};
  RegisterUserInput: RegisterUserInput;
  RegistrationResponse: RegistrationResponse;
  SafeUser: SafeUser;
  Scale: Scale;
  SelectionCategory: SelectionCategory;
  SelectionEntry: SelectionEntry;
  SelectionMetric: SelectionMetric;
  SelectionOption: SelectionOption;
  SendMessageToChatInput: SendMessageToChatInput;
  SendMessageToUserInput: SendMessageToUserInput;
  String: Scalars['String'];
  Tag: Tag;
  Taggable: Taggable;
  TimerMetric: TimerMetric;
  Todo: Todo;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdateTodoInput: UpdateTodoInput;
  User: User;
  UserLoginInput: UserLoginInput;
};

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  members?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CounterMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterMetric'] = ResolversParentTypes['CounterMetric']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maximum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  minimum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyFloatMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyFloatMetric'] = ResolversParentTypes['DailyFloatMetric']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FieldErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['FieldError'] = ResolversParentTypes['FieldError']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  dailyWordGoal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['SafeUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edittedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sentAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metric'] = ResolversParentTypes['Metric']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  taggable?: Resolver<ResolversTypes['Taggable'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  deleteMessage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'messageId'>>;
  deleteTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deleteUserById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'id'>>;
  editMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationEditMessageArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  registerUser?: Resolver<ResolversTypes['RegistrationResponse'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
  sendMessageToChat?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationSendMessageToChatArgs, 'input'>>;
  sendMessageToUser?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationSendMessageToUserArgs, 'input'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'updateInput'>>;
  updateUserPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUserPasswordArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMyTodos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryGetMyTodosArgs, 'excludeArchived'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myChats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryMyChatsArgs, 'excludeArchived'>>;
};

export type RegistrationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegistrationResponse'] = ResolversParentTypes['RegistrationResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['FieldError']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['SafeUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SafeUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['SafeUser'] = ResolversParentTypes['SafeUser']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stars?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scale'] = ResolversParentTypes['Scale']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionCategory'] = ResolversParentTypes['SelectionCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['SelectionMetric'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionEntry'] = ResolversParentTypes['SelectionEntry']> = {
  datetime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['SelectionMetric'], ParentType, ContextType>;
  selectedOptions?: Resolver<Array<ResolversTypes['SelectionOption']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionMetric'] = ResolversParentTypes['SelectionMetric']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxSelections?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  minSelections?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionOption'] = ResolversParentTypes['SelectionOption']> = {
  category?: Resolver<ResolversTypes['SelectionCategory'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['SelectionMetric'], ParentType, ContextType>;
  selectingEntries?: Resolver<Array<ResolversTypes['SelectionEntry']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  icon?: Resolver<Maybe<ResolversTypes['CategoryIcon']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  taggedItems?: Resolver<Array<ResolversTypes['Taggable']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaggableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taggable'] = ResolversParentTypes['Taggable']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimerMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimerMetric'] = ResolversParentTypes['TimerMetric']> = {
  goalLength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goalPerDay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['Metric'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  doesRepeat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  repeatWeekdays?: Resolver<Array<ResolversTypes['Weekday']>, ParentType, ContextType>;
  subtasks?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stars?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Chat?: ChatResolvers<ContextType>;
  CounterMetric?: CounterMetricResolvers<ContextType>;
  DailyFloatMetric?: DailyFloatMetricResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FieldError?: FieldErrorResolvers<ContextType>;
  Journal?: JournalResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Metric?: MetricResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegistrationResponse?: RegistrationResponseResolvers<ContextType>;
  SafeUser?: SafeUserResolvers<ContextType>;
  Scale?: ScaleResolvers<ContextType>;
  SelectionCategory?: SelectionCategoryResolvers<ContextType>;
  SelectionEntry?: SelectionEntryResolvers<ContextType>;
  SelectionMetric?: SelectionMetricResolvers<ContextType>;
  SelectionOption?: SelectionOptionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Taggable?: TaggableResolvers<ContextType>;
  TimerMetric?: TimerMetricResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

