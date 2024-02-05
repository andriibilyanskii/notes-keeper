import dynamic from 'next/dynamic';

export * as Text from './common/Text';
export { AnimateHeight } from './common/AnimateHeight/AnimateHeight';
export { Button } from './common/Button/Button';
export { Image } from './common/Image/Image';
export { Icon } from './common/Icon/Icon';
export { Input } from './common/Input/Input';
export { Tag } from './common/Tag/Tag';
export { Link } from './common/Link/Link';
export { PhoneInput } from './common/PhoneInput/PhoneInput';
export { PopUp } from './common/PopUp/PopUp';
export { ReactStars } from './common/ReactStars/ReactStars';
export { NotificationToast } from './common/NotificationToast/NotificationToast';
export { EatwyPopup } from './common/EatwyPopup/EatwyPopup';
export { Stars } from './common/Stars/Stars';
export { StatusBar } from './common/StatusBar/StatusBar';
export { SelectCard } from './common/SelectCard/SelectCard';
export { Radio } from './common/Radio/Radio';
export { Check } from './common/Check/Check';
export { Contexts } from './common/Contexts/Contexts';
export const Banner = dynamic(() => import('./common/Banner/Banner'));
export { PopupHeader } from './common/PopupHeader/PopupHeader';
export { Loader } from './common/Loader/Loader';
export { SuccessPage } from './common/SuccessPage/SuccessPage';
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
export const AddCategory = dynamic(() => import('./pageParts/main/AddCategory/AddCategory'));
export const AddNote = dynamic(() => import('./pageParts/main/AddNote/AddNote'));
