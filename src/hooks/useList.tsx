import { IAlert } from '@/models/alert';
import instance from '@/service/alertController';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import constants from '@/models/enums';
import ListManager from '@/models/listManager';

const { MAX_ALERTS_PER_TIME, ANIMATION_DURATION } = constants;

const useList = () => {
    const [list, setList] = useState<IAlert[]>([]);
    const ref = useRef<ListManager>();

    useImperativeHandle(ref, () => ({
        addAlertToList: (settings: IAlert) => {
            settings = {
                id: uuidv4(),
                visibleState: true,
                animationDuration: ANIMATION_DURATION,
                ...settings,
            };

            if (list.length === MAX_ALERTS_PER_TIME) {
                return;
            } else {
                setList([...list, settings]);
            }
        },
        hideAlert: (id: string) => {
            const index = list.findIndex(alert => alert.id === id);
            setList([...list.slice(0, index), { ...list[index], visibleState: false }, ...list.slice(index + 1)]);
        },
        removeAlert: (id: string) => {
            setList(list.filter(alert => alert.id !== id));
        },
    }));

    useEffect(() => {
        instance.listManager = ref.current;
    }, [list]);

    return {
        list,
    };
};

export default useList;
