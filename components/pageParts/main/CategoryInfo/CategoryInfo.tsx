import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';


import { Icon, IconContent, Text } from '@components';
import CategoryForm from '../CategoryForm/CategoryForm';

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

import styles from './CategoryInfo.module.scss';

interface IProps {
	categoryID: string;
}

const CategoryInfo: React.FC<IProps> = ({ categoryID }) => {
	const { language } = useLanguage();

	const { categories, setCategories, notes, setNotes, setSelectedCategory } = useNotesContext();
	const { user } = useUserContext();
	const { setShowLoader } = useAppContext();
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	const category = categories?.find((e) => e?._id === categoryID);

	const router = useRouter();

	return (
		<div
			className={classNames({
				[styles['categoryInfo']]: true,
			})}
		>
			<Text.Title type={'h3'}>
				{language(LANGUAGES.NOTES.category)}: {category?.title}
			</Text.Title>

			<div className={styles['categoryInfo-buttons']}>
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
						setPopupChildren(<CategoryForm categoryID={category?._id} />);
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
						if (
							window.confirm(
								language(LANGUAGES.CATEGORIES.deleteCategory) + '?'
							)
						) {
							fetchData(
								'/api/category/delete-category',
								{
									body: { categoryID: category?._id },
									withHeaders: true,
									authorizationUser: user,
								},
								{ setIsLoading: setShowLoader }
							).then(() => {
								setCategories(
									categories?.filter((c) => c?._id !== category?._id)
								);
								setNotes(
									notes?.filter((n) => n?.categoryID !== category?._id)
								);
								setSelectedCategory('all');
								router.push({ query: { category: 'all' } });
								setIsOpenPopUp(false);
							});
						}
					}}
				/>
			</div>
		</div>
	);
};

export default CategoryInfo;
