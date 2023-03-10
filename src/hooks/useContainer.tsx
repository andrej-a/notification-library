import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import alertService from '@/service/SingeltonController';
import { IAlert } from '@/types/alert';
import constants from '@/types/constants';
import ListManager from '@/types/singeltonMethods';

const { MAX_ALERTS_PER_TIME } = constants;

const useContainer = () => {
    const [list, setList] = useState<IAlert[]>([]);
    const ref = useRef<ListManager>();

    useImperativeHandle(ref, () => ({
        addAlertToList: (settings: IAlert) => {
            if (list.length < MAX_ALERTS_PER_TIME) {
                setList([...list, settings]);
            }
        },
        hideAlert: (id: string) => {
            const index = list.findIndex(alert => alert.id === id);
            setList([
                ...list.slice(0, index),
                { ...list[index], visibleState: false },
                ...list.slice(index + 1),
            ]);
        },
        removeAlert: (id: string) => {
            setList(list.filter(alert => alert.id !== id));
        },
    }));

    useEffect(() => {
        alertService.listManager = ref.current;
    }, [list]);

    return {
        list,
    };
};

export default useContainer;
