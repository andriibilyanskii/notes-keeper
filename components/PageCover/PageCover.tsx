import React, { CSSProperties } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { PageTransition, PopUp, Loader, Text } from '@components';

import styles from './PageCover.module.scss';
import { LANGUAGES } from '@languages';
import { useLanguage } from '@shared/hooks';

interface IProps {
	children?: React.ReactNode;
	className?: string;
	mainClassName?: string;
	headers?: Array<{
		type:
			| 'search'
			| 'back'
			| 'filters'
			| 'info'
			| 'restaurantInformation'
			| 'feedInformation'
			| 'sort'
			| 'onlyLogo'
			| 'menu';
		props?: any;
	}>;
	withFooter?: boolean;
	mainPadding?: boolean;
	style?: CSSProperties;
	onlyPhone?: boolean;
}

const PageCover: React.FC<IProps> = (props, ref) => {
	const {
		children,
		className,
		mainClassName,
		headers,
		withFooter,
		mainPadding,
		style,
		onlyPhone,
	} = props;

	const router = useRouter();

	const { language } = useLanguage();

	return (
		<div
			className={classNames({
				[styles.page]: true,
				[styles.page_header]: (headers || [])?.length > 0,
				[styles.page_footer]: withFooter,
				[styles.page_header_footer]: (headers || [])?.length > 0 && withFooter,
				[styles.page_onlyPhone]: onlyPhone,
				[styles[className || '']]: !!className,
				[className || '']: !!className,
			})}
			style={{ backgroundImage: `url(/img/clouds-bg-transparent.svg)`, ...style }}
		>
			<PageTransition ref={ref}>
				<div
					className={classNames({
						[styles['header']]: true,
					})}
				>
					<Text.Title
						type={'h3'}
						className={classNames({
							[styles['header-text']]: true,
						})}
					>
						{language(LANGUAGES.metaTag)}
					</Text.Title>
				</div>

				<main
					className={classNames({
						[styles['main']]: true,
						[styles['main_withPadding']]: !!mainPadding,
						[mainClassName || '']: !!mainClassName,
					})}
				>
					{children}
				</main>
			</PageTransition>

			<PopUp />

			<Loader />
		</div>
	);
};

PageCover.defaultProps = {
	headers: [],
	withFooter: false,
	mainPadding: true,
};

export { PageCover };
