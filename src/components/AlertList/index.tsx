import React from 'react';

import { Alert } from '@/components/Alert';
import useContainer from '@/hooks/useContainer';

import { ListWrapper } from './styles';

const AlertList = () => {
    const { containersPositions } = useContainer();

    return (
        <>
            {containersPositions.length > 0 &&
                containersPositions.map(([key, alerts]) => {
                    return (
                        <ListWrapper key={key} position={key}>
                            {alerts.map(
                                ({
                                    animationDuration,
                                    spawnAnimation,
                                    fadeAnimation,
                                    id,
                                    position,
                                    visibleTime,
                                    description,
                                    indent,
                                    color,
                                    visibleState,
                                    type,
                                    title,
                                }) => {
                                    return (
                                        <Alert
                                            animationDuration={
                                                animationDuration
                                            }
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
                        </ListWrapper>
                    );
                })}
        </>
    );
};

export default AlertList;
