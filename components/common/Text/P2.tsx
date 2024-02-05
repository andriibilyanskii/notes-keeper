import React from 'react';
import classNames from 'classnames';

import { IText } from '@db/interfaces/componentInterfaces';

import styles from './Text.module.scss';

const P2: React.FC<IText> = (props) => {
	const { children, type, className, lineClamp, color, style, ...rest } = props;

	return React.createElement(
		'p',
		{
			...rest,
			className: classNames({
				[styles.textComponent]: true,
				[styles.p2]: true,
				[styles[`p2_${type}`]]: true,
				[className || '']: true,
				textComponent_lineClamp: lineClamp,
				[styles.textComponent_click]: props?.onClick,
			}),
			style: { ...style, color },
		},
		children
	);
};

P2.defaultProps = {
	type: 'regular',
	className: '',
};

export { P2 };
