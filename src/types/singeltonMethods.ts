import { IAlert } from './alert';

type SingeltonMethods = {
    addAlertToList: (settings: IAlert) => void;
    removeAlert: (id: string) => void;
};

export default SingeltonMethods;
