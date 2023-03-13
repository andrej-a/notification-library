import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import alertService from '@/service/SingletonController';
import { Containers, IAlert, Position } from '@/types/alert';
import constants from '@/types/constants';
import SingletonMethods from '@/types/singletonMethods';

const { MAX_ALERTS_PER_TIME } = constants;

const useContainer = () => {
    const [listOfTheAlerts, setListOfTheAlerts] = useState<IAlert[]>([]);
    const [containersPositions, setContainersPositions] = useState<Containers>(
        [],
    );

    const ref = useRef<SingletonMethods>();

    useImperativeHandle(ref, () => ({
        addAlertToList: (settings: IAlert) => {
            if (listOfTheAlerts.length < MAX_ALERTS_PER_TIME) {
                setListOfTheAlerts([...listOfTheAlerts, settings]);
            }
        },
        removeAlert: (id: string) => {
            setListOfTheAlerts(
                listOfTheAlerts.filter(alert => alert.id !== id),
            );
        },
    }));

    const positionOfTheContainers = (list: IAlert[]): Containers => {
        const positions: Position = {};

        list.forEach(alert => {
            positions[alert.position] = positions[alert.position]
                ? [...positions[alert.position], alert]
                : [alert];
        });
        return Object.entries(positions) as Containers;
    };

    useEffect(() => {
        alertService.listManager = ref.current;
        setContainersPositions(positionOfTheContainers(listOfTheAlerts));
    }, [listOfTheAlerts]);

    return {
        containersPositions,
    };
};

export default useContainer;
