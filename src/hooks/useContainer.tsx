import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import alertService from '@/service/SingeltonController';
import { Containers, IAlert, Position } from '@/types/alert';
import constants from '@/types/constants';
import SingeltonMethods from '@/types/singeltonMethods';

const { MAX_ALERTS_PER_TIME } = constants;

const useContainer = () => {
    const [list, setList] = useState<IAlert[]>([]);
    const [containersPositions, setcontainersPositions] = useState<Containers>(
        [],
    );

    const ref = useRef<SingeltonMethods>();

    useImperativeHandle(ref, () => ({
        addAlertToList: (settings: IAlert) => {
            if (list.length < MAX_ALERTS_PER_TIME) {
                setList([...list, settings]);
            }
        },
        removeAlert: (id: string) => {
            setList(list.filter(alert => alert.id !== id));
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
        setcontainersPositions(positionOfTheContainers(list));
    }, [list]);

    return {
        containersPositions,
    };
};

export default useContainer;
