import { registerEnumType } from '@nestjs/graphql';

enum Weekday {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
}

registerEnumType(Weekday, {
    name: 'Weekday',
    description: 'The days of the week',
});

export default Weekday;

export const weekdays = [
    Weekday.SUNDAY,
    Weekday.MONDAY,
    Weekday.TUESDAY,
    Weekday.WEDNESDAY,
    Weekday.THURSDAY,
    Weekday.FRIDAY,
    Weekday.SATURDAY,
];
