import { FC } from 'react';
import styles from './styles.module.scss';
import ModalLayout from '@components/layouts/ModalLayout';
import ChangeProductForm from '@components/forms/ChangeProductForm';
import { createProduct } from '@/http/products';
import { ProductType } from '@/type';
import { useDispatch } from 'react-redux';
import { createProductAction } from '@/store/action/productsListAction';

interface CreateProductModalProps {
	active: boolean;
	setActive: (state: boolean) => void;
	formTitle: string;
}

const CreateProductModal: FC<CreateProductModalProps> = ({
	active,
	setActive,
	formTitle,
}) => {
	const dispatch = useDispatch();
	const handlerOnCreateProduct = (product: ProductType) => {
		createProduct(product).then((data: ProductType) => {
			dispatch(createProductAction(data));
		});
	};

	return (
		<ModalLayout active={active} setActive={setActive}>
			<div className={styles['change-modal']}>
				<h3 className={styles['change-modal__title']}>{formTitle}</h3>
				<ChangeProductForm
					setActive={setActive}
					changeProduct={handlerOnCreateProduct}
				/>
			</div>
		</ModalLayout>
	);
};

export default CreateProductModal;
