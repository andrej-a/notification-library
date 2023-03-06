import { IAlert } from '../models/alert';
import ListManager from '../models/listManager';

class AlertController {
    private static instance: AlertController;

    settings: IAlert | undefined;

    listManager: ListManager | undefined;

    public static getInstance = (): AlertController => {
        if (!AlertController.instance) {
            AlertController.instance = new AlertController();
        }
        return AlertController.instance;
    };

    public hideAlert = (id: string) => {
        if (this.listManager) {
            this.listManager.hideAlert(id);
        }
    };

    public removeAlert = (id: string) => {
        if (this.listManager) {
            this.listManager.removeAlert(id);
        }
    };

    public addAlert = (settings: IAlert) => {
        if (this.listManager) {
            this.listManager.addAlertToList(settings);
        }
    };
}

export default AlertController.getInstance();
