import { CommonSelectType } from '@/type';
import styles from './styles.module.scss';
import { FC } from 'react';

interface CommonSelectProps {
	fieldName: string;
	optionList: CommonSelectType[];
	handlerOnClick: (optionItem: CommonSelectType) => void;
}
const CommonSelect: FC<CommonSelectProps> = ({
	fieldName,
	optionList,
	handlerOnClick,
}) => {
	return (
		<select
			id={fieldName}
			className={styles['common-select']}
			name={fieldName}
			onChange={(e) => handlerOnClick(e.target.value)}
		>
			{optionList.map((optionItem) => {
				return (
					<option key={optionItem.value} value={optionItem.value}>
						{optionItem.text}
					</option>
				);
			})}
		</select>
	);
};

export default CommonSelect;
