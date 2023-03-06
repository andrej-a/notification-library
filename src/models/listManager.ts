import { IAlert } from './alert';

type ListManager = {
    addAlertToList: (settings: IAlert) => void;
    hideAlert: (id: string) => void;
    removeAlert: (id: string) => void;
};

export default ListManager;
