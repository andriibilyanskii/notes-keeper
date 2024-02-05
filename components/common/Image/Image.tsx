import React, { useState } from 'react';
import { default as ImageNext } from 'next/image';
import classNames from 'classnames';

import { INextImage } from '@componentInterfaces';

import { LazyLoadImage } from '@components';

import { getImage } from '@shared';

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

	const src_image = !isError
		? isBlob
			? src
			: String(getImage([src || ''])) || imagePlaceholder
		: imagePlaceholder;

	const onError = () => {
		setIsError(true);
	};

	if (
		(!isBlob || src_image?.startsWith('https://in-phone.com/images/')) &&
		nextImg &&
		!lazyLoad
	) {
		return (
			<div
				className={classNames({
					[styles['imageNextBlock']]: true,
					[classNameBlock || '']: !!classNameBlock,
				})}
			>
				<ImageNext
					className={classNames({
						[styles['image']]: true,
						[className || '']: !!className,
					})}
					src={
						src_image?.startsWith('https://in-phone.com/images/')
							? (src_image as string)
							: (imagePlaceholder as string)
					}
					onError={onError}
					placeholder='blur'
					blurDataURL={src_image?.replace(
						'https://in-phone.com/images/',
						'https://in-phone.com/images/thumbs/'
					)}
					objectFit={nextImg?.objectFit || 'cover'}
					layout={!isError ? nextImg?.layout || 'responsive' : 'responsive'}
					{...(nextImg?.width ? { width: nextImg?.width } : {})}
					{...(nextImg?.height ? { height: nextImg?.height } : {})}
					priority={nextImg?.priority}
					sizes={nextImg?.sizes}
				/>
			</div>
		);
	}

	if (lazyLoad) {
		return (
			<LazyLoadImage
				src={src || ''}
				className={classNames({
					[styles['image']]: true,
					[className || '']: !!className,
				})}
			/>
		);
	}

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
