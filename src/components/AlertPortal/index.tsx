import React from 'react';
import { createPortal } from 'react-dom';

import AlertList from '@/components/AlertList';

const AlertPortal = () => {
    return createPortal(<AlertList />, document.body);
};
export default AlertPortal;
