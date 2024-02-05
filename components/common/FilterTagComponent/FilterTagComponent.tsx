import React from 'react';
import classNames from 'classnames';

import { Icon, Text } from '@components';

import { CONSTANTS } from '@constants';

import { getColor } from '@shared';
import { useLanguage } from '@shared/hooks';

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
	} = props;

	const { language } = useLanguage();

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
		</div>
	);
};

FilterTagComponent.defaultProps = {
	className: '',
	withIcon: false,
};

export { FilterTagComponent };
