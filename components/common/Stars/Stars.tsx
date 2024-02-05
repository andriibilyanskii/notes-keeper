import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Icon, Text } from '@components';

import { CONSTANTS } from '@constants';

import { getColor } from '@shared';

import styles from './Stars.module.scss';

interface IProps {
	onChange?: (e: number) => void;
	className?: string;
	isEditable?: boolean;
	value?: number;
	starsCount: number;
	text?: string[];
}

const Stars: React.FC<IProps> = (props) => {
	const { onChange, className, isEditable, value, starsCount } = props;

	const getSize = () => {
		if (typeof window !== 'undefined') {
			const width = window.innerWidth;

			if (width < 290) {
				return '1.25rem';
			} else if (width < 330) {
				return '1.5rem';
			} else if (width < 380) {
				return '1.75rem';
			} else if (width < 460) {
				return '2rem';
			} else {
				return '2.5rem';
			}
		} else {
			return '2.5rem';
		}
	};

	const [hover, setHover] = useState(0);
	const [size, setSize] = useState(getSize());

	const handleResize = () => {
		setSize(getSize());
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize, false);

		return () => window.removeEventListener('resize', handleResize, false);
	}, []);

	return (
		<div
			className={classNames({
				[styles['starsComponent']]: true,
				[className || '']: !!className,
			})}
		>
			{[...Array(+starsCount || 5)].map((star, index) => {
				index += 1;

				return (
					<div
						key={index}
						className={classNames({
							[styles['starsComponent-block']]: true,
						})}
					>
						<Icon
							src={
								index <= (hover || value || 0)
									? CONSTANTS.ICONS.starFill
									: CONSTANTS.ICONS.star
							}
							className={classNames({
								[styles['starsComponent-block-icon']]: true,
							})}
							color={getColor('yellow-100')}
							size={size as any}
							onClick={() => {
								if (isEditable) {
									onChange?.(index);
								}
							}}
							onMouseEnter={() => {
								if (isEditable) {
									setHover(index);
								}
							}}
							onMouseLeave={() => {
								if (isEditable) {
									setHover(value || 0);
								}
							}}
						/>

						<Text.S1 type='medium'>{index}</Text.S1>
					</div>
				);
			})}
		</div>
	);
};

Stars.defaultProps = {
	className: '',
	isEditable: true,
	value: 0,
};

export { Stars };
