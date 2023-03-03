import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IAlert } from '../models/alert';
import constants from '../models/enums';

const { MAX_ALERTS_PER_TIME, ANIMATION_DURATION } = constants;
class AlertController {
    private static instance: AlertController;

    settings: IAlert | undefined;

    list!: IAlert[];

    setList!: React.Dispatch<React.SetStateAction<IAlert[]>>;

    queue: IAlert[] = [];

    public static getInstance = (): AlertController => {
        if (!AlertController.instance) {
            AlertController.instance = new AlertController();
        }
        return AlertController.instance;
    };

    public hideAlert = (id: string) => {
        const index = this.list.findIndex(alert => alert.id === id);
        this.setList([
            ...this.list.slice(0, index),
            { ...this.list[index], visibleState: false },
            ...this.list.slice(index + 1),
        ]);
    };

    public removeAlert = (id: string) => {
        if (this.queue.length) {
            this.setList([this.queue[0], ...this.list.filter(alert => alert.id !== id)]);
            this.queue.shift();
        } else {
            this.setList(this.list.filter(alert => alert.id !== id));
        }
        console.log(this.queue);
    };

    public transferSettingsToComponent = (list: IAlert[]) => {
        this.list = list;
    };

    public addAlert = (settings: IAlert) => {
        this.settings = { id: uuidv4(), visibleState: true, animationDuration: ANIMATION_DURATION, ...settings };

        if (this.list.length === MAX_ALERTS_PER_TIME) {
            this.queue.push(this.settings);
        } else {
            this.setList([this.settings, ...this.list]);
        }
    };
}

const instance = AlertController.getInstance();
export const createAlert = instance.addAlert;
export default instance;
