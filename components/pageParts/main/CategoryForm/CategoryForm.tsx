import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Button, Input } from '@components';

import {
	fetchData,
	useAppContext,
	useNotesContext,
	usePopUpContext,
	useUserContext,
} from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';

import styles from './CategoryForm.module.scss';

interface IProps {
	categoryID?: string;
}

const CategoryForm: React.FC<IProps> = ({ categoryID }) => {
	const { language } = useLanguage();

	const [title, setTitle] = useState('');

	const { user } = useUserContext();
	const { setShowLoader } = useAppContext();
	const { setIsOpenPopUp } = usePopUpContext();
	const { categories, setCategories } = useNotesContext();

	useEffect(() => {
		if (categoryID) {
			const category = categories?.find((e) => e?._id === categoryID);

			if (category?._id) {
				setTitle(category?.title);
			}
		}
	}, [categoryID, categories]);

	return (
		<form
			className={classNames({
				[styles['categoryForm']]: true,
			})}
			onSubmit={async (e) => {
				e?.preventDefault();

				await fetchData(
					`/api/category/${categoryID ? 'edit' : 'add'}-category`,
					{
						authorizationUser: user,
						withHeaders: true,
						body: {
							title,
							...(categoryID ? { _id: categoryID } : {}),
						},
					},
					{ setIsLoading: setShowLoader }
				)?.then((e) => {
					if (categoryID) {
						setCategories(
							categories?.map((c) => {
								if (c?._id === categoryID) {
									return e?.category;
								}

								return c;
							})
						);
					} else {
						setCategories([...categories, e?.category]);
					}
				});

				setTitle('');
				setIsOpenPopUp(false);
			}}
		>
			<Input
				onChange={setTitle}
				value={title}
				placeholder={language(LANGUAGES.CATEGORIES.enterCategoryTitle)}
				autoFocus={true}
				required={true}
			/>

			<Button width100={true} type={'submit'} disabled={!title}>
				{language(LANGUAGES.CATEGORIES.addCategory)}
			</Button>
		</form>
	);
};

export default CategoryForm;
