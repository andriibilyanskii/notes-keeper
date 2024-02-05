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
	Tag,
	FilterTagComponent,
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

	const { notes, setNotes, categories, setCategories, selectedCategory, setSelectedCategory } =
		useNotesContext();
	const { setShowLoader } = useAppContext();
	const { user } = useUserContext();
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	const router = useRouter();

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
			</PageCover>
		</PrivateRoute>
	);
};

export default NotesPage;
