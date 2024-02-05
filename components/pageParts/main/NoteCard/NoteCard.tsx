import React, { useState } from 'react';
import classNames from 'classnames';

import { INote } from '@db/interfaces';

import { Button, Input, Text } from '@components';

import {
	fetchData,
	getColor,
	useAppContext,
	useNotesContext,
	usePopUpContext,
	useUserContext,
} from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';

import styles from './NoteCard.module.scss';

interface IProps {
	note: INote;
}

const NoteCard: React.FC<IProps> = ({ note }) => {
	const { language } = useLanguage();

	const { setIsOpenPopUp } = usePopUpContext();

	let description =
		note?.description?.length > 100
			? note?.description?.slice(0, 100) + '...'
			: note?.description;

	return (
		<div
			className={classNames({
				[styles['noteCard']]: true,
			})}
		>
			<Text.P1>{note?.title}</Text.P1>

			{note?.description && <Text.S1 color={getColor('gray-700')}>{description}</Text.S1>}
		</div>
	);
};

export default NoteCard;
