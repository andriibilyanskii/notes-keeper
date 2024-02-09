import dynamic from 'next/dynamic';

export * as Text from './common/Text';
export { Button } from './common/Button/Button';
export { Image } from './common/Image/Image';
export { Icon } from './common/Icon/Icon';
export { Input } from './common/Input/Input';
export { Tag } from './common/Tag/Tag';
export { Link } from './common/Link/Link';
export { PhoneInput } from './common/PhoneInput/PhoneInput';
export { PopUp } from './common/PopUp/PopUp';
export { NotificationToast } from './common/NotificationToast/NotificationToast';
export { EatwyPopup } from './common/EatwyPopup/EatwyPopup';
export { Contexts } from './common/Contexts/Contexts';
export { PopupHeader } from './common/PopupHeader/PopupHeader';
export { Loader } from './common/Loader/Loader';
export { IconContent } from './common/IconContent/IconContent';
export { FilterTagComponent } from './common/FilterTagComponent/FilterTagComponent';

export { PrivateRoute } from './PrivateRoute/PrivateRoute';

export { default as PageTransition } from './PageTransition/PageTransition';
export { PageCover } from './PageCover/PageCover';
export { SWRProvider } from './SWRProvider/SWRProvider';

export { default as NoteCard } from './pageParts/main/NoteCard/NoteCard';

export const About = dynamic(() => import('./pageParts/about/About/About'));
export const AuthLayout = dynamic(() => import('./pageParts/auth/AuthLayout/AuthLayout'));
export const NotesPage = dynamic(() => import('./pageParts/main/NotesPage/NotesPage'));
export const CategoryForm = dynamic(() => import('./pageParts/main/CategoryForm/CategoryForm'));
export const NoteForm = dynamic(() => import('./pageParts/main/NoteForm/NoteForm'));
export const NoteInfo = dynamic(() => import('./pageParts/main/NoteInfo/NoteInfo'));
export const CategoryInfo = dynamic(() => import('./pageParts/main/CategoryInfo/CategoryInfo'));
export const Settings = dynamic(() => import('./pageParts/settings/Settings/Settings'));
