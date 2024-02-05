import { IColors } from '@db/types';

import colors from '@styles/colors.module.scss';

function getColor(color: IColors): string {
	return colors?.[color];
}

export { getColor };
