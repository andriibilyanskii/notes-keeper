import React from 'react';
import classNames from 'classnames';

import { Icon, Radio, Text } from '@components';

import { getColor } from '@shared';

import styles from './SelectCard.module.scss';

interface IProps {
	iconSrc: string;
	title: string;
	text: string;
	isSelected: boolean;
	onClick: (e: any) => void;
}

const SelectCard: React.FC<IProps> = (props) => {
	const { iconSrc, title, text, isSelected, onClick } = props;

	return (
		<div
			className={classNames({
				[styles['selectCard']]: true,
				[styles['selectCard_selected']]: isSelected,
			})}
			onClick={onClick}
		>
			<div className={styles['selectCard-top']}>
				<div className={styles['selectCard-top-icon']}>
					<Icon src={iconSrc} color={getColor('primary-blue')} size='1.5rem' />
				</div>

				<Radio isSelected={isSelected} />
			</div>

			<div className={styles['selectCard-bottom']}>
				<Text.Title type={'h4'}>{title}</Text.Title>
				<Text.P2 className={styles['selectCard-bottom-text']}>{text}</Text.P2>
			</div>
		</div>
	);
};

export { SelectCard };
