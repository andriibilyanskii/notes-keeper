/* eslint-disable @next/next/no-img-element */
import React, { useState, CSSProperties, useEffect } from 'react';
import classNames from 'classnames';

import { CONSTANTS } from '../../../constants';

import styles from './LazyLoadImage.module.scss';

interface IProps {
	src: string;
	imageType?: string;
	className?: string;
	isAbsolute?: boolean;
	style?: CSSProperties;
	round?: boolean;
}

export const LazyLoadImage: React.FC<IProps> = (props) => {
	const { className, imageType, isAbsolute, style, round } = props;

	const src = props.src?.replace(CONSTANTS.IN_PHONE_BACKEND_URL_FOR_IMAGES, '');

	let normal = src;
	let placeholder = src;

	if (src && !src?.startsWith('http') && !src?.startsWith('data:image/')) {
		normal = CONSTANTS.IN_PHONE_BACKEND_URL_FOR_IMAGES + src;
		placeholder = CONSTANTS.IN_PHONE_BACKEND_URL_FOR_IMAGES + 'thumbs/' + src;
	}

	const [loadedSrc, setLoadedSrc] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log(loadedSrc === normal, loadedSrc, normal);
	}, [loadedSrc, normal]);

	return (
		<div
			className={classNames({
				[styles.lazyLoadImage]: true,
				[styles.lazyLoadImage_absolute]: isAbsolute,
				[styles.lazyLoadImage_contain]: imageType === 'contain',
				[className || '']: !!className,
			})}
			style={style}
		>
			{!error && (
				<>
					{loadedSrc !== normal && (
						<div className={styles.placeholderBlock}>
							<img
								src={placeholder}
								alt=''
								style={style}
								className={classNames({ [styles.round]: round })}
							/>
						</div>
					)}
					<img
						src={normal}
						alt=''
						onLoad={() => {
							setLoadedSrc(normal);
						}}
						onError={() => {
							setError(true);
						}}
						style={{
							opacity: loadedSrc === normal ? '1' : '0',
							...style,
						}}
						className={classNames({ [styles.round]: round })}
					/>
				</>
			)}
		</div>
	);
};

LazyLoadImage.defaultProps = {
	isAbsolute: false,
	round: true,
};
