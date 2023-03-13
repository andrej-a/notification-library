import React from 'react';

import {
    faBell,
    faCircleCheck,
    faCircleXmark,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const alertionIcons = [
    <FontAwesomeIcon icon={faBell} />,
    <FontAwesomeIcon icon={faCircleCheck} />,
    <FontAwesomeIcon icon={faExclamationTriangle} />,
    <FontAwesomeIcon icon={faCircleXmark} />,
];
export default alertionIcons;
