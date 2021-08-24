/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/**
 * A single day's data for a particular CounterMetric
 * @typedef {Object} CounterEntry
 * @property {string} id
 * @property {CounterMetric} metric
 * @property {string} date
 * @property {number} count
 */

/**
 * @typedef {Object} CounterMetric
 * @property {string} id
 * @property {MetricType} metricType
 * @property {User} user
 * @property {string} label
 * @property {string} description
 * @property {Array<CounterEntry>} metricEntries
 * @property {number} maximum
 * @property {number} minimum
 * @property {number} interval
 */

/**
 * @typedef {Object} CounterMetricDailyEntry
 * @property {string} metricId
 * @property {MetricType} metricType
 * @property {string} date
 * @property {number} count
 * @property {string} label
 * @property {string} description
 * @property {number} maximum
 * @property {number} minimum
 * @property {number} interval
 */

/**
 * The javascript `Date` as string. Type represents date and time as the ISO Date string.
 * @typedef {*} DateTime
 */

/**
 * @typedef {Object} FieldError
 * @property {string} field
 * @property {string} message
 */

/**
 * @typedef {Object} IMetric
 * @property {string} id
 * @property {MetricType} metricType
 * @property {User} user
 * @property {string} label
 * @property {string} description
 */

/**
 * @typedef {Object} ITodo
 * @property {string} id
 * @property {User} user
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} Journal
 * @property {string} id
 * @property {User} user
 * @property {Array<JournalEntry>} entries
 * @property {string} title
 * @property {number} dailyWordGoal
 * @property {boolean} isArchived
 * @property {DateTime} createdAt
 */

/**
 * A single day's entry in a Journal
 * @typedef {Object} JournalEntry
 * @property {string} id
 * @property {Journal} journal
 * @property {string} date
 * @property {string} text
 * @property {boolean} didMeetGoal
 */

/**
 * @typedef {Object} JournalResponse
 * @property {string} journalId
 * @property {string} date
 * @property {string} title
 * @property {string} text
 * @property {boolean} isArchived
 * @property {number} dailyWordGoal
 */

/**
 * @typedef {Object} LoginResponse
 * @property {User} [user]
 * @property {string} [error]
 */

/**
 * The types of metrics a user can create
 * @typedef {("COUNTER"|"TIMER")} MetricType
 */

/**
 * @typedef {Object} Mutation
 * @property {JournalResponse} [addJournal]
 * @property {JournalResponse} [updateJournal]
 * @property {boolean} deleteJournal
 * @property {TodoResponse} [addTodo]
 * @property {TodoResponse} [updateTodo]
 * @property {boolean} deleteTodo
 * @property {RegistrationResponse} registerUser
 * @property {LoginResponse} login
 * @property {boolean} logout
 * @property {boolean} forgotPassword
 * @property {boolean} resetPassword
 * @property {boolean} deleteUserById
 * @property {boolean} deleteUser
 * @property {boolean} updateUserPassword
 * @property {TimerMetricPayload} [addTimer]
 * @property {CounterMetricDailyEntry} [addCounter]
 * @property {CounterMetricDailyEntry} [updateCounter]
 * @property {TimerMetricPayload} [updateTimer]
 * @property {boolean} deleteCounter
 * @property {boolean} deleteTimer
 */

/**
 * @typedef {Object} Query
 * @property {Array<JournalResponse>} getMyJournals
 * @property {Array<TimerMetricPayload>} getTimers
 * @property {Array<TodoResponse>} getMyTodos
 * @property {Array<User>} getAllUsers
 * @property {User} [currentUser]
 * @property {Array<CounterMetricDailyEntry>} getCounters
 * @property {Array<CounterMetricDailyEntry>} getDayCounters
 */

/**
 * @typedef {Object} RegistrationResponse
 * @property {Array<FieldError>} [errors]
 * @property {User} [user]
 */

/**
 * @typedef {Object} SubTodo
 * @property {string} id
 * @property {User} user
 * @property {string} title
 * @property {string} description
 * @property {Todo} supertask
 * @property {Array<SubTodo>} subtasks
 * @property {boolean} isCompleted
 * @property {boolean} isArchived
 */

