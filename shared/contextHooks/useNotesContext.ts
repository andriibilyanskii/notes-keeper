import { useContext } from 'react';

import { NotesContext } from '@context';

function useNotesContext() {
	const context = useContext(NotesContext);

	return context;
}

export { useNotesContext };
