import React, { useEffect, useLayoutEffect, useState } from 'react';

import { IAlert } from '@/models/alert';

import instance from '../../service/alertController';
import { Alert } from '../Alert';

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
                list.map(
                    ({
                        animationDuration,
                        id,
                        spawnAnimation,
                        fadeAnimation,
                        position,
                        type,
                        title,
                        visibleTime,
                        description,
                        indent,
                        color,
                        visibleState,
                    }) => {
                        return (
                            <Alert
                                animationDuration={animationDuration}
                                id={id}
                                spawnAnimation={spawnAnimation}
                                fadeAnimation={fadeAnimation}
                                key={id}
                                position={position}
                                type={type}
                                visibleTime={visibleTime}
                                title={title}
                                description={description}
                                indent={indent}
                                color={color}
                                visibleState={visibleState}
                            />
                        );
                    },
                )}
        </>
    );
};

export default AlertList;
