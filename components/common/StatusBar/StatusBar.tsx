import React from 'react';
import classNames from 'classnames';

import { Text } from '@components';

import styles from './StatusBar.module.scss';

interface IProps {
	currentIndex: number;
	statuses: string[];
}

const StatusBar: React.FC<IProps> = (props) => {
	const { currentIndex, statuses } = props;

	return (
		<div
			className={classNames({
				[styles['statusBar']]: true,
			})}
		>
			<Text.S1 type='semibold'>{statuses?.[currentIndex]}</Text.S1>

			<div className={styles['statusBar-lines']}>
				{statuses?.map((e, i) => (
					<div
						className={classNames({
							[styles['statusBar-lines-line']]: true,
							[styles['statusBar-lines-line_greater']]: currentIndex >= i,
							[styles['statusBar-lines-line_selected']]: currentIndex === i,
						})}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

StatusBar.defaultProps = {
	currentIndex: 0,
};

export { StatusBar };
