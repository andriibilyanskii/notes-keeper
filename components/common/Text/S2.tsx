import React from 'react';
import classNames from 'classnames';

import { IText } from '@db/interfaces/componentInterfaces';

import styles from './Text.module.scss';

const S2: React.FC<IText> = (props) => {
	const { children, type, className, lineClamp, color, style, ...rest } = props;

	return React.createElement(
		'span',
		{
			...rest,
			className: classNames({
				[styles.textComponent]: true,
				[styles.s2]: true,
				[styles[`s2_${type}`]]: true,
				[className || '']: true,
				textComponent_lineClamp: lineClamp,
				[styles.textComponent_click]: props?.onClick,
			}),
			style: { ...style, color },
		},
		children
	);
};

S2.defaultProps = {
	type: 'regular',
	className: '',
};

export { S2 };
