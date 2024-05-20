import { useNavigate, useParams } from 'react-router-dom';
import { getOneProduct } from '@/http/products';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import defaultProductImage from '@assets/image/default-product-image.png';
import CommonButton from '../../../components/UI/CommonButton';
import { CommonButtonTypes } from '../../../type';
import EditProductModal from '@components/modals/EditProdactModal';

const Product = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [currentProduct, setCurrentProduct] = useState(null);
	const [modalActive, setModalActive] = useState<boolean>(false);

	useEffect(() => {
		const fetchProduct = async () => {
			const product = await getOneProduct(id);
			setCurrentProduct(product);
		};

		fetchProduct();
	}, [currentProduct]);

	return (
		<div className="wrapper-outer">
			{currentProduct ? (
				<div className={`wrapper-inner ${styles['product-page']}`}>
					<div className={styles['product-page__product']}>
						<img
							className={styles['product-page__image']}
							src={currentProduct.imageUrl || defaultProductImage}
							alt={`${currentProduct.name} product image`}
						/>
						<div className={styles['product-page__product-info']}>
							<div className={styles['product-page__product-parameter']}>
								Product title: {currentProduct.name}
							</div>
							<div className={styles['product-page__product-parameter']}>
								Product count: {currentProduct.count}
							</div>
							<div className={styles['product-page__product-parameter']}>
								{`Product size: ${currentProduct.size.width} х
							${currentProduct.size.height}`}
							</div>
							<div className={styles['product-page__product-parameter']}>
								Product weight: {currentProduct.weight}
							</div>
						</div>
						<div className={styles['product-page__button-wrapper']}>
							<CommonButton
								btnType={CommonButtonTypes.SUBMIT}
								btnStyle={'primary'}
								onClick={() => navigate('/')}
							>
								Go to main page
							</CommonButton>
							<CommonButton
								btnType={CommonButtonTypes.BUTTON}
								btnStyle={'update'}
								onClick={() => setModalActive(true)}
							>
								Edit product
							</CommonButton>
							<CommonButton
								btnType={CommonButtonTypes.BUTTON}
								btnStyle={'success'}
							>
								Add comment
							</CommonButton>
						</div>
					</div>
					<div className={styles['product-page__comments']}>312</div>
					<EditProductModal
						active={modalActive}
						setActive={setModalActive}
						formTitle={'Edit product'}
						product={currentProduct}
					/>
				</div>
			) : (
				<div>Product not found</div>
			)}
		</div>
	);
};

export default Product;
