import React, { CSSProperties } from 'react';

import styles from './Text.module.scss';

interface IProps {
	children: React.ReactNode;
	className?: string;
	style?: CSSProperties;
}

const TextHeader: React.FC<IProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<h1
			className={`${styles['textComponent']} ${styles['textHeader']} ${className}`}
			{...rest}
		>
			{children}
		</h1>
	);
};

TextHeader.defaultProps = {
	className: '',
};

export { TextHeader };
