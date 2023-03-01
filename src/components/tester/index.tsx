import React from 'react';
import AlertPortal from '../AlertPortal';
import instance from '../../service/alertController';
const Tester = () => {
    return (
        <>
            <button
                onClick={() =>
                    instance.addAlert({
                        position: 'bottom-left',
                        spawnAnimation: 'smooth-sliding-in',
                        fadeAnimation: 'to-right',
                        type: 'success',
                        visibleTime: 3,
                        title: 'Success message',
                        description: 'Some success message',
                        indent: 'medium',
                        color: 'green',
                        isVisible: true,
                    })
                }>
                SHOW
            </button>
            <AlertPortal />
        </>
    );
};
export default Tester;
