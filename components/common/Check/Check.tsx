import React from 'react';
import classNames from 'classnames';

import { Icon } from '@components';

import { CONSTANTS } from '@constants';
import { getColor } from '@shared';

import styles from './Check.module.scss';

interface IProps {
	isChecked: boolean;
	setIsChecked?: (e: boolean) => void;
	className?: string;
	text?: React.ReactNode;
	reversed?: boolean;
	disabled?: boolean;
}

const Check: React.FC<IProps> = (props) => {
	const { isChecked, setIsChecked, className, text, reversed, disabled } = props;

	return (
		<label
			className={classNames({
				[styles['checkbox']]: true,
				[styles['checkbox_reversed']]: reversed,
				[styles['checkbox_disabled']]: disabled,
				[className || '']: !!className,
			})}
		>
			<div
				className={classNames({
					[styles['check']]: true,
					[styles['check_checked']]: isChecked,
				})}
			>
				<Icon src={CONSTANTS.ICONS.check} color={getColor('primary-white')} />
			</div>

			<input
				type={'checkbox'}
				checked={isChecked}
				onChange={(e) => setIsChecked?.(e?.target?.checked)}
			/>

			{text}
		</label>
	);
};

export { Check };
