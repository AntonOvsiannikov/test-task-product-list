import { ErrorMessage, Field, Formik, Form } from 'formik';
import styles from './styles.module.scss';
import { productInitialValue } from '@/utils/validation/initialValues';
import { productSchema } from '@/utils/validation/validationSchemas';
import { ProductType } from '@/type';
import { FC } from 'react';
import LabelLayout from '@components/layouts/LabelLayout';
import { FieldType } from '@/type';
import { changeProductInputData } from '@/constants';
import { CommonButtonTypes } from '@/type';
import CommonButton from '@components/UI/CommonButton';

interface ChangeProductFormProps {
	product: ProductType | null;
	setActive: (state: boolean) => void;
	changeProduct: (product: ProductType) => void;
}

const ChangeProductForm: FC<ChangeProductFormProps> = ({
	product,
	setActive,
	changeProduct,
}) => {
	return (
		<Formik
			initialValues={product || productInitialValue}
			validationSchema={productSchema}
			onSubmit={async (values, { resetForm }) => {
				await changeProduct(values);
				setActive(false);
				resetForm();
			}}
		>
			{({ resetForm }) => (
				<Form className={styles['change-product-form']}>
					<div className={styles['change-product-form__wrapper']}>
						{changeProductInputData.map((field: FieldType) => {
							return (
								<LabelLayout key={field.name} childrenInfo={field}>
									<Field
										className={styles['change-product-form__field']}
										id={field.name}
										name={field.name}
										placeholder={field.placeholder}
										type={field.type}
									/>
									<ErrorMessage
										className={styles['change-product-form__error-message']}
										name={field.name}
										component="span"
									/>
								</LabelLayout>
							);
						})}
					</div>
					<div className={styles['change-product-form__button-wrapper']}>
						<CommonButton
							btnType={CommonButtonTypes.SUBMIT}
							btnStyle={'success'}
						>
							Confirm
						</CommonButton>
						<CommonButton
							btnType={CommonButtonTypes.BUTTON}
							btnStyle={'primary'}
							onClick={() => {
								setActive(false);
								resetForm();
							}}
						>
							Cancel
						</CommonButton>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ChangeProductForm;
