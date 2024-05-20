import ProductListHeader from '@components/ProductListHeader';
import ProductList from '@components/ProductList';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductList } from '@/http/products';
import { fetchProductList } from '@/store/action/productsListAction';

const ProductsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			const products = await getProductList();
			await dispatch(fetchProductList(products));
		}

		fetchData();
	}, []);

	return (
		<div className="wrapper-outer">
			<div className={`wrapper-inner ${styles['products-page']}`}>
				<ProductListHeader />
				<ProductList />
			</div>
		</div>
	);
};

export default ProductsPage;
