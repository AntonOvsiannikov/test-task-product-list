import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import BaseLayout from '@components/layouts/BaseLayout';
import ProductsPage from '@/pages/products';
import Product from '@/pages/products/product';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<BaseLayout />}>
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/products/:id" element={<Product />} />
			<Route path="*" element={<Navigate to="/products" replace />} />
		</Route>
	)
);
