import { ProductType } from '@/type';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import ProductCard from '@components/UI/ProductCard';
import { CommonButtonTypes } from '@/type';
import CommonButton from '@components/UI/CommonButton';
import { useState } from 'react';
import DeleteProductModal from '@components/modals/DeleteProductModal';
import { useNavigate } from 'react-router-dom';
import { filteredProductsListSelector } from '@/store/selector';

const ProductList = () => {
	const navigate = useNavigate();
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [currentProduct, setCurrentProduct] = useState<ProductType | null>(
		null
	);
	const productsList: ProductType[] = useSelector(filteredProductsListSelector);

	const navigateToProductDetail = (productId: number) => {
		navigate(`/products/${productId}`);
	};
	const handlerOnDeletedProduct = (productId: ProductType) => {
		setCurrentProduct(productId);
		setModalActive(true);
	};

	return (
		<section className={styles['product-list']}>
			{!!productsList.length &&
				productsList.map((product) => (
					<ProductCard key={product.id} product={product}>
						<CommonButton
							btnType={CommonButtonTypes.BUTTON}
							btnStyle={'primary'}
							onClick={() => navigateToProductDetail(product.id)}
						>
							Product details
						</CommonButton>
						<CommonButton
							btnType={CommonButtonTypes.BUTTON}
							btnStyle={'error'}
							onClick={() => handlerOnDeletedProduct(product)}
						>
							Delete product
						</CommonButton>
					</ProductCard>
				))}
			<DeleteProductModal
				productId={currentProduct?.id}
				active={modalActive}
				setActive={setModalActive}
			/>
		</section>
	);
};

export default ProductList;
