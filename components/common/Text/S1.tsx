import React from 'react';
import classNames from 'classnames';

import { IText } from '@db/interfaces/componentInterfaces';

import styles from './Text.module.scss';

const S1: React.FC<IText> = (props) => {
	const { children, type, className, lineClamp, color, style, ...rest } = props;

	return React.createElement(
		'span',
		{
			...rest,
			className: classNames({
				[styles.textComponent]: true,
				[styles.s1]: true,
				[styles[`s1_${type}`]]: true,
				[className || '']: true,
				textComponent_lineClamp: lineClamp,
				[styles.textComponent_click]: props?.onClick,
			}),
			style: { ...style, color },
		},
		children
	);
};

S1.defaultProps = {
	type: 'regular',
	className: '',
};

export { S1 };
