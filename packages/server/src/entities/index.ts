import { CounterEntry } from './counter-entry.entity';
import { CounterMetric } from './counter-metric.entity';
import { DailyFloatEntry } from './daily-float-entry.entity';
import { DailyFloatMetric } from './daily-float-metric.entity';
import { Journal } from './journal.entity';
import { JournalEntry } from './journal-entry.entity';
import { Metric } from './metric.entity';
import { Scale } from './scale.entity';
import { ScaleEntry } from './scale-entry.entity';
import { SelectionCategory } from './selection-category.entity';
import { SelectionEntry } from './selection-entry.entity';
import { SelectionMetric } from './selection-metric.entity';
import { SelectionOption } from './selection-option.entity';
import { Tag } from './tag.entity';
import { Taggable } from './taggable.entity';
import { TimerAttempt } from './timer-attempt.entity';
import { TimerEntry } from './timer-entry.entity';
import { TimerMetric } from './timer-metric.entity';
import { Todo } from './todo.entity';
import { TodoEntry } from './todo-entry.entity';
import { User } from '../modules/user/models/user.entity';

const entities = [
    CounterEntry,
    CounterMetric,
    DailyFloatEntry,
    DailyFloatMetric,
    Journal,
    JournalEntry,
    Metric,
    Scale,
    ScaleEntry,
    SelectionCategory,
    SelectionEntry,
    SelectionMetric,
    SelectionOption,
    Tag,
    Taggable,
    TimerAttempt,
    TimerEntry,
    TimerMetric,
    Todo,
    TodoEntry,
    User,
];

export default entities;

export * from './counter-entry.entity';
export * from './counter-metric.entity';
export * from './daily-float-entry.entity';
export * from './daily-float-metric.entity';
export * from './journal.entity';
export * from './journal-entry.entity';
export * from './scale.entity';
export * from './scale-entry.entity';
export * from './selection-category.entity';
export * from './selection-entry.entity';
export * from './selection-metric.entity';
export * from './selection-option.entity';
export * from './tag.entity';
export * from './timer-attempt.entity';
export * from './timer-entry.entity';
export * from './timer-metric.entity';
export * from './todo.entity';
export * from './todo-entry.entity';
export * from '../modules/user/models/user.entity';
