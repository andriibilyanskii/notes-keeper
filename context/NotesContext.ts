import React from 'react';
import { INote, ICategory } from '@db/interfaces';

interface IContext {
	notes: INote[];
	setNotes: (note: INote[]) => void;
	categories: ICategory[];
	setCategories: (category: ICategory[]) => void;
	selectedCategory: string;
	setSelectedCategory: (categoryID: string) => void;
}

const notesContext: IContext = {
	notes: [] as INote[],
	setNotes: (note: INote[]) => {},
	categories: [] as ICategory[],
	setCategories: (category: ICategory[]) => {},
	selectedCategory: '',
	setSelectedCategory: (categoryID: string) => {},
};

const NotesContext = React.createContext(notesContext);

export { NotesContext };
