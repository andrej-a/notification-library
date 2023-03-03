import React from 'react';
import { createPortal } from 'react-dom';

import AlertList from '../AlertList/index';

const AlertPortal = () => {
    return createPortal(<AlertList />, document.body);
};
export default AlertPortal;
