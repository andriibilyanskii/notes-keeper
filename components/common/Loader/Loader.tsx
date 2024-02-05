/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classNames from 'classnames';

import { useAppContext } from '@shared';

import styles from './Loader.module.scss';

interface IProps {
	manualShow?: boolean;
}

export const Loader: React.FC<IProps> = ({ manualShow }) => {
	const { showLoader } = useAppContext();

	return (
		<div
			className={classNames({
				[styles['loader']]: true,
				[styles['loader_show']]: showLoader || manualShow,
			})}
			style={{
				backgroundImage: `url(/img/clouds-bg-transparent.svg)`,
			}}
		>
			<div className={styles['loader-container']}>
				<div className={styles['loader-spin']} />
				<div className={styles['loader-logo']}>
					<img src='/eatwy_logo.svg' alt='' />
				</div>
			</div>
		</div>
	);
};
