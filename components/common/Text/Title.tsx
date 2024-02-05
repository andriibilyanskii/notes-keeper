import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

interface IProps {
	children: React.ReactNode;
	type: 'h1' | 'h2' | 'h3' | 'h4';
	className?: string;
	style?: CSSProperties;
	onClick?: (e) => void;
}

const Title: React.FC<IProps> = (props) => {
	const { children, type, className, ...rest } = props;

	return React.createElement(
		type,
		{
			...rest,
			className: classNames({
				[styles.textComponent]: true,
				[styles.title]: true,
				[styles[`title-${type}`]]: true,
				[styles.textComponent_click]: props?.onClick,
				[className || '']: true,
			}),
		},
		children
	);
};

Title.defaultProps = {
	className: '',
};

export { Title };
