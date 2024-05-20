import { productSortParams } from '@/constants';
import CommonButton from '@components/UI/CommonButton';
import CommonSelect from '@components/UI/CommonSelect';
import styles from './styles.module.scss';
import { CommonButtonTypes } from '@/type';
import CreateProductModal from '@components/modals/CreateProductModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterAction } from '@/store/action/filterActions';

const ProductListHeader = () => {
	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState<boolean>(false);

	const changeFilter = (filterOptions: string) => {
		dispatch(changeFilterAction(filterOptions));
	};

	return (
		<section className={styles['product-list-header']}>
			<CommonButton
				btnType={CommonButtonTypes.BUTTON}
				btnStyle={'success'}
				onClick={() => setModalActive(true)}
			>
				Create product
			</CommonButton>
			<CommonSelect
				fieldName={'sortied'}
				optionList={productSortParams}
				handlerOnClick={changeFilter}
			/>
			<CreateProductModal
				active={modalActive}
				setActive={setModalActive}
				formTitle={'Create product'}
			/>
		</section>
	);
};

export default ProductListHeader;
