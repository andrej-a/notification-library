import { v4 as uuidv4 } from 'uuid';

import theme from '@/styles/theme';
import { IAlert } from '@/types/alert';
import constants, { INDENTS, TYPES } from '@/types/constants';

import cutString from './cutString';

const {
    color: { lightBlue },
} = theme;

const { MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH, ANIMATION_DURATION } =
    constants;

const settingsNormilize = ({
    position,
    spawnAnimation,
    fadeAnimation,
    type,
    visibleTime,
    title,
    description,
    indent,
    color,
}: IAlert): IAlert => {
    return {
        id: uuidv4(),
        visibleState: true,
        animationDuration: ANIMATION_DURATION,
        position: position || 'bottom-right',
        spawnAnimation: spawnAnimation || 'smooth-sliding-in',
        fadeAnimation: fadeAnimation || 'smooth-sliding-out',
        type: TYPES.includes(type!) ? type : 'info',
        visibleTime: typeof visibleTime === 'number' ? visibleTime : 3000,
        title: title ? cutString(title, MAX_TITLE_LENGTH) : 'Info notification',
        description: description
            ? cutString(description, MAX_DESCRIPTION_LENGTH)
            : 'Notification description',
        indent: INDENTS.includes(indent) ? indent : 'small',
        color: typeof color === 'string' ? color : lightBlue,
    };
};

export default settingsNormilize;
