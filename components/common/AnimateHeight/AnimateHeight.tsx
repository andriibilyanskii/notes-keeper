import React from 'react';
import classNames from 'classnames';
import { default as AnimateHeightReact } from 'react-animate-height';

interface IProps {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}

export const AnimateHeight: React.FC<IProps> = (props) => {
	const { isOpen, children, className } = props;

	return (
		<AnimateHeightReact
			duration={250}
			height={isOpen ? 'auto' : 0}
			className={classNames({ [className || '']: !!className })}
		>
			{children}
		</AnimateHeightReact>
	);
};

AnimateHeight.defaultProps = {
	className: '',
};
