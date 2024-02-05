import React from 'react';
import classNames from 'classnames';

import { Button, Text } from '@components';

import { CONSTANTS } from '@constants';

import { usePopUpContext } from '@shared';

import styles from './PopupHeader.module.scss';

interface IProps {
	title: string;
	buttonBack?: boolean;
	withBorder?: boolean;
}

export const PopupHeader: React.FC<IProps> = (props) => {
	const { title, buttonBack, withBorder } = props;

	const { setIsOpenPopUp } = usePopUpContext();

	return (
		<div
			className={classNames({
				[styles['popupHeader']]: true,
				[styles['popupHeader_withButton']]: buttonBack,
				[styles['popupHeader_withBorder']]: withBorder,
			})}
		>
			{buttonBack && (
				<Button
					icon={{ src: CONSTANTS.ICONS.navArrowLeft, onlyIcon: true }}
					buttonType='nav'
					buttonSize='XS'
					onClick={() => {
						setIsOpenPopUp(false);
					}}
					className={styles['backButton']}
				/>
			)}

			<Text.P2 type={'semibold'} className={styles['popupHeader-text']}>
				{title}
			</Text.P2>
		</div>
	);
};
