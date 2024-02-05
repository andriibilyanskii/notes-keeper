import React, { useState } from 'react';
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

	return (
		<form
			className={classNames({
				[styles['categoryForm']]: true,
			})}
			onSubmit={async (e) => {
				e?.preventDefault();

				await fetchData(
					'/api/category/add-category',
					{
						authorizationUser: user,
						withHeaders: true,
						body: {
							title,
						},
					},
					{ setIsLoading: setShowLoader }
				)?.then((e) => {
					setCategories([...categories, e?.category]);
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
