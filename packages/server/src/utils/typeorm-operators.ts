import { addYears, subYears } from 'date-fns';
import { Between } from 'typeorm';
import type { FindOperator } from 'typeorm';

export const AfterDate = (
    date: Date = subYears(Date.now(), 200)
): FindOperator<Date> => Between(date, addYears(date, 100));
export const BeforeDate = (
    date: Date = addYears(Date.now(), 200)
): FindOperator<Date> => Between(subYears(date, 100), date);
