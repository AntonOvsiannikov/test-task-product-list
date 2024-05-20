import { FC } from 'react';
import styles from './styles.module.scss';

interface LabelLayoutProps {
	childrenInfo: any;
	children: React.ReactNode;
}

const LabelLayout: FC<LabelLayoutProps> = ({ childrenInfo, children }) => {
	return (
		<div className={styles['label-layout']}>
			<label className={styles['label-layout-label']} htmlFor={childrenInfo.id}>
				{childrenInfo.label}
			</label>
			{children}
		</div>
	);
};

export default LabelLayout;
