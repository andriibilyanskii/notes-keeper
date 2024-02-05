import React, { useState, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { Icon, PhoneInput } from '@components';

import { CONSTANTS } from '@constants';

import { getColor } from '@shared';

import styles from './Input.module.scss';

interface IProps {
	className?: string;
	classNameContainer?: string;
	placeholder?: string;
	placeholderAnimated?: string;
	onChange: (e: any) => void;
	onFocus?: (e: any) => void;
	onBlur?: (e: any) => void;
	value?: string | number;
	defaultValue?: string | number;
	type?: 'text' | 'number' | 'password' | 'file' | 'tel' | 'email' | 'time' | 'date' | 'url';
	inputType?: 'textarea' | 'input';
	name?: string;
	required?: boolean;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	pattern?: 'username' | 'password' | 'lowercaseNumbers-' | '';
	minLength?: number;
	maxLength?: number;
	accept?: '.txt' | '.csv' | 'image/jpg, image/jpeg, image/png, image/heic, image/svg';
	message?: {
		type: 'success' | 'error';
		text?: string;
	};
	autoFocus?: boolean;
	nonStyledInput?: boolean;
	isLoading?: boolean;
	multiple?: boolean;
	onDropDown?: (e) => void;
	icon?: {
		src: string;
		onClick: (e) => void;
	};
	setIsFocusedInput?: (e: boolean) => void;
	stylePhoneNumber?: { buttonStyle?: object; inputStyle?: object };
}

const Input: React.FC<IProps> = (props) => {
	const {
		classNameContainer,
		onChange,
		onFocus,
		onBlur,
		type,
		inputType,
		pattern,
		placeholder,
		placeholderAnimated,
		message,
		autoFocus,
		nonStyledInput,
		isLoading,
		onDropDown,
		icon,
		maxLength,
		setIsFocusedInput,
		stylePhoneNumber,
		...rest
	} = props;

	const [showPassword, setShowPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const showPasswordFunc = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const inputRef = useRef<any>();

	useEffect(() => {
		if (autoFocus) {
			inputRef?.current?.focus();
		}
	}, [autoFocus]);

	const patternValue = props?.value
		? pattern === 'password'
			? '^[a-zA-Z0-9$%_+-=,.]*$'
			: pattern === 'username'
			? '^[a-z0-9_]*$'
			: pattern === 'lowercaseNumbers-'
			? '^[a-z0-9-]*$'
			: undefined
		: '\\S+.*';

	const onChangeFunc = (e: any) => {
		if (props.min !== undefined) {
			if (+e.target.value < props.min) {
				e.target.value = String(props.min);
			}
		}

		if (props.max !== undefined) {
			if (+e.target.value > props.max) {
				e.target.value = String(props.max);
			}
		}

		if (type === 'tel') {
			e.target.value = e.target.value.replace(/[^-+\d]/gi, '');
		}

		if (type === 'file') {
			onChange(e);
		} else {
			onChange(e.target.value);
		}
	};

	const renderInput = () =>
		React.createElement(inputType || 'input', {
			...rest,
			className: classNames({
				[props?.className || '']: !!props?.className,
				[styles.input]: !nonStyledInput,
				[styles['input-filled']]:
					(!nonStyledInput && !!props?.value && !!placeholder) || type === 'date',
				[styles['input-placeholder']]:
					!nonStyledInput && !!placeholder && type !== 'date',
				[styles['input_success']]: !nonStyledInput && message?.type === 'success',
				[styles['input_error']]: !nonStyledInput && message?.type === 'error',
				[styles['input_withIcon']]: onDropDown || type === 'password' || icon,
				[styles['input-textarea']]: inputType === 'textarea',
			}),
			onWheel: (e) => {
				if (type === 'number') {
					e.currentTarget.blur();
				}
			},
			onChange: onChangeFunc,
			onFocus: (e) => {
				onFocus?.(e);
				setIsFocused(true);
				setIsFocusedInput?.(true);
			},
			onBlur: (e) => {
				onBlur?.(e);
				setIsFocused(false);
				setIsFocusedInput?.(false);
			},
			type: !showPassword ? type : 'text',
			pattern: patternValue,
			ref: inputRef,
			maxLength: type === 'tel' ? 13 : maxLength,
			...(nonStyledInput ? { placeholder } : {}),
		});

	return (
		<div
			className={classNames({
				[styles['input-container']]: true,
				[classNameContainer || '']: !!classNameContainer,
			})}
		>
			{type !== 'tel' ? (
				renderInput()
			) : (
				<PhoneInput
					value={rest.value as string}
					country={'ua'}
					onChange={props.onChange}
					style={stylePhoneNumber}
					required={!!props?.required}
					placeholder={placeholder}
				/>
			)}

			{!nonStyledInput && type !== 'tel' && (
				<>
					<label
						className={classNames({
							[styles.label]: true,
							[styles[props.className + '-label']]: !!props.className,
							[styles['label-filled']]: !!props?.value && !!placeholder,
							[styles['label-placeholder']]: !!placeholder,
						})}
						htmlFor={props?.name}
					>
						{placeholderAnimated && !isFocused
							? placeholderAnimated
							: placeholder}
					</label>

					{message?.text && (
						<span
							className={classNames({
								[styles['inputMessage']]: true,
								[styles[`inputMessage_${message?.type}`]]: true,
							})}
						>
							{message?.text}
						</span>
					)}
				</>
			)}

			<Icon
				className={classNames({
					[styles['loadingIndicator']]: true,
					[styles['loadingIndicator_show']]: isLoading,
				})}
				src={CONSTANTS.ICONS.loader}
				color={getColor('primary-blue')}
			/>

			{type === 'password' && (
				<Icon
					className={classNames({
						[styles['inputIcon']]: true,
					})}
					src={showPassword ? CONSTANTS.ICONS.eyeClose : CONSTANTS.ICONS.eyeAlt}
					onClick={showPasswordFunc}
					size={'1.5rem'}
				/>
			)}

			{onDropDown && (
				<Icon
					className={classNames({
						[styles['inputIcon']]: true,
					})}
					src={isFocused ? CONSTANTS.ICONS.navArrowUp : CONSTANTS.ICONS.navArrowDown}
					onClick={onDropDown}
					size={'1.5rem'}
				/>
			)}

			{icon && (
				<Icon
					className={classNames({
						[styles['inputIcon']]: true,
					})}
					src={icon?.src}
					onClick={icon?.onClick}
					size={'1.5rem'}
				/>
			)}
		</div>
	);
};

Input.defaultProps = {
	className: 'input',
	autoFocus: false,
	nonStyledInput: false,
	isLoading: false,
	inputType: 'input',
};

export { Input };
