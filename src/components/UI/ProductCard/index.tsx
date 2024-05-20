import { ProductType } from '@/type';
import styles from './styles.module.scss';
import { FC } from 'react';
import defaultProductImage from '@assets/image/default-product-image.png';

interface ProductCardProps {
	product: ProductType;
	children: React.ReactNode;
}
const ProductCard: FC<ProductCardProps> = ({ product, children }) => {
	return (
		<article className={styles['product-card']}>
			<section className={styles['product-card__info']}>
				<img
					className={styles['product-card__image']}
					src={product.imageUrl || defaultProductImage}
					alt={`${product.name} product image`}
				/>
				<h3 className={styles['product-card__title']}>{product.name}</h3>
			</section>
			{children}
		</article>
	);
};

export default ProductCard;
