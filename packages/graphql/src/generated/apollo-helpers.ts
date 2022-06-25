/* eslint-disable */
import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AvailabilityDtoKeySpecifier = ('alternatives' | 'attemptedInput' | 'fieldName' | 'isAvailable' | 'timeChecked' | AvailabilityDtoKeySpecifier)[];
export type AvailabilityDtoFieldPolicy = {
	alternatives?: FieldPolicy<any> | FieldReadFunction<any>,
	attemptedInput?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	timeChecked?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatKeySpecifier = ('createdAt' | 'id' | 'isArchived' | 'members' | ChatKeySpecifier)[];
export type ChatFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CounterMetricKeySpecifier = ('id' | 'interval' | 'maximum' | 'metric' | 'metricType' | 'minimum' | CounterMetricKeySpecifier)[];
export type CounterMetricFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>,
	maximum?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	metricType?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DailyFloatMetricKeySpecifier = ('id' | 'max' | 'metric' | 'metricType' | 'min' | DailyFloatMetricKeySpecifier)[];
export type DailyFloatMetricFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	metricType?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditFeedbackDtoKeySpecifier = ('success' | EditFeedbackDtoKeySpecifier)[];
export type EditFeedbackDtoFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldErrorKeySpecifier = ('field' | 'message' | FieldErrorKeySpecifier)[];
export type FieldErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JournalKeySpecifier = ('dailyWordGoal' | 'id' | 'isArchived' | 'user' | JournalKeySpecifier)[];
export type JournalFieldPolicy = {
	dailyWordGoal?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponseKeySpecifier = ('error' | 'user' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('chat' | 'content' | 'edittedAt' | 'id' | 'sender' | 'sentAt' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	edittedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	sentAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetricKeySpecifier = ('description' | 'id' | 'isArchived' | 'taggable' | 'title' | 'user' | MetricKeySpecifier)[];
export type MetricFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	taggable?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addTodo' | 'applyTag' | 'createTag' | 'deleteMessage' | 'deleteTag' | 'deleteTodo' | 'deleteUser' | 'deleteUserById' | 'editMessage' | 'login' | 'logout' | 'registerUser' | 'sendFeedback' | 'sendMessageToChat' | 'sendMessageToUser' | 'updateSettings' | 'updateTag' | 'updateTodo' | 'updateUserPassword' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	applyTag?: FieldPolicy<any> | FieldReadFunction<any>,
	createTag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUserById?: FieldPolicy<any> | FieldReadFunction<any>,
	editMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	registerUser?: FieldPolicy<any> | FieldReadFunction<any>,
	sendFeedback?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMessageToChat?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMessageToUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTag?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserPassword?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getMyTodos' | 'getTodo' | 'me' | 'myChats' | 'mySettings' | 'myTags' | 'randomAvailableUsername' | 'usernameAvailability' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getMyTodos?: FieldPolicy<any> | FieldReadFunction<any>,
	getTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	myChats?: FieldPolicy<any> | FieldReadFunction<any>,
	mySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	myTags?: FieldPolicy<any> | FieldReadFunction<any>,
	randomAvailableUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	usernameAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationResponseKeySpecifier = ('errors' | 'user' | RegistrationResponseKeySpecifier)[];
export type RegistrationResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SafeUserKeySpecifier = ('createdAt' | 'email' | 'googleId' | 'id' | 'isEmailVerified' | 'stars' | 'username' | SafeUserKeySpecifier)[];
export type SafeUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	googleId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	stars?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScaleKeySpecifier = ('id' | 'max' | 'metric' | 'metricType' | 'min' | ScaleKeySpecifier)[];
export type ScaleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	metricType?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectionCategoryKeySpecifier = ('id' | 'metric' | 'title' | SelectionCategoryKeySpecifier)[];
export type SelectionCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectionEntryKeySpecifier = ('datetime' | 'id' | 'metric' | 'selectedOptions' | SelectionEntryKeySpecifier)[];
export type SelectionEntryFieldPolicy = {
	datetime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedOptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectionMetricKeySpecifier = ('id' | 'maxSelections' | 'metric' | 'metricType' | 'minSelections' | SelectionMetricKeySpecifier)[];
export type SelectionMetricFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maxSelections?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	metricType?: FieldPolicy<any> | FieldReadFunction<any>,
	minSelections?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectionOptionKeySpecifier = ('category' | 'id' | 'metric' | 'selectingEntries' | 'title' | SelectionOptionKeySpecifier)[];
export type SelectionOptionFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	selectingEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('color' | 'description' | 'icon' | 'id' | 'isArchived' | 'label' | 'user' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaggableKeySpecifier = ('id' | 'tags' | TaggableKeySpecifier)[];
export type TaggableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerMetricKeySpecifier = ('goalLength' | 'goalPerDay' | 'id' | 'metric' | 'metricType' | TimerMetricKeySpecifier)[];
export type TimerMetricFieldPolicy = {
	goalLength?: FieldPolicy<any> | FieldReadFunction<any>,
	goalPerDay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metric?: FieldPolicy<any> | FieldReadFunction<any>,
	metricType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TodoKeySpecifier = ('description' | 'doesRepeat' | 'id' | 'isArchived' | 'isCompleted' | 'repeatWeekdays' | 'subtasks' | 'supertask' | 'tags' | 'title' | 'user' | TodoKeySpecifier)[];
export type TodoFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	doesRepeat?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	repeatWeekdays?: FieldPolicy<any> | FieldReadFunction<any>,
	subtasks?: FieldPolicy<any> | FieldReadFunction<any>,
	supertask?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'googleId' | 'id' | 'isEmailVerified' | 'stars' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	googleId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	stars?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSettingsDtoKeySpecifier = ('audioEnabled' | 'globalVolume' | 'id' | 'isPublic' | 'language' | 'pin' | 'pinTimeout' | 'themePreference' | 'user' | UserSettingsDtoKeySpecifier)[];
export type UserSettingsDtoFieldPolicy = {
	audioEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	globalVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	pin?: FieldPolicy<any> | FieldReadFunction<any>,
	pinTimeout?: FieldPolicy<any> | FieldReadFunction<any>,
	themePreference?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AvailabilityDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailabilityDtoKeySpecifier | (() => undefined | AvailabilityDtoKeySpecifier),
		fields?: AvailabilityDtoFieldPolicy,
	},
	Chat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatKeySpecifier | (() => undefined | ChatKeySpecifier),
		fields?: ChatFieldPolicy,
	},
	CounterMetric?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CounterMetricKeySpecifier | (() => undefined | CounterMetricKeySpecifier),
		fields?: CounterMetricFieldPolicy,
	},
	DailyFloatMetric?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DailyFloatMetricKeySpecifier | (() => undefined | DailyFloatMetricKeySpecifier),
		fields?: DailyFloatMetricFieldPolicy,
	},
	EditFeedbackDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditFeedbackDtoKeySpecifier | (() => undefined | EditFeedbackDtoKeySpecifier),
		fields?: EditFeedbackDtoFieldPolicy,
	},
	FieldError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldErrorKeySpecifier | (() => undefined | FieldErrorKeySpecifier),
		fields?: FieldErrorFieldPolicy,
	},
	Journal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JournalKeySpecifier | (() => undefined | JournalKeySpecifier),
		fields?: JournalFieldPolicy,
	},
	LoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResponseKeySpecifier | (() => undefined | LoginResponseKeySpecifier),
		fields?: LoginResponseFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	Metric?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetricKeySpecifier | (() => undefined | MetricKeySpecifier),
		fields?: MetricFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RegistrationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationResponseKeySpecifier | (() => undefined | RegistrationResponseKeySpecifier),
		fields?: RegistrationResponseFieldPolicy,
	},
	SafeUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SafeUserKeySpecifier | (() => undefined | SafeUserKeySpecifier),
		fields?: SafeUserFieldPolicy,
	},
	Scale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScaleKeySpecifier | (() => undefined | ScaleKeySpecifier),
		fields?: ScaleFieldPolicy,
	},
	SelectionCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectionCategoryKeySpecifier | (() => undefined | SelectionCategoryKeySpecifier),
		fields?: SelectionCategoryFieldPolicy,
	},
	SelectionEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectionEntryKeySpecifier | (() => undefined | SelectionEntryKeySpecifier),
		fields?: SelectionEntryFieldPolicy,
	},
	SelectionMetric?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectionMetricKeySpecifier | (() => undefined | SelectionMetricKeySpecifier),
		fields?: SelectionMetricFieldPolicy,
	},
	SelectionOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectionOptionKeySpecifier | (() => undefined | SelectionOptionKeySpecifier),
		fields?: SelectionOptionFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	Taggable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaggableKeySpecifier | (() => undefined | TaggableKeySpecifier),
		fields?: TaggableFieldPolicy,
	},
	TimerMetric?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerMetricKeySpecifier | (() => undefined | TimerMetricKeySpecifier),
		fields?: TimerMetricFieldPolicy,
	},
	Todo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TodoKeySpecifier | (() => undefined | TodoKeySpecifier),
		fields?: TodoFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserSettingsDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSettingsDtoKeySpecifier | (() => undefined | UserSettingsDtoKeySpecifier),
		fields?: UserSettingsDtoFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;