import React, { CSSProperties } from 'react';

interface IText {
	children: React.ReactNode;
	type?: 'bold' | 'semibold' | 'medium' | 'regular';
	className?: string;
	style?: CSSProperties;
	onClick?: (e: any) => void;
	lineClamp?: boolean;
	color?: string;
}

export type { IText };
