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
                        type: 'success',
                        visibleTime: 5,
                        title: 'Success message',
                        description: 'Some success message',
                        indent: 'medium',
                        color: 'green',
                        isVisible: false,
                    })
                }>
                SHOW
            </button>
            <AlertPortal />
        </>
    );
};
export default Tester;
