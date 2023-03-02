import React from 'react';
import AlertPortal from '../AlertPortal';
import instance from '../../service/alertController';
const Tester = () => {
    return (
        <>
            <button
                onClick={() =>
                    instance.addAlert({
                        position: 'bottom-right',
                        spawnAnimation: 'smooth-sliding-in',
                        fadeAnimation: 'smooth-sliding-out',
                        type: 'success',
                        visibleTime: 100000,
                        title: 'Success message',
                        description: 'Some success message',
                        indent: 'medium',
                        color: 'green',
                    })
                }>
                SHOW
            </button>
            <AlertPortal />
        </>
    );
};
export default Tester;
