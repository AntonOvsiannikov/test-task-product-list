import { FC } from 'react';
import styles from './styles.module.scss';
import { CommonButtonTypes } from '@/type';

interface CommonButtonProps {
	children: React.ReactNode;
	btnStyle: string;
	btnType: CommonButtonTypes;
}

const CommonButton: FC<CommonButtonProps> = ({
	children,
	btnStyle,
	btnType,
	...props
}) => {
	return (
		<button type={btnType} className={styles[btnStyle]} {...props}>
			{children}
		</button>
	);
};

export default CommonButton;
