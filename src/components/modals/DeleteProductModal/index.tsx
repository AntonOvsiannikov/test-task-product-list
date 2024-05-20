import { FC } from 'react';
import styles from './styles.module.scss';
import ModalLayout from '@components/layouts/ModalLayout';
import { CommonButtonTypes } from '@/type';
import CommonButton from '@components/UI/CommonButton';
import { deleteProduct } from '@/http/products';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '@/store/action/productsListAction';

interface DeleteProductModalProps {
	active: boolean;
	setActive: (state: boolean) => void;
	productId: number;
}
const DeleteProductModal: FC<DeleteProductModalProps> = ({
	active,
	setActive,
	productId,
}) => {
	const dispatch = useDispatch();
	const handlerOnDeleteProduct = (productId: number) => {
		deleteProduct(productId).then(() => {
			dispatch(deleteProductAction(productId));
		});
		setActive(false);
	};

	return (
		<ModalLayout active={active} setActive={setActive}>
			<div className={styles['delete-modal']}>
				<p className={styles['delete-modal__text']}>
					Are you sure you want to delete this product? This action cannot be
					undone. Please confirm your intention to delete the product by
					choosing one of the following options:
				</p>
				<div className={styles['delete-modal__button-wrapper']}>
					<CommonButton
						btnType={CommonButtonTypes.BUTTON}
						btnStyle={'error'}
						onClick={() => handlerOnDeleteProduct(productId)}
					>
						Confirm
					</CommonButton>
					<CommonButton
						btnType={CommonButtonTypes.BUTTON}
						btnStyle={'primary'}
						onClick={() => setActive(false)}
					>
						Cancel
					</CommonButton>
				</div>
			</div>
		</ModalLayout>
	);
};

export default DeleteProductModal;
