import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const BaseLayout = () => {
	return (
		<>
			<main className={styles['base-layout']}>
				<Outlet />
			</main>
		</>
	);
};

export default BaseLayout;
