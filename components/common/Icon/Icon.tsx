import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IProps {
	src: string;
	color?: string;
	size?:
		| '0.75rem'
		| '15px'
		| '1rem'
		| '1.25rem'
		| '1.5rem'
		| '2rem'
		| '2.25rem'
		| '2.5rem'
		| '4rem'
		| '8rem'
		| '12rem';
	className?: string;
	isColorful?: boolean;
	onClick?: (e) => void;
	onMouseEnter?: (e) => void;
	onMouseLeave?: (e) => void;
	padding?: string;
	style?: CSSProperties;
}

const Icon: React.FC<IProps> = (props) => {
	const { src, color, size, padding, isColorful, className, style, ...rest } = props;

	if (!isColorful) {
		return (
			<div
				className={classNames({
					[styles['icon']]: true,
					[className || '']: !!className,
				})}
				style={{
					mask: `url(${src}) no-repeat center / contain`,
					WebkitMask: `url(${src}) no-repeat center / contain`,
					backgroundColor: color || '',
					width: size || '',
					height: size || '',
					cursor: props?.onClick ? 'pointer' : 'initial',
					padding,
					...style,
				}}
				{...rest}
			/>
		);
	}

	return (
		<img
			src={src}
			className={classNames({
				[styles['icon']]: true,
				[styles['icon_colorful']]: true,
				[className || '']: !!className,
			})}
			style={{
				width: size || '',
				height: size || '',
				padding,
			}}
		/>
	);
};

Icon.defaultProps = {
	className: '',
	isColorful: false,
	padding: '0rem',
};

export { Icon };
