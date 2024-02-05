import React from 'react';
import classNames from 'classnames';
import ReactStars from 'react-rating-stars-component';

interface IProps {
	onChange?: (e: number) => void;
	className?: string;
	isEditable?: boolean;
	value?: number;
	starsCount: number;
}

const ReactStars1: React.FC<IProps> = (props) => {
	const { onChange, className, isEditable, value, starsCount } = props;

	return (
		<div
			className={classNames({
				'react-stars-component': true,
				[className || '']: !!className,
			})}
		>
			<ReactStars
				count={+starsCount || 5}
				onChange={(newRating: number) => onChange?.(newRating)}
				size={50}
				// isHalf={true}
				emptyIcon={<i className='far fa-star'></i>}
				halfIcon={<i className='fa fa-star-half-alt'></i>}
				fullIcon={<i className='fa fa-star'></i>}
				activeColor='#AC42D8'
				edit={isEditable}
				value={value}
			/>
		</div>
	);
};

ReactStars1.defaultProps = {
	className: '',
	isEditable: true,
	value: 0,
};

export { ReactStars1 as ReactStars };
