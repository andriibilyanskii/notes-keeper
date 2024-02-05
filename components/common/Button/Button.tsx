import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import { Icon, Link } from '@components';

import styles from './Button.module.scss';

interface IProps {
	children?: React.ReactNode;
	onClick?: (e: any) => void;
	onDoubleClick?: (e: any) => void;
	className?: string;
	linkClassName?: string;
	type?: 'button' | 'submit';
	buttonType?: 'primary' | 'secondary' | 'tertiary' | 'nav' | 'tag';
	buttonSize?: 'L' | 'M' | 'S' | 'XS' | 'XXS' | 'XXXS';
	disabled?: boolean;
	icon?: {
		src: string;
		position?: 'left' | 'right';
		onlyIcon?: boolean;
		initialColor?: boolean;
		color?: string;
		iconSize?: string;
	};
	style?: CSSProperties;
	linkTo?: string;
	width100?: boolean;
	target?: '_self' | '_blank';
}

const Button: React.FC<IProps> = (props) => {
	const {
		children,
		className,
		linkClassName,
		icon,
		buttonType,
		buttonSize,
		linkTo,
		width100,
		target,
		...rest
	} = props;

	const button = (
		<button
			className={classNames({
				[styles['button']]: true,
				[styles[`button_${buttonType}`]]: true,
				[styles['button-icon']]: !!icon?.src,
				[styles['button-icon_right']]: icon?.position === 'right',
				[styles['button-icon_left']]: icon?.position === 'left',
				[styles['button-icon_onlyIcon']]: !!icon?.onlyIcon,
				[styles[`button_${buttonSize}`]]: true,
				[styles[`button-icon_right_${buttonSize}`]]: icon?.position === 'right',
				[styles[`button-icon_left_${buttonSize}`]]: icon?.position === 'left',
				[styles[`button-icon_onlyIcon_${buttonSize}`]]: !!icon?.onlyIcon,
				[styles[`button-icon_nav`]]: buttonType === 'nav',
				[styles[`button_width100`]]: width100,
				[className || '']: !!className,
			})}
			{...rest}
		>
			{children}

			{icon?.src && icon?.initialColor && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					alt=''
					src={icon?.src}
					className={classNames({
						[styles['buttonIcon']]: true,
						[styles['buttonIcon_initialColor']]: true,
					})}
				/>
			)}

			{icon?.src && !icon?.initialColor && (
				<Icon
					src={icon?.src}
					className={styles['buttonIcon']}
					color={icon?.color}
					size={icon?.iconSize as any}
				/>
			)}
		</button>
	);

	if (linkTo) {
		return (
			<Link to={linkTo} className={linkClassName} target={target}>
				{button}
			</Link>
		);
	}

	return button;
};

Button.defaultProps = {
	disabled: false,
	type: 'button',
	buttonType: 'primary',
	buttonSize: 'L',
	icon: {
		src: '',
		onlyIcon: false,
		initialColor: false,
		color: '',
	},
	linkTo: '',
};

export { Button };
