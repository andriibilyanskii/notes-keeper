import React, { useCallback } from 'react';
import Sheet from 'react-modal-sheet';
import classNames from 'classnames';

import { usePopUpContext } from '@shared';

import styles from './PopUp.module.scss';

export const PopUp: React.FC = () => {
	const {
		isOpenPopUp,
		popupChildren,
		popupHeader,
		popupClassName,
		setIsOpenPopUp,
		setPopupChildren,
		setPopupHeader,
		setPopupClassName,
		onClosePopup,
		setOnClosePopup,
	} = usePopUpContext();

	const onClose = useCallback(() => {
		setIsOpenPopUp(false);
		setPopupChildren(<></>);
		setPopupHeader(<></>);
		setPopupClassName('');
		onClosePopup?.();
		setOnClosePopup(() => {});
	}, [
		onClosePopup,
		setIsOpenPopUp,
		setOnClosePopup,
		setPopupChildren,
		setPopupClassName,
		setPopupHeader,
	]);

	return (
		<Sheet
			isOpen={isOpenPopUp}
			onClose={() => {
				onClose();
			}}
			detent='content-height'
			onClick={(e) => e.stopPropagation()}
			className={classNames({
				[styles['popup']]: true,
				[styles['popup-' + popupClassName + '_popup']]: !!popupClassName,
			})}
		>
			<Sheet.Container
				style={{
					borderRadius: '1rem 1rem 0px 0px',
				}}
			>
				<Sheet.Header
					className={styles['popup-header']}
					onTap={() => {
						// setOpenPopUp(false);
					}}
				>
					{popupHeader}
				</Sheet.Header>
				<Sheet.Content disableDrag>
					<div
						className={classNames({
							[styles['popup-' + popupClassName] as string]: !!popupClassName,
						})}
					>
						{popupChildren}
					</div>
				</Sheet.Content>
			</Sheet.Container>

			<Sheet.Backdrop
				onTap={(e) => {
					e.stopPropagation();
					onClose();
				}}
			/>
		</Sheet>
	);
};
