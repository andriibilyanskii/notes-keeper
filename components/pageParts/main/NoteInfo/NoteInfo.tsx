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

import styles from './NoteInfo.module.scss';

interface IProps {
	note: INote;
}

const NoteInfo: React.FC<IProps> = ({ note }) => {
	const { language } = useLanguage();

	const { categories } = useNotesContext();

	return (
		<div
			className={classNames({
				[styles['noteInfo']]: true,
			})}
		>
			<Text.Title type={'h3'}>{note?.title}</Text.Title>

			{note?.description && <Text.P1>{note?.description}</Text.P1>}

			<Text.P2>
				{language(LANGUAGES.NOTES.category)}:{' '}
				{categories?.find((e) => e?._id === note?.categoryID)?.title}
			</Text.P2>
		</div>
	);
};

export default NoteInfo;
