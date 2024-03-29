import React, { useState } from 'react';
import classNames from 'classnames';

import { INextImage } from '@componentInterfaces';

import styles from './Image.module.scss';

interface IProps {
	src: string | undefined;
	className?: string;
	classNameBlock?: string;
	imagePlaceholder?: string;
	isBlob?: boolean;
	nextImg?: INextImage;
	lazyLoad?: boolean;
}

const Image: React.FC<IProps> = (props) => {
	const { src, className, classNameBlock, imagePlaceholder, isBlob, nextImg, lazyLoad } = props;

	const [isError, setIsError] = useState(false);

	const src_image = !isError ? src : imagePlaceholder;

	const onError = () => {
		setIsError(true);
	};

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={src_image}
			className={classNames({
				[styles['image']]: true,
				[className || '']: !!className,
			})}
			alt=''
			onError={onError}
		/>
	);
};

Image.defaultProps = {
	imagePlaceholder: '/img/stif/eatwy_404.png',
	isBlob: false,
};

export { Image };
