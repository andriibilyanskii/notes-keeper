import React from 'react';
import classNames from 'classnames';

import { Text } from '@components';

import styles from './Banner.module.scss';

interface IProps {
	title: string;
	text?: string;
	buttons: Array<{
		text: string;
		onClick: (e) => void;
	}>;
	className?: string;
}

const Banner: React.FC<IProps> = (props) => {
	const { title, text, buttons, className } = props;

	return (
		<div
			className={classNames({
				[styles['banner']]: true,
				[className || '']: !!className,
			})}
		>
			<Text.Title className={styles['banner-title']} type={'h4'}>
				{title}
			</Text.Title>
			{text && (
				<Text.P2 className={styles['banner-text']} type={'medium'}>
					{text}
				</Text.P2>
			)}
			<div className={styles['banner-buttons']}>
				{buttons?.map((e, index) => (
					<Text.S1
						key={index}
						type={'semibold'}
						className={styles['banner-buttons-button']}
						onClick={e?.onClick}
					>
						{e?.text}
					</Text.S1>
				))}
			</div>
		</div>
	);
};

export default Banner;
