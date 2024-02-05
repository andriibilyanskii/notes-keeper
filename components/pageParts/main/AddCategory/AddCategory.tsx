import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Text, PageCover, Link, Button, IconContent, Icon, Input, Image } from '@components';

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

import styles from './AddCategory.module.scss';

const AddCategory: React.FC = () => {
	const { language } = useLanguage();

	const [title, setTitle] = useState('');

	const { user } = useUserContext();
	const { setShowLoader } = useAppContext();
	const { setIsOpenPopUp } = usePopUpContext();
	const { categories, setCategories } = useNotesContext();

	return (
		<form
			className={classNames({
				[styles['addCategory']]: true,
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
			/>

			<Button width100={true} type={'submit'} disabled={!title}>
				{language(LANGUAGES.CATEGORIES.addCategory)}
			</Button>
		</form>
	);
};

export default AddCategory;
