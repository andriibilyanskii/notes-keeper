import React from 'react';

import { Button, Icon, Link, Text } from '@components';

import { getColor, usePopUpContext } from '@shared';

import styles from './EatwyPopup.module.scss';

interface IProps {
	icon: string;
	text: {
		title: string;
		p2?: string;
	};
	button: {
		text: string;
		onClick?: (e) => void;
		linkTo?: string;
	};
}

const EatwyPopup: React.FC<IProps> = (props) => {
	const { icon, text, button } = props;

	const { setIsOpenPopUp } = usePopUpContext();

	const buttonElement = (
		<Button
			className={styles['eatwyPopup-button']}
			onClick={(e) => {
				setIsOpenPopUp(false);
				button?.onClick?.(e);
			}}
		>
			{button?.text}
		</Button>
	);

	return (
		<div className={styles['eatwyPopup']}>
			<div className={styles['eatwyPopup-icon']}>
				<Icon src={icon} color={getColor('primary-blue')} size='2.25rem' />
			</div>

			<Text.Title type='h3' className={styles['eatwyPopup-title']}>
				{text?.title}
			</Text.Title>

			{text?.p2 && <Text.P2 className={styles['eatwyPopup-text']}>{text?.p2}</Text.P2>}

			{button?.linkTo && (
				<Link to={button?.linkTo} className={styles['eatwyPopup-button_link']}>
					{buttonElement}
				</Link>
			)}

			{!button?.linkTo && buttonElement}
		</div>
	);
};

export { EatwyPopup };
