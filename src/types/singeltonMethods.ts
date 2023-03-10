import { IAlert } from './alert';

type singeltonMethods = {
    addAlertToList: (settings: IAlert) => void;
    hideAlert: (id: string) => void;
    removeAlert: (id: string) => void;
};

export default singeltonMethods;