/**
 * @typedef {Object} TimerAttempt
 * @property {string} id
 * @property {TimerEntry} entry
 * @property {string} startTime
 * @property {string} endTime
 * @property {boolean} didFinish
 * @property {boolean} [didSucceed]
 */

/**
 * @typedef {Object} TimerEntry
 * @property {string} id
 * @property {TimerMetric} metric
 * @property {string} date
 * @property {Array<TimerAttempt>} attempts
 */

/**
 * @typedef {Object} TimerMetric
 * @property {string} id
 * @property {MetricType} metricType
 * @property {User} user
 * @property {Array<TimerEntry>} metricEntries
 * @property {string} label
 * @property {string} description
 * @property {number} goalLength
 * @property {number} goalPerDay
 */

/**
 * @typedef {Object} TimerMetricPayload
 * @property {string} metricId
 * @property {string} metricType
 * @property {string} date
 * @property {string} label
 * @property {string} description
 * @property {number} goalLength
 * @property {number} goalPerDay
 * @property {string} [startTime]
 */

/**
 * @typedef {Object} Todo
 * @property {string} id
 * @property {User} user
 * @property {string} title
 * @property {string} description
 * @property {Array<TodoEntry>} entries
 * @property {Array<SubTodo>} subtasks
 * @property {boolean} isCompleted
 * @property {boolean} isArchived
 * @property {Array<Weekday>} repeatWeekdays
 * @property {boolean} doesRepeat
 */

/**
 * A single day's data for a particular CounterMetric
 * @typedef {Object} TodoEntry
 * @property {string} id
 * @property {Todo} todo
 * @property {string} date
 * @property {boolean} isCompleted
 */

/**
 * @typedef {Object} TodoResponse
 * @property {string} todoId
 * @property {string} date
 * @property {string} title
 * @property {string} description
 * @property {boolean} isCompleted
 * @property {boolean} isArchived
 * @property {Array<Weekday>} repeatWeekdays
 */

/**
 * @typedef {Object} UpdateCounterMetricInput
 * @property {string} metricId
 * @property {string} date
 * @property {string} [label]
 * @property {string} [description]
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [interval]
 * @property {number} [count]
 */

/**
 * @typedef {Object} UpdateJournalInput
 * @property {string} journalId
 * @property {string} date
 * @property {string} [title]
 * @property {string} [text]
 * @property {boolean} [isArchived]
 * @property {number} [dailyWordGoal]
 */

/**
 * @typedef {Object} UpdateTimerMetricInput
 * @property {string} metricId
 * @property {string} date
 * @property {string} [label]
 * @property {string} [description]
 * @property {number} [maximum]
 * @property {number} [goalLength]
 * @property {number} [goalPerDay]
 * @property {string} [startTime]
 */

/**
 * @typedef {Object} UpdateTodoInput
 * @property {string} todoId
 * @property {string} date
 * @property {string} [title]
 * @property {string} [description]
 * @property {boolean} [isCompleted]
 * @property {boolean} [isArchived]
 * @property {Array<Weekday>} [repeatWeekdays]
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} displayName
 * @property {string} username
 * @property {string} email
 * @property {number} tokenVersion
 * @property {string} birthday
 * @property {string} picture
 * @property {boolean} isPublic
 * @property {boolean} isEmailVerified
 * @property {string} bio
 * @property {string} cron
 * @property {string} language
 * @property {Array<CounterMetric>} metrics
 * @property {Array<TimerMetric>} timerMetrics
 * @property {Array<Todo>} todos
 * @property {Array<Journal>} journals
 * @property {DateTime} createdAt
 */

/**
 * The days of the week
 * @typedef {("SUNDAY"|"MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY")} Weekday
 */
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

export type Journal = {
  __typename?: 'Journal';
  id: Scalars['ID'];
  user: User;
  entries: Array<JournalEntry>;
  title: Scalars['String'];
  dailyWordGoal: Scalars['Int'];
  isArchived: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
};

