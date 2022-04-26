import { registerEnumType } from '@nestjs/graphql';

export enum CategoryColor {
    DEFAULT = 'default',
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green',
    BLUE = 'blue',
}

registerEnumType(CategoryColor, {
    name: 'CategoryColor',
    description: 'Colors a user may associate with a category/tag',
});

export const categoryColors = [
    CategoryColor.DEFAULT,
    CategoryColor.RED,
    CategoryColor.YELLOW,
    CategoryColor.GREEN,
    CategoryColor.BLUE,
];
