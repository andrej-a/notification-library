import { IAlert } from '@/models/alert';
import ListManager from '@/models/listManager';

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
        this.listManager?.hideAlert(id);
    };

    public removeAlert = (id: string) => {
        this.listManager?.removeAlert(id);
    };

    public addAlert = (settings: IAlert) => {
        this.listManager?.addAlertToList(settings);
    };
}

export default AlertController.getInstance();
