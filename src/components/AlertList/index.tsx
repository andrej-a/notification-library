import React from 'react';

import { Alert } from '@/components/Alert';
import useContainer from '@/hooks/useContainer';

import { ListWrapper } from './styles';

const AlertList = () => {
    const { list } = useContainer();

    return (
        <ListWrapper>
            {list.length > 0
                && list.map(
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
                                alertsCount={list.length}
                            />
                        );
                    },
                )}
        </ListWrapper>
    );
};

export default AlertList;
