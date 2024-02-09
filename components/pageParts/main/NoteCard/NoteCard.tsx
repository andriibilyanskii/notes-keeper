import React from 'react';
import classNames from 'classnames';

import { INote } from '@db/interfaces';

import { Text } from '@components';
import NoteInfo from '../NoteInfo/NoteInfo';

import { getColor, usePopUpContext } from '@shared';

import styles from './NoteCard.module.scss';

interface IProps {
	note: INote;
}

const NoteCard: React.FC<IProps> = ({ note }) => {
	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();

	let description =
		note?.description?.length > 100
			? note?.description?.slice(0, 100) + '...'
			: note?.description;

	return (
		<div
			className={classNames({
				[styles['noteCard']]: true,
			})}
			onClick={() => {
				setIsOpenPopUp(true);
				setPopupChildren(<NoteInfo note={note} />);
			}}
		>
			<Text.P1>{note?.title}</Text.P1>

			{note?.description && <Text.S1 color={getColor('gray-700')}>{description}</Text.S1>}
		</div>
	);
};

export default NoteCard;
