import { IAlert } from '@/models/alert';
import cutString from './cutString';
import constants from '@/models/enums';
const { MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH, ANIMATION_DURATION, TYPES, INDENTS } = constants;
import { v4 as uuidv4 } from 'uuid';

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
        position: position ? position : 'bottom-right',
        spawnAnimation: spawnAnimation ? spawnAnimation : 'smooth-sliding-in',
        fadeAnimation: fadeAnimation ? fadeAnimation : 'smooth-sliding-out',
        type: TYPES.includes(type!) ? type : 'alert',
        visibleTime: typeof visibleTime === 'number' ? visibleTime : 3000,
        title: title ? cutString(title, MAX_TITLE_LENGTH) : 'Alert notification',
        description: description ? cutString(description, MAX_DESCRIPTION_LENGTH) : 'Notification description',
        indent: INDENTS.includes(indent) ? indent : 'small',
        color: typeof color === 'string' ? color : '#00b2ff',
    };
};

export default settingsNormilize;
