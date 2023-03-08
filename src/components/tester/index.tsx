import React from 'react';

import instance from '../../service/alertController';
import AlertPortal from '../AlertPortal';

const Tester = () => {
    return (
        <React.Fragment>
            <button
                onClick={() => {
                    instance.addAlert({
                        position: 'bottom-right',
                        spawnAnimation: 'smooth-sliding-in',
                        fadeAnimation: 'smooth-sliding-out',
                        type: 'success',
                        visibleTime: 300000000,
                        title: 'Success message',
                        description: 'Some success message',
                        indent: 'medium',
                        color: 'green',
                    });
                }}>
                SHOW
            </button>
            <AlertPortal />
        </React.Fragment>
    );
};
export default Tester;
