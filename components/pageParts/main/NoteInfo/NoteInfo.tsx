import React, { useState } from 'react';
import classNames from 'classnames';

import { INote } from '@db/interfaces';

import { Button, Icon, IconContent, Input, Text } from '@components';

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
import { CONSTANTS } from '@constants';
import NoteForm from '../NoteForm/NoteForm';

interface IProps {
	note: INote;
}

const NoteInfo: React.FC<IProps> = ({ note }) => {
	const { language } = useLanguage();

	const { categories, notes, setNotes } = useNotesContext();
	const { user } = useUserContext();
	const { setShowLoader } = useAppContext();
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

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

			<div className={styles['noteInfo-buttons']}>
				<IconContent
					content={
						<Text.P2 color={getColor('primary-blue')}>
							{language(LANGUAGES.edit)}
						</Text.P2>
					}
					icon={
						<Icon
							src={CONSTANTS.ICONS.edit}
							size={'1.25rem'}
							color={getColor('primary-blue')}
						/>
					}
					onClick={() => {
						setPopupChildren(<NoteForm noteID={note?._id} />);
					}}
				/>

				<IconContent
					content={
						<Text.P2 color={getColor('red-100')}>
							{language(LANGUAGES.delete)}
						</Text.P2>
					}
					icon={
						<Icon
							src={CONSTANTS.ICONS.trash}
							size={'1.25rem'}
							color={getColor('red-100')}
						/>
					}
					onClick={() => {
						if (window.confirm(language(LANGUAGES.NOTES.deleteNote) + '?')) {
							fetchData(
								'/api/notes/delete-note',
								{
									body: { noteID: note?._id },
									withHeaders: true,
									authorizationUser: user,
								},
								{ setIsLoading: setShowLoader }
							).then(() => {
								setNotes(notes?.filter((n) => n?._id !== note?._id));
								setIsOpenPopUp(false);
							});
						}
					}}
				/>
			</div>
		</div>
	);
};

export default NoteInfo;
