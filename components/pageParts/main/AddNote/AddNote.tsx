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
	FilterTagComponent,
} from '@components';

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

import styles from './AddNote.module.scss';

const AddNote: React.FC = () => {
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

	return (
		<form
			className={classNames({
				[styles['addNote']]: true,
			})}
			onSubmit={async (e) => {
				e?.preventDefault();

				await fetchData(
					'/api/notes/add-note',
					{
						authorizationUser: user,
						withHeaders: true,
						body: {
							title,
							description,
							categoryID,
						},
					},
					{ setIsLoading: setShowLoader }
				)?.then((e) => {
					setNotes([...notes, e?.note]);
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
					[styles['addNote-categories']]: true,
				})}
			>
				<div className={styles['addNote-categories-list']}>
					{categories?.map((e) => (
						<FilterTagComponent
							key={e?._id}
							text={e?.title}
							id={e?._id as string}
							isSelected={categoryID === e?._id}
							onClick={setCategoryID}
						/>
					))}
				</div>
			</div>

			<Button width100={true} type={'submit'} disabled={!title}>
				{language(LANGUAGES.NOTES.addNote)}
			</Button>
		</form>
	);
};

export default AddNote;
