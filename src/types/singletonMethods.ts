import { IAlert } from './alert';

type SingletonMethods = {
    addAlertToList: (settings: IAlert) => void;
    removeAlert: (id: string) => void;
};

export default SingletonMethods;
