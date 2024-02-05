import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import {
	Text,
	PageCover,
	Link,
	Button,
	IconContent,
	Icon,
	Input,
	Image,
	PrivateRoute,
	AddCategory,
} from '@components';

import { ICategory, INote } from '@db/interfaces';

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
import { CONSTANTS } from '@constants';

import styles from './NotesPage.module.scss';

const NotesPage: React.FC = () => {
	const { language } = useLanguage();

	const { notes, setNotes, categories, setCategories } = useNotesContext();
	const { setShowLoader } = useAppContext();
	const { user } = useUserContext();
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	useEffect(() => {
		if (notes?.length === 0 || categories?.length === 0) {
			fetchData(
				'/api/notes',
				{
					authorizationUser: user,
				},
				{ setIsLoading: setShowLoader }
			).then((e) => {
				if (Array.isArray(e?.notes)) {
					setNotes(e?.notes);
				}

				if (Array.isArray(e?.categories)) {
					setCategories(e?.categories);
				}
			});
		}
	}, [categories?.length, notes?.length, setShowLoader, user]);

	return (
		<PrivateRoute>
			<PageCover
				mainClassName={classNames({
					[styles['notesPage']]: true,
				})}
			>
				<div
					className={classNames({
						[styles['notesPage-categories']]: true,
					})}
				>
					{/*<Text.Title type={'h3'}>
						{language(LANGUAGES.NOTES.notesCount)}: {notes?.length}
					</Text.Title>*/}
					<Button
						icon={{
							src: CONSTANTS.ICONS.plus,
							position: 'left',
						}}
						buttonSize={'S'}
						onClick={() => {
							setIsOpenPopUp(true);
							setPopupChildren(<AddCategory />);
						}}
					>
						{language(LANGUAGES.CATEGORIES.addCategory)}
					</Button>
				</div>
				<pre>{JSON.stringify(categories, null, 5)}</pre>
			</PageCover>
		</PrivateRoute>
	);
};

export default NotesPage;
