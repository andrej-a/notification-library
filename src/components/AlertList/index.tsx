import { IAlert } from '@/models/alert';
import React, { useState, useRef, useEffect } from 'react';
import { Alert } from '../Alert';
import instance from '../../service/alertController';
type AlertList = React.ForwardRefExoticComponent<IAlert & React.RefAttributes<unknown>>[];

const AlertList = () => {
    const [list, setList] = useState<IAlert[]>([]);
    const alertRef = useRef(null);
    instance.transferSettingsToComponent(list, setList);

    useEffect(() => {
        //console.log(alertRef.current, 'ALERTLIST');
    }, []);

    return (
        <>
            {list.length > 0 &&
                list.map(alert => {
                    return (
                        <Alert
                            key={alert.id}
                            ref={alertRef}
                            isVisible={alert.isVisible}
                            position={alert.position}
                            type={alert.type}
                            visibleTime={alert.visibleTime}
                            title={alert.title}
                            description={alert.description}
                            indent={alert.indent}
                            color={alert.color}
                        />
                    );
                })}
        </>
    );
};

export default AlertList;
