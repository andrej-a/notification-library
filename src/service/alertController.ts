import { v4 as uuidv4 } from 'uuid';
import { IAlert } from '../models/alert';
import React from 'react';

class AlertController {
    private static instance: AlertController;
    static componentRef: React.MutableRefObject<JSX.Element>;
    settings: IAlert | undefined;
    list!: IAlert[];
    setList!: React.Dispatch<React.SetStateAction<IAlert[]>>;

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
        console.log(this.list, 'LIST REMOVE');
        this.setList(this.list.filter(alert => alert.id !== id));
    };

    public transferSettingsToComponent = (list: IAlert[]) => {
        this.list = list;
        console.log(list, 'LIST TRANSFER');
    };

    public addAlert = (settings: IAlert) => {
        this.settings = { id: uuidv4(), visibleState: true, animationDuration: 1500, ...settings };
        this.setList([this.settings, ...this.list]);
    };
}

const instance = AlertController.getInstance();
export default instance;
