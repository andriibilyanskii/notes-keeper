import React from 'react';
import classNames from 'classnames';

import { Icon, Text, CategoryInfo } from '@components';

import { CONSTANTS } from '@constants';

import { getColor, usePopUpContext } from '@shared';

import styles from './FilterTagComponent.module.scss';

interface IProps {
	isSelected: boolean;
	onClick: (e) => void;
	id: string;
	text?: string;
	withIcon?: boolean;
	iconColor?: string;
	color?: string;
	background?: string;
	className?: string;
	isSelected_className?: boolean;
	toNotEdit?: boolean;
}

const FilterTagComponent: React.FC<IProps> = (props) => {
	const {
		isSelected,
		text,
		onClick,
		withIcon,
		iconColor,
		color,
		background,
		className,
		isSelected_className,
		id,
		toNotEdit,
	} = props;

	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	return (
		<div
			className={classNames({
				[styles['filterTag']]: true,
				[styles['filterTag_selected']]: isSelected || isSelected_className,
				[className || '']: !!className,
			})}
			style={{
				background: background || '',
			}}
			onClick={() => onClick(id)}
		>
			{withIcon && (
				<Icon
					className={styles['filterTagIcon']}
					src={CONSTANTS.ICONS.filterList}
					color={isSelected ? getColor('primary-blue') : iconColor}
				/>
			)}

			{text && (
				<Text.S1
					type='medium'
					style={{
						color: color || '',
					}}
					className={styles['filterTag-text']}
				>
					{text}
				</Text.S1>
			)}

			{isSelected && id !== 'all' && !toNotEdit && (
				<Icon
					src={CONSTANTS.ICONS.more}
					size={'0.75rem'}
					onClick={() => {
						setIsOpenPopUp(true);
						setPopupChildren(<CategoryInfo categoryID={id} />);
					}}
				/>
			)}
		</div>
	);
};

FilterTagComponent.defaultProps = {
	className: '',
	withIcon: false,
};

export { FilterTagComponent };
