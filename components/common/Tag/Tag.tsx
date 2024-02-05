import React from 'react';
import classNames from 'classnames';

import { Icon, Text } from '@components';

import styles from './Tag.module.scss';

interface IProps {
	children: React.ReactNode;
	iconSrc?: string;
	iconColor?: string;
	iconSize?: string;
	textComponent?: 'S1' | 'S2';
	color?: string;
	background?: string;
	className?: string;
	reversed?: boolean;
	onClickIcon?: (e) => void;
}

const Tag: React.FC<IProps> = (props) => {
	const {
		children,
		iconSrc,
		iconColor,
		iconSize,
		textComponent,
		color,
		background,
		className,
		reversed,
		onClickIcon,
	} = props;

	return (
		<div
			className={classNames({
				[styles['tag']]: true,
				[styles['tag_reversed']]: reversed,
				[className || '']: !!className,
			})}
			style={{
				background: background || '',
			}}
		>
			{iconSrc && (
				<Icon
					src={iconSrc}
					color={iconColor || ''}
					className={styles['tagIcon']}
					onClick={onClickIcon}
					size={(iconSize as any) || '0.75rem'}
				/>
			)}

			{React.createElement(
				Text[textComponent as string],
				{
					color,
				} as any,
				children
			)}
		</div>
	);
};

Tag.defaultProps = {
	className: '',
	textComponent: 'S2',
	iconSize: '0.75rem',
};

export { Tag };
