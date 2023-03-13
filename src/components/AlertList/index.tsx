import React from 'react';

import { Alert } from '@/components/Alert';
import useContainer from '@/hooks/useContainer';

import { ListWrapper } from './styles';

const AlertList = () => {
    const { containersPositions } = useContainer();

    return (
        <React.Fragment>
            {containersPositions.length > 0
                && containersPositions.map(([key, alerts]) => {
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
                                        />
                                    );
                                },
                            )}
                        </ListWrapper>
                    );
                })}
        </React.Fragment>
    );
};

export default AlertList;
