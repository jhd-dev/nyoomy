/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/**
 * @typedef {Object} CounterEntry
 * @property {string} id
 * @property {CounterMetric} metric
 * @property {string} date
 * @property {number} count
 */

/**
 * @typedef {Object} CounterMetric
 * @property {string} id
 * @property {string} label
 * @property {string} description
 * @property {User} user
 * @property {Array<CounterEntry>} metricEntries
 * @property {number} maximum
 * @property {number} minimum
 * @property {number} interval
 */

/**
 * @typedef {Object} CounterMetricDailyEntry
 * @property {string} metricId
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
 * @typedef {Object} LoginResponse
 * @property {User} [user]
 * @property {string} [error]
 */

/**
 * @typedef {Object} Mutation
 * @property {RegistrationResponse} registerUser
 * @property {LoginResponse} login
 * @property {boolean} logout
 * @property {boolean} forgotPassword
 * @property {boolean} resetPassword
 * @property {boolean} deleteUserById
 * @property {boolean} deleteUser
 * @property {boolean} updateUserPassword
 * @property {CounterMetricDailyEntry} [addCounter]
 */

/**
 * @typedef {Object} Query
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
 * @property {DateTime} createdAt
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
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  RegistrationResponse: ResolverTypeWrapper<RegistrationResponse>;
  User: ResolverTypeWrapper<User>;
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
  LoginResponse: LoginResponse;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Query: {};
  RegistrationResponse: RegistrationResponse;
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
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  metricEntries?: Resolver<Array<ResolversTypes['CounterEntry']>, ParentType, ContextType>;
  maximum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minimum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CounterMetricDailyEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterMetricDailyEntry'] = ResolversParentTypes['CounterMetricDailyEntry']> = {
  metricId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registerUser?: Resolver<ResolversTypes['RegistrationResponse'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'displayName' | 'email' | 'username' | 'password'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'usernameOrEmail' | 'password'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  resetPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'email'>>;
  deleteUserById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updateUserPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUserPasswordArgs, 'newPassword' | 'oldPassword' | 'username'>>;
  addCounter?: Resolver<Maybe<ResolversTypes['CounterMetricDailyEntry']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
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
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CounterEntry?: CounterEntryResolvers<ContextType>;
  CounterMetric?: CounterMetricResolvers<ContextType>;
  CounterMetricDailyEntry?: CounterMetricDailyEntryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FieldError?: FieldErrorResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegistrationResponse?: RegistrationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