/** A single day's entry in a Journal */
export type JournalEntry = {
  __typename?: 'JournalEntry';
  id: Scalars['ID'];
  journal: Journal;
  date: Scalars['String'];
  text: Scalars['String'];
  didMeetGoal: Scalars['Boolean'];
};

export type JournalResponse = {
  __typename?: 'JournalResponse';
  journalId: Scalars['ID'];
  date: Scalars['String'];
  title: Scalars['String'];
  text: Scalars['String'];
  isArchived: Scalars['Boolean'];
  dailyWordGoal: Scalars['Int'];
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
  addJournal?: Maybe<JournalResponse>;
  updateJournal?: Maybe<JournalResponse>;
  deleteJournal: Scalars['Boolean'];
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


export type MutationUpdateJournalArgs = {
  updateInput: UpdateJournalInput;
};


export type MutationDeleteJournalArgs = {
  id: Scalars['ID'];
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
  getMyJournals: Array<JournalResponse>;
  getTimers: Array<TimerMetricPayload>;
  getMyTodos: Array<TodoResponse>;
  getAllUsers: Array<User>;
  currentUser?: Maybe<User>;
  getCounters: Array<CounterMetricDailyEntry>;
  getDayCounters: Array<CounterMetricDailyEntry>;
};


export type QueryGetMyJournalsArgs = {
  excludeArchived?: Maybe<Scalars['Boolean']>;
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

export type UpdateJournalInput = {
  journalId: Scalars['ID'];
  date: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  dailyWordGoal?: Maybe<Scalars['Int']>;
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
  journals: Array<Journal>;
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

export type MyJournalsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyJournalsQuery = (
  { __typename?: 'Query' }
  & { getMyJournals: Array<(
    { __typename?: 'JournalResponse' }
    & Pick<JournalResponse, 'journalId' | 'date' | 'title' | 'text' | 'dailyWordGoal' | 'isArchived'>
  )> }
);

export type AddJournalMutationVariables = Exact<{ [key: string]: never; }>;


export type AddJournalMutation = (
  { __typename?: 'Mutation' }
  & { addJournal?: Maybe<(
    { __typename?: 'JournalResponse' }
    & Pick<JournalResponse, 'journalId' | 'date' | 'title' | 'text' | 'dailyWordGoal' | 'isArchived'>
  )> }
);

export type UpdateJournalMutationVariables = Exact<{
  updateInput: UpdateJournalInput;
}>;


export type UpdateJournalMutation = (
  { __typename?: 'Mutation' }
  & { updateJournal?: Maybe<(
    { __typename?: 'JournalResponse' }
    & Pick<JournalResponse, 'journalId' | 'date' | 'title' | 'dailyWordGoal' | 'isArchived'>
  )> }
);

export type DeleteJournalMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteJournalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteJournal'>
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  CounterEntry: ResolverTypeWrapper<CounterEntry>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CounterMetric: ResolverTypeWrapper<CounterMetric>;
  CounterMetricDailyEntry: ResolverTypeWrapper<CounterMetricDailyEntry>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FieldError: ResolverTypeWrapper<FieldError>;
  IMetric: ResolversTypes['CounterMetric'];
  ITodo: ResolversTypes['SubTodo'] | ResolversTypes['Todo'];
  Journal: ResolverTypeWrapper<Journal>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  JournalEntry: ResolverTypeWrapper<JournalEntry>;
  JournalResponse: ResolverTypeWrapper<JournalResponse>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  MetricType: MetricType;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RegistrationResponse: ResolverTypeWrapper<RegistrationResponse>;
  SubTodo: ResolverTypeWrapper<SubTodo>;
  TimerAttempt: ResolverTypeWrapper<TimerAttempt>;
  TimerEntry: ResolverTypeWrapper<TimerEntry>;
  TimerMetric: ResolverTypeWrapper<TimerMetric>;
  TimerMetricPayload: ResolverTypeWrapper<TimerMetricPayload>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoEntry: ResolverTypeWrapper<TodoEntry>;
  TodoResponse: ResolverTypeWrapper<TodoResponse>;
  UpdateCounterMetricInput: UpdateCounterMetricInput;
  UpdateJournalInput: UpdateJournalInput;
  UpdateTimerMetricInput: UpdateTimerMetricInput;
  UpdateTodoInput: UpdateTodoInput;
  User: ResolverTypeWrapper<User>;
  Weekday: Weekday;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CounterEntry: CounterEntry;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  CounterMetric: CounterMetric;
  CounterMetricDailyEntry: CounterMetricDailyEntry;
  DateTime: Scalars['DateTime'];
  FieldError: FieldError;
  IMetric: ResolversParentTypes['CounterMetric'];
  ITodo: ResolversParentTypes['SubTodo'] | ResolversParentTypes['Todo'];
  Journal: Journal;
  Boolean: Scalars['Boolean'];
  JournalEntry: JournalEntry;
  JournalResponse: JournalResponse;
  LoginResponse: LoginResponse;
  Mutation: {};
  Query: {};
  RegistrationResponse: RegistrationResponse;
  SubTodo: SubTodo;
  TimerAttempt: TimerAttempt;
  TimerEntry: TimerEntry;
  TimerMetric: TimerMetric;
  TimerMetricPayload: TimerMetricPayload;
  Todo: Todo;
  TodoEntry: TodoEntry;
  TodoResponse: TodoResponse;
  UpdateCounterMetricInput: UpdateCounterMetricInput;
  UpdateJournalInput: UpdateJournalInput;
  UpdateTimerMetricInput: UpdateTimerMetricInput;
  UpdateTodoInput: UpdateTodoInput;
  User: User;
};

export type CounterEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterEntry'] = ResolversParentTypes['CounterEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['CounterMetric'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CounterMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterMetric'] = ResolversParentTypes['CounterMetric']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metricEntries?: Resolver<Array<ResolversTypes['CounterEntry']>, ParentType, ContextType>;
  maximum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minimum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CounterMetricDailyEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterMetricDailyEntry'] = ResolversParentTypes['CounterMetricDailyEntry']> = {
  metricId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maximum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minimum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type IMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['IMetric'] = ResolversParentTypes['IMetric']> = {
  __resolveType: TypeResolveFn<'CounterMetric', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ITodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ITodo'] = ResolversParentTypes['ITodo']> = {
  __resolveType: TypeResolveFn<'SubTodo' | 'Todo', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  entries?: Resolver<Array<ResolversTypes['JournalEntry']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dailyWordGoal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['JournalEntry'] = ResolversParentTypes['JournalEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  journal?: Resolver<ResolversTypes['Journal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  didMeetGoal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['JournalResponse'] = ResolversParentTypes['JournalResponse']> = {
  journalId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dailyWordGoal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addJournal?: Resolver<Maybe<ResolversTypes['JournalResponse']>, ParentType, ContextType>;
  updateJournal?: Resolver<Maybe<ResolversTypes['JournalResponse']>, ParentType, ContextType, RequireFields<MutationUpdateJournalArgs, 'updateInput'>>;
  deleteJournal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteJournalArgs, 'id'>>;
  addTodo?: Resolver<Maybe<ResolversTypes['TodoResponse']>, ParentType, ContextType>;
  updateTodo?: Resolver<Maybe<ResolversTypes['TodoResponse']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'updateInput'>>;
  deleteTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  registerUser?: Resolver<ResolversTypes['RegistrationResponse'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'displayName' | 'email' | 'username' | 'password'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'usernameOrEmail' | 'password'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  resetPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'email'>>;
  deleteUserById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updateUserPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUserPasswordArgs, 'newPassword' | 'oldPassword' | 'username'>>;
  addTimer?: Resolver<Maybe<ResolversTypes['TimerMetricPayload']>, ParentType, ContextType>;
  addCounter?: Resolver<Maybe<ResolversTypes['CounterMetricDailyEntry']>, ParentType, ContextType>;
  updateCounter?: Resolver<Maybe<ResolversTypes['CounterMetricDailyEntry']>, ParentType, ContextType, RequireFields<MutationUpdateCounterArgs, 'updateInput'>>;
  updateTimer?: Resolver<Maybe<ResolversTypes['TimerMetricPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTimerArgs, 'updateInput'>>;
  deleteCounter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCounterArgs, 'id'>>;
  deleteTimer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTimerArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMyJournals?: Resolver<Array<ResolversTypes['JournalResponse']>, ParentType, ContextType, RequireFields<QueryGetMyJournalsArgs, 'excludeArchived'>>;
  getTimers?: Resolver<Array<ResolversTypes['TimerMetricPayload']>, ParentType, ContextType>;
  getMyTodos?: Resolver<Array<ResolversTypes['TodoResponse']>, ParentType, ContextType, RequireFields<QueryGetMyTodosArgs, 'excludeArchived'>>;
  getAllUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getCounters?: Resolver<Array<ResolversTypes['CounterMetricDailyEntry']>, ParentType, ContextType>;
  getDayCounters?: Resolver<Array<ResolversTypes['CounterMetricDailyEntry']>, ParentType, ContextType, RequireFields<QueryGetDayCountersArgs, 'date'>>;
};

export type RegistrationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegistrationResponse'] = ResolversParentTypes['RegistrationResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['FieldError']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubTodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubTodo'] = ResolversParentTypes['SubTodo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supertask?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  subtasks?: Resolver<Array<ResolversTypes['SubTodo']>, ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimerAttemptResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimerAttempt'] = ResolversParentTypes['TimerAttempt']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  entry?: Resolver<ResolversTypes['TimerEntry'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  didFinish?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  didSucceed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimerEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimerEntry'] = ResolversParentTypes['TimerEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['TimerMetric'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attempts?: Resolver<Array<ResolversTypes['TimerAttempt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimerMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimerMetric'] = ResolversParentTypes['TimerMetric']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['MetricType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  metricEntries?: Resolver<Array<ResolversTypes['TimerEntry']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goalLength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goalPerDay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimerMetricPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimerMetricPayload'] = ResolversParentTypes['TimerMetricPayload']> = {
  metricId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metricType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goalLength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goalPerDay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entries?: Resolver<Array<ResolversTypes['TodoEntry']>, ParentType, ContextType>;
  subtasks?: Resolver<Array<ResolversTypes['SubTodo']>, ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  repeatWeekdays?: Resolver<Array<ResolversTypes['Weekday']>, ParentType, ContextType>;
  doesRepeat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoEntry'] = ResolversParentTypes['TodoEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoResponse'] = ResolversParentTypes['TodoResponse']> = {
  todoId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  repeatWeekdays?: Resolver<Array<ResolversTypes['Weekday']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  birthday?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cron?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metrics?: Resolver<Array<ResolversTypes['CounterMetric']>, ParentType, ContextType>;
  timerMetrics?: Resolver<Array<ResolversTypes['TimerMetric']>, ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  journals?: Resolver<Array<ResolversTypes['Journal']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CounterEntry?: CounterEntryResolvers<ContextType>;
  CounterMetric?: CounterMetricResolvers<ContextType>;
  CounterMetricDailyEntry?: CounterMetricDailyEntryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FieldError?: FieldErrorResolvers<ContextType>;
  IMetric?: IMetricResolvers<ContextType>;
  ITodo?: ITodoResolvers<ContextType>;
  Journal?: JournalResolvers<ContextType>;
  JournalEntry?: JournalEntryResolvers<ContextType>;
  JournalResponse?: JournalResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegistrationResponse?: RegistrationResponseResolvers<ContextType>;
  SubTodo?: SubTodoResolvers<ContextType>;
  TimerAttempt?: TimerAttemptResolvers<ContextType>;
  TimerEntry?: TimerEntryResolvers<ContextType>;
  TimerMetric?: TimerMetricResolvers<ContextType>;
  TimerMetricPayload?: TimerMetricPayloadResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoEntry?: TodoEntryResolvers<ContextType>;
  TodoResponse?: TodoResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
