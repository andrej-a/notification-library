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

    /*   public setRef = (ref: React.MutableRefObject<JSX.Element>) => {
        AlertController.componentRef = ref;
        console.log(AlertController.componentRef.current, 'COMPONENTREF');
        console.log(AlertController.componentRef.current.getComponent(), 'COMPONENT CLASS');
    };

    public getComponent = () => {
        return AlertController.componentRef.current.getComponent();
    }; */

    public transferSettingsToComponent = (list: IAlert[], setList: React.Dispatch<React.SetStateAction<IAlert[]>>) => {
        this.list = list;
        this.setList = setList;
    };

    public addAlert = (settings: IAlert) => {
        this.settings = { id: uuidv4(), ...settings };
        this.setList([this.settings, ...this.list]);
    };
}
const instance = AlertController.getInstance();
export default instance;
