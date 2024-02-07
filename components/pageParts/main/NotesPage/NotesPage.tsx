import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import {
	PageCover,
	Button,
	PrivateRoute,
	CategoryForm,
	FilterTagComponent,
	NoteCard,
	Text,
} from '@components';

import {
	fetchData,
	useAppContext,
	useNotesContext,
	usePopUpContext,
	useUserContext,
} from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

import styles from './NotesPage.module.scss';
import NoteForm from '../NoteForm/NoteForm';

const NotesPage: React.FC = () => {
	const { language } = useLanguage();

	const { notes, setNotes, categories, setCategories, selectedCategory, setSelectedCategory } =
		useNotesContext();
	const { setShowLoader } = useAppContext();
	const { user } = useUserContext();
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	const router = useRouter();

	useEffect(() => {
		fetchData(
			'/api/notes',
			{
				body: { selectedCategory },
				withHeaders: true,
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
	}, [selectedCategory, setCategories, setNotes, setShowLoader, user]);

	return (
		<PrivateRoute>
			<PageCover
				mainClassName={classNames({
					[styles['notesPage']]: true,
				})}
			>
				<div className={styles['notesPage-buttons']}>
					<Button
						icon={{
							src: CONSTANTS.ICONS.plus,
							position: 'left',
						}}
						buttonSize={'S'}
						onClick={() => {
							setIsOpenPopUp(true);
							setPopupChildren(<NoteForm />);
						}}
						disabled={categories?.length === 0}
						className={styles['notesPage-buttons-button']}
					>
						{language(LANGUAGES.NOTES.addNote)}
					</Button>

					<Button
						icon={{
							src: CONSTANTS.ICONS.plus,
							position: 'left',
						}}
						buttonSize={'S'}
						buttonType={'secondary'}
						onClick={() => {
							setIsOpenPopUp(true);
							setPopupChildren(<CategoryForm />);
						}}
						className={styles['notesPage-buttons-button']}
					>
						{language(LANGUAGES.CATEGORIES.addCategory)}
					</Button>
				</div>

				{categories?.length > 0 && (
					<div
						className={classNames({
							[styles['notesPage-categories']]: true,
						})}
					>
						<div className={styles['notesPage-categories-list']}>
							<FilterTagComponent
								id={'all'}
								text={language(LANGUAGES.all)}
								isSelected={selectedCategory === 'all'}
								onClick={(e) => {
									setSelectedCategory(e);
									router.push({ query: { category: e } });
								}}
							/>

							{categories?.map((e) => (
								<FilterTagComponent
									key={e?._id}
									text={e?.title}
									id={e?._id as string}
									isSelected={selectedCategory === e?._id}
									onClick={(e) => {
										setSelectedCategory(e);
										router.push({ query: { category: e } });
									}}
								/>
							))}
						</div>
					</div>
				)}

				{notes?.length > 0 && (
					<div className={styles['notesPage-notes-list']}>
						{notes?.map((e) => (
							<NoteCard key={e?._id} note={e} />
						))}
					</div>
				)}

				{notes?.length === 0 && (
					<Text.P1>{language(LANGUAGES.NOTES.noResults)}</Text.P1>
				)}
			</PageCover>
		</PrivateRoute>
	);
};

export default NotesPage;
