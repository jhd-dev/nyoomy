/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/**
 * @typedef {Object} AddTagInput
 * @property {CategoryColor} [color]
 * @property {string} [description]
 * @property {CategoryIcon} [icon]
 * @property {string} label
 * @property {TaggableInput} [taggedItem]
 */

/**
 * @typedef {Object} AddTodoInput
 * @property {string} [description]
 * @property {boolean} [isArchived]
 * @property {Array<Weekday>} [repeatWeekdays]
 * @property {Array<UpdateTagInput>} [tagUpdates]
 * @property {string} [title]
 */

/**
 * Info on the availability of a unique input (i.e. username)
 * @typedef {Object} AvailabilityDto
 * @property {Array<string>} [alternatives]
 * @property {string} [attemptedInput]
 * @property {string} fieldName
 * @property {boolean} isAvailable
 * @property {DateTime} timeChecked
 */

/**
 * Colors a user may associate with a category/tag
 * @typedef {("BLUE"|"DEFAULT"|"GREEN"|"RED"|"YELLOW")} CategoryColor
 */

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
 * @typedef {Object} CreateFeedbackInput
 * @property {string} details
 * @property {number} [maxRating] - The maximum rating a user had the option to give, i.e. 5 stars
 * @property {string} purpose
 * @property {number} [rating] - The user's rating out of 10, e.g. 2.5 of 5 stars would yield a value of 5
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
 * @typedef {Object} EditFeedbackDto
 * @property {boolean} success
 */

/**
 * @typedef {Object} EditMessageInput
 * @property {string} content
 * @property {string} messageId
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
 * @property {User} user
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
 * @property {Tag} [applyTag]
 * @property {Tag} [createTag]
 * @property {boolean} [deleteMessage]
 * @property {boolean} deleteTag
 * @property {boolean} deleteTodo
 * @property {boolean} deleteUser
 * @property {boolean} deleteUserById
 * @property {Message} [editMessage]
 * @property {LoginResponse} [login]
 * @property {boolean} logout
 * @property {RegistrationResponse} registerUser
 * @property {EditFeedbackDto} sendFeedback
 * @property {Message} [sendMessageToChat]
 * @property {Message} [sendMessageToUser]
 * @property {UserSettingsDto} [updateSettings]
 * @property {Tag} [updateTag]
 * @property {Todo} [updateTodo]
 * @property {boolean} updateUserPassword
 */

/**
 * @typedef {Object} Query
 * @property {Array<Todo>} getMyTodos
 * @property {Array<Todo>} getTodo
 * @property {User} [me]
 * @property {Array<Chat>} myChats
 * @property {UserSettingsDto} [mySettings]
 * @property {Array<Tag>} myTags
 * @property {string} [randomAvailableUsername]
 * @property {AvailabilityDto} usernameAvailability
 * @property {Array<User>} [users]
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
 * @property {string} chatId
 * @property {string} content
 */

/**
 * @typedef {Object} SendMessageToUserInput
 * @property {string} content
 * @property {string} recipientId
 */

/**
 * @typedef {Object} Tag
 * @property {CategoryColor} color
 * @property {string} description
 * @property {CategoryIcon} [icon]
 * @property {string} id
 * @property {boolean} isArchived
 * @property {string} label
 * @property {User} user
 */

/**
 * @typedef {Object} Taggable
 * @property {string} id
 * @property {Array<Tag>} tags
 */

/**
 * @typedef {Object} TaggableInput
 * @property {string} id
 */

/**
 * The visual themes that can be used to style the app
 * @typedef {("DARK"|"DEVICE"|"HIGH_CONTRAST"|"LIGHT"|"OLED")} ThemePreference
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
 * @property {Todo} [supertask]
 * @property {Array<Tag>} tags
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
 * @typedef {Object} UpdateTagInput
 * @property {Array<TaggableInput>} [applyTaggables]
 * @property {CategoryColor} [color]
 * @property {string} [description]
 * @property {CategoryIcon} [icon]
 * @property {string} id
 * @property {string} [label]
 * @property {Array<TaggableInput>} [removeTaggables]
 * @property {Array<TaggableInput>} [taggables]
 */

/**
 * @typedef {Object} UpdateTodoInput
 * @property {string} date
 * @property {string} [description]
 * @property {string} id
 * @property {boolean} [isArchived]
 * @property {boolean} [isCompleted]
 * @property {Array<Weekday>} [repeatWeekdays]
 * @property {Array<UpdateTagInput>} [tagUpdates]
 * @property {string} [title]
 */

/**
 * @typedef {Object} UpdateUserSettingsInput
 * @property {boolean} [audioEnabled]
 * @property {number} [globalVolume]
 * @property {string} [id]
 * @property {boolean} [isPublic]
 * @property {string} [language]
 * @property {string} [pin]
 * @property {number} [pinTimeout]
 * @property {ThemePreference} [themePreference]
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
 * Users' settings and preferences
 * @typedef {Object} UserSettingsDto
 * @property {boolean} audioEnabled
 * @property {number} globalVolume
 * @property {string} id
 * @property {boolean} isPublic
 * @property {string} language
 * @property {string} [pin]
 * @property {number} [pinTimeout]
 * @property {ThemePreference} themePreference
 * @property {SafeUser} user
 */

/**
 * @typedef {Object} UsernameAvailabilityArgs
 * @property {number} [recommendationsWanted]
 * @property {string} [username]
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
