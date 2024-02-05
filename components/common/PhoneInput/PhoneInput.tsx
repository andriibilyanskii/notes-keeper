import React, { CSSProperties } from 'react';

import { default as PhoneInputReact } from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

import styles from './PhoneInput.module.scss';

interface IProps {
	country: string;
	value: string;
	placeholder?: string;
	onChange: (e: any) => void;
	style?: { buttonStyle?: CSSProperties; inputStyle?: CSSProperties };
	required?: boolean;
}

const PhoneInput: React.FC<IProps> = (props) => {
	const { style, required, ...rest } = props;

	let placeholder = '+380 (00) 000 00 00';
	switch (props?.country) {
		case 'uk':
			placeholder = '+380 (00) 000 00 00';
			break;
		case 'pl':
			placeholder = '+48 000 000 000';
			break;
		default:
	}

	return (
		<PhoneInputReact
			{...rest}
			containerClass={styles.phoneInput}
			buttonClass={styles.flagDropdown}
			inputClass={styles.input}
			enableSearch
			buttonStyle={{
				borderTopLeftRadius: '10px',
				borderBottomLeftRadius: '10px',
				...style?.buttonStyle,
			}}
			inputStyle={{
				width: '100%',
				paddingTop: '10px',
				paddingBottom: '10px',
				height: style?.inputStyle?.height || '56px',
				borderRadius: '10px',
				...style?.inputStyle,
			}}
			value={props.value || ''}
			placeholder={props.placeholder || placeholder}
			inputProps={{
				required: required,
			}}
		/>
	);
};

export { PhoneInput };
