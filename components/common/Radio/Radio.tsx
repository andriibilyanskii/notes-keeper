import React from 'react';
import classNames from 'classnames';

import styles from './Radio.module.scss';

interface IProps {
	isSelected: boolean;
	className?: string;
}

const Radio: React.FC<IProps> = (props) => {
	const { isSelected, className } = props;

	return (
		<div
			className={classNames({
				[styles['radio']]: true,
				[styles['radio_selected']]: isSelected,
				[className || '']: !!className,
			})}
		/>
	);
};

export { Radio };
