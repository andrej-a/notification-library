import { IAlert } from '@/models/alert';
import ListManager from '@/models/listManager';
import constants from '@/models/enums';
import settingsNormilize from '@/helpers/settingsNormilize';

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
        this.listManager?.addAlertToList(settingsNormilize(settings || {}));
    };
}

export default AlertController.getInstance();
