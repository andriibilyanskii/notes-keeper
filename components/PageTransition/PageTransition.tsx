import React, { forwardRef } from 'react';
import { HTMLMotionProps } from 'framer-motion';
// import { osName } from 'react-device-detect';

// import { EatwyContext } from '@context';

type PageTransitionProps = HTMLMotionProps<'div'>;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

// const variants = {
// 	enter: (direction: number) => {
// 		if (!(osName.toLowerCase() === 'ios' && direction < 0)) {
// 			return {
// 				x: direction > 0 ? '100%' : '-100%',
// 				opacity: 0,
// 			};
// 		}
//
// 		return { opacity: 1 };
// 	},
// 	center: {
// 		zIndex: 1,
// 		x: 0,
// 		opacity: 1,
// 	},
// 	exit: (direction: number) => {
// 		return {
// 			zIndex: 0,
// 			x: direction < 0 ? '100%' : '-100%',
// 			opacity: 0,
// 		};
// 	},
// };

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	// const {
	// 	pageAnimationDirection,
	// 	setPageAnimationDirection,
	// 	usePageTransition,
	// 	setUsePageTransition,
	// } = useContext(EatwyContext);
	//
	// useEffect(() => {
	// 	if (pageAnimationDirection === -1) {
	// 		setTimeout(() => {
	// 			setPageAnimationDirection(1);
	// 		}, 250);
	// 	}
	// }, [pageAnimationDirection]);

	// useEffect(() => {
	// 	if (!usePageTransition) {
	// 		setTimeout(() => {
	// 			setUsePageTransition(true);
	// 		}, 500);
	// 	}
	// }, [usePageTransition]);
	//
	// if (osName.toLowerCase() === 'ios') {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: '1',
			}}
		>
			{children}
		</div>
	);
	// }

	// return (
	// 	<motion.div
	// 		ref={ref}
	// 		{...(usePageTransition
	// 			? {
	// 					transition: {
	// 						x: { type: 'tween' },
	// 						opacity: { duration: 0.2 },
	// 					},
	// 					custom: pageAnimationDirection,
	// 					variants: variants,
	// 					initial: 'enter',
	// 					animate: 'center',
	// 					exit: 'exit',
	// 			  }
	// 			: {})}
	// 		{...rest}
	// 		style={{
	// 			display: 'flex',
	// 			flexDirection: 'column',
	// 			flexGrow: '1',
	// 		}}
	// 	>
	// 		{children}
	// 	</motion.div>
	// );
}

export default forwardRef(PageTransition);
