import settingsNormilize from '@/helpers/settingsNormilize';
import { IAlert } from '@/types/alert';
import SingletonMethods from '@/types/singletonMethods';

class SingletonController {
    private static alertService: SingletonController;

    settings: IAlert | undefined;

    listManager: SingletonMethods | undefined;

    public static getInstance = (): SingletonController => {
        if (!SingletonController.alertService) {
            SingletonController.alertService = new SingletonController();
        }
        return SingletonController.alertService;
    };

    public removeAlert = (id: string) => {
        this.listManager?.removeAlert(id);
    };

    public addAlert = (settings: IAlert) => {
        this.listManager?.addAlertToList(settingsNormilize(settings || {}));
    };
}

export default SingletonController.getInstance();
