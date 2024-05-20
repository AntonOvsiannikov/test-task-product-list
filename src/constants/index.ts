import { CommonSelectType } from '@/type';

export const productSortParams: CommonSelectType[] = [
	{
		value: 'alphabetically',
		text: 'Sortied by A-Z',
	},
	{
		value: 'count',
		text: 'Sortied by Count',
	},
];

export const NameInputData = {
	label: 'Name',
	id: 'name',
	name: 'name',
	type: 'text',
	placeholder: 'Enter product title',
};
export const ImageUrlInputData = {
	label: 'Image Url',
	id: 'imageUrl',
	name: 'imageUrl',
	type: 'text',
	placeholder: 'Enter product image url',
};
export const CountInputData = {
	label: 'Count',
	id: 'count',
	name: 'count',
	type: 'number',
	placeholder: 'Enter product count',
};
export const WeightInputData = {
	label: 'Weight',
	id: 'weight',
	name: 'weight',
	type: 'text',
	placeholder: 'Enter product weight like "300 grm"',
};
export const SizeWidthInputData = {
	label: 'Product size width',
	id: 'size.width',
	name: 'size.width',
	type: 'number',
	placeholder: 'Enter product size width',
};
export const SizeHeightInputData = {
	label: 'Product size width',
	id: 'size.height',
	name: 'size.height',
	type: 'number',
	placeholder: 'Enter product size height',
};

export const changeProductInputData = [
	ImageUrlInputData,
	NameInputData,
	CountInputData,
	SizeWidthInputData,
	SizeHeightInputData,
	WeightInputData,
];
