import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	count: Yup.number()
		.required('Count is required')
		.integer('Count must be an integer')
		.min(1, 'Count must be at least 1'),
	size: Yup.object().shape({
		width: Yup.number()
			.required('Count is required')
			.integer('Count must be an integer')
			.min(1, 'Count must be at least 1'),
		height: Yup.number()
			.required('Count is required')
			.integer('Count must be an integer')
			.min(1, 'Count must be at least 1'),
	}),
	weight: Yup.string().required('Weight is required'),
});
