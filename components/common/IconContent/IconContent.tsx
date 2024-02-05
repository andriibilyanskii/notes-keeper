import React from 'react';
import classNames from 'classnames';

import styles from './IconContent.module.scss';

interface IProps {
	className?: string;
	icon: React.ReactNode;
	content: React.ReactNode;
	onClick?: (e: any) => void;
	gap?: string;
	align?: 'flex-start' | 'center' | 'flex-end';
	reversed?: boolean;
	disabled?: boolean;
}

const IconContent: React.FC<IProps> = (props) => {
	const { className, icon, content, onClick, reversed, align, gap, disabled } = props;

	return (
		<div
			className={classNames({
				[styles['iconText']]: true,
				[styles['iconText_reversed']]: reversed,
				[styles['iconText_disabled']]: disabled,
				[styles['iconText_clickable']]: !!onClick,
				[className || '']: !!className,
			})}
			style={{ gap: gap, alignItems: align }}
			{...(!disabled ? { onClick } : {})}
		>
			{!reversed ? (
				<>
					{icon}
					{content}
				</>
			) : (
				<>
					{content}
					{icon}
				</>
			)}
		</div>
	);
};

IconContent.defaultProps = {
	gap: '4px',
	align: 'center',
	reversed: false,
};

export { IconContent };
