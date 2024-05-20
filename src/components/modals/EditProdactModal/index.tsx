import { FC } from 'react';
import styles from './styles.module.scss';
import ModalLayout from '@components/layouts/ModalLayout';
import ChangeProductForm from '@components/forms/ChangeProductForm';
import { ProductType } from '@/type';
import { useDispatch } from 'react-redux';
import { updateProduct } from '@/http/products';
import { editProductAction } from '@/store/action/productsListAction';
import product from '../../../pages/products/product';

interface EditProductModalProps {
	active: boolean;
	setActive: (state: boolean) => void;
	formTitle: string;
	product: ProductType;
}

const EditProductModal: FC<EditProductModalProps> = ({
	active,
	setActive,
	formTitle,
	product,
}) => {
	const dispatch = useDispatch();
	const handlerOnEditProduct = (product: ProductType) => {
		console.log(product);
		updateProduct(product).then((data: ProductType) => {
			dispatch(editProductAction(data));
		});
	};

	return (
		<ModalLayout active={active} setActive={setActive}>
			<div className={styles['change-modal']}>
				<h3 className={styles['change-modal__title']}>{formTitle}</h3>
				<ChangeProductForm
					setActive={setActive}
					changeProduct={handlerOnEditProduct}
					product={product}
				/>
			</div>
		</ModalLayout>
	);
};

export default EditProductModal;
