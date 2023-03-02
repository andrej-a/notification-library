import { IAlert } from '@/models/alert';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Alert } from '../Alert';
import instance from '../../service/alertController';

const AlertList = () => {
    const [list, setList] = useState<IAlert[]>([]);

    useLayoutEffect(() => {
        instance.transferSettingsToComponent(list);
    }, [list]);

    useEffect(() => {
        instance.setList = setList;
    }, []);

    return (
        <>
            {list.length > 0 &&
                list.map(alert => {
                    return (
                        <Alert
                            animationDuration={alert.animationDuration}
                            id={alert.id}
                            spawnAnimation={alert.spawnAnimation}
                            fadeAnimation={alert.fadeAnimation}
                            key={alert.id}
                            position={alert.position}
                            type={alert.type}
                            visibleTime={alert.visibleTime}
                            title={alert.title}
                            description={alert.description}
                            indent={alert.indent}
                            color={alert.color}
                            visibleState={alert.visibleState}
                        />
                    );
                })}
        </>
    );
};

export default AlertList;
