import React from 'react';
import { default as LinkNext } from 'next/link';

import styles from './Link.module.scss';
import classNames from 'classnames';

interface IProps {
	to: string;
	children?: React.ReactNode;
	className?: string;
	onClick?: (e: any) => void;
	target?: '_self' | '_blank' | '_parent' | '_top' | 'framename';
	isBlue?: boolean;
}

const Link: React.FC<IProps> = (props) => {
	const { children, className, to, onClick, target, isBlue } = props;

	let linkTo = to;

	if (!to?.includes('http') && to?.includes('@')) {
		linkTo = `mailto:${to}`;
	}

	return (
		<LinkNext href={linkTo} passHref shallow>
			<a
				className={classNames({
					[styles['link']]: true,
					[styles['link_blue']]: isBlue,
					[className || '']: !!className,
				})}
				onClick={onClick}
				target={to?.startsWith('http') && !target ? '_blank' : target}
			>
				{children}
			</a>
		</LinkNext>
	);
};

export { Link };
