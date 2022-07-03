export interface MedicationHookResponse {
    data: Medication[];
    loading: boolean;
    error: string | null | undefined;
}

export interface Dose {
    amount: number;
    unit: string;
}

export interface DoseInstance {
    id: string;
    dose: Dose;
    time: Date;
}

export interface Medication {
    id: string;
    name: string;
    notes: string;
    reminderTimes: Date[];
    expectedDose?: Dose;
    doseEntries: DoseInstance[];
}

export const getMedications = (): MedicationHookResponse => ({
    loading: false,
    error: null,
    data: [
        {
            id: 'h81y9hbfovbeifuhp',
            name: 'Foobar XL',
            notes: 'My anti-anxiety med',
            reminderTimes: [new Date(0, 0, 0, 8, 0, 0)],
            expectedDose: { amount: 300, unit: 'mg' },
            doseEntries: [
                {
                    id: '61gr239yo',
                    time: new Date(2022, 1, 3, 8, 3, 49),
                    dose: { amount: 300, unit: 'mg' },
                },
                {
                    id: 'h832f794',
                    time: new Date(2022, 1, 2, 8, 3, 49),
                    dose: { amount: 300, unit: 'mg' },
                },
                {
                    id: 'nuh0342879',
                    time: new Date(2022, 1, 1, 8, 3, 49),
                    dose: { amount: 300, unit: 'mg' },
                },
            ],
        },
        {
            id: 'isjklfbierp9eiguhq',
            name: 'Fiber Supplement',
            notes: 'Helps with digestion',
            reminderTimes: [
                new Date(0, 0, 0, 9, 30, 0),
                new Date(0, 0, 0, 18, 0, 0),
            ],
            expectedDose: { amount: 5, unit: 'capsules' },
            doseEntries: [
                {
                    id: '1436jgfy98b0',
                    time: new Date(2021, 10, 4, 8, 3, 0),
                    dose: { amount: 3, unit: 'capsules' },
                },
                {
                    id: '1gf93yijdf',
                    time: new Date(2021, 10, 4, 8, 3, 0),
                    dose: { amount: 1, unit: 'capsules' },
                },
            ],
        },
        {
            id: 'h74839cn2dkuoi',
            name: 'Vitamin C Supplement',
            notes: '',
            reminderTimes: [],
            doseEntries: [],
        },
        {
            id: '43yfbojwek',
            name: 'Acetaminophen',
            notes: 'Take when small pains occur',
            reminderTimes: [],
            doseEntries: [
                {
                    id: '170xg8f39y',
                    time: new Date(2022, 0, 3, 3, 27, 15),
                    dose: { amount: 100, unit: 'mg' },
                },
            ],
        },
    ],
});
