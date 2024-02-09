import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Button, Input, FilterTagComponent } from '@components';

import {
	fetchData,
	useAppContext,
	useNotesContext,
	usePopUpContext,
	useUserContext,
} from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';

import styles from './NoteForm.module.scss';

interface IProps {
	noteID?: string;
}

const NoteForm: React.FC<IProps> = ({ noteID }) => {
	const { language } = useLanguage();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [categoryID, setCategoryID] = useState('');

	const { user } = useUserContext();
	const { setShowLoader } = useAppContext();
	const { setIsOpenPopUp } = usePopUpContext();
	const { notes, setNotes, categories, setSelectedCategory, selectedCategory } =
		useNotesContext();

	useEffect(() => {
		if (selectedCategory) {
			setCategoryID(selectedCategory);
		}
	}, [selectedCategory]);

	useEffect(() => {
		if (noteID) {
			const note = notes?.find((e) => e?._id === noteID);

			if (note?._id) {
				setTitle(note?.title);
				setDescription(note?.description);
				setCategoryID(note?.categoryID);
			}
		}
	}, [noteID, notes]);

	return (
		<form
			className={classNames({
				[styles['noteForm']]: true,
			})}
			onSubmit={async (e) => {
				e?.preventDefault();

				await fetchData(
					`/api/notes/${noteID ? 'edit' : 'add'}-note`,
					{
						authorizationUser: user,
						withHeaders: true,
						body: {
							title,
							description,
							categoryID,
							...(noteID ? { _id: noteID } : {}),
						},
					},
					{ setIsLoading: setShowLoader }
				)?.then((e) => {
					if (selectedCategory === categoryID || selectedCategory === 'all') {
						if (noteID) {
							setNotes(
								notes?.map((n) => {
									if (n?._id === noteID) {
										return e?.note;
									}

									return n;
								})
							);
						} else {
							setNotes([...notes, e?.note]);
						}
					} else {
						if (noteID) {
							setNotes(
								notes?.filter((n) => {
									return n?._id !== noteID;
								})
							);
						}
					}
				});

				setTitle('');
				setIsOpenPopUp(false);
			}}
		>
			<Input
				onChange={setTitle}
				value={title}
				placeholder={language(LANGUAGES.NOTES.enterTitle)}
				autoFocus={true}
				required={true}
			/>

			<Input
				onChange={setDescription}
				value={description}
				placeholder={language(LANGUAGES.NOTES.enterDescription)}
				inputType={'textarea'}
			/>

			<div
				className={classNames({
					[styles['noteForm-categories']]: true,
				})}
			>
				<div className={styles['noteForm-categories-list']}>
					{categories?.map((e) => (
						<FilterTagComponent
							key={e?._id}
							text={e?.title}
							id={e?._id as string}
							isSelected={categoryID === e?._id}
							onClick={setCategoryID}
							toNotEdit={true}
						/>
					))}
				</div>
			</div>

			<Button
				width100={true}
				type={'submit'}
				disabled={!title || !categoryID || categoryID === 'all'}
			>
				{noteID
					? language(LANGUAGES.NOTES.editNote)
					: language(LANGUAGES.NOTES.addNote)}
			</Button>
		</form>
	);
};

export default NoteForm;
