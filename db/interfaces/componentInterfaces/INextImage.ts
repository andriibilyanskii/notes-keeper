interface INextImage {
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
	objectFit?: 'contain' | 'cover';
	width?: string;
	height?: string;
	priority?: boolean;
	sizes?: string;
}

export type { INextImage };
