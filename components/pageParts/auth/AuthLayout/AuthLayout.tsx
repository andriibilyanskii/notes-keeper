import React from 'react';

import { Button, Link, PageCover, Text } from '@components';

import { useAppContext } from '@shared';
import { useLanguage } from '@shared/hooks';

import styles from './auth.module.scss';

interface IProps {
	header: 'info' | 'back';
	signInText: {
		title: string;
		p2: string;
	};
	form: {
		onSubmit: (e: any) => void;
		onOk?: (response: any) => void;
		inputs: React.ReactNode;
		underInputs?: React.ReactNode;
		button: { text: string; isDisabled?: boolean };
	};
	underForm?: {
		text: string;
		link?: {
			to?: string;
			text: string;
			onClick?: (e) => void;
		};
	};
}

const AuthLayout: React.FC<IProps> = (props) => {
	const { header, signInText, form, underForm } = props;

	const { language, lang } = useLanguage();

	const { setShowLoader } = useAppContext();

	return (
		<PageCover mainClassName={styles['auth']}>
			<Text.Title type={'h1'}>{signInText?.title}</Text.Title>
			<Text.P2 className={styles['auth-signInText']}>{signInText?.p2}</Text.P2>

			<form
				className={styles['auth-form']}
				onSubmit={async (e) => {
					e?.preventDefault();

					setShowLoader(true);
					const result: any = await form?.onSubmit?.(e);

					if (result?.ok) {
						await form?.onOk?.(result);
					}

					setShowLoader(false);
				}}
			>
				<div className={styles['auth-form-inputs']}>{form?.inputs}</div>

				{form?.underInputs && (
					<div className={styles['auth-form-underInputs']}>{form?.underInputs}</div>
				)}

				<Button
					type='submit'
					className={styles['auth-form-button']}
					disabled={form?.button?.isDisabled}
				>
					{form?.button?.text}
				</Button>
			</form>

			<div className={styles['auth-underFormText']}>
				<Text.S1>{underForm?.text} </Text.S1>
				{underForm?.link && (
					<Text.S1
						className={styles['auth-underFormText-textLink']}
						type={'medium'}
						onClick={underForm?.link?.onClick}
					>
						{underForm?.link?.to ? (
							<Link to={underForm?.link?.to}>{underForm?.link?.text}</Link>
						) : (
							underForm?.link?.text
						)}
					</Text.S1>
				)}
			</div>
		</PageCover>
	);
};

export default AuthLayout;
