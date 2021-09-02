import { registerEnumType } from 'type-graphql';

enum CategoryIcon {
    GLOBE = 'GLOBE',
    STAR = 'STAR',
    WATER = 'WATER',
    ROCKET = 'ROCKET',
}

registerEnumType(CategoryIcon, {
    name: 'CategoryIcon',
    description: 'The icons available to accompany category/tag titles',
});

export default CategoryIcon;

export const categoryIcons = [
    CategoryIcon.GLOBE,
    CategoryIcon.STAR,
    CategoryIcon.WATER,
    CategoryIcon.ROCKET,
];
