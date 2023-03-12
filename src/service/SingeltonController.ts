import settingsNormilize from '@/helpers/settingsNormilize';
import { IAlert } from '@/types/alert';
import singeltonMethods from '@/types/singeltonMethods';

class SingeltonController {
    private static alertService: SingeltonController;

    settings: IAlert | undefined;

    listManager: singeltonMethods | undefined;

    public static getInstance = (): SingeltonController => {
        if (!SingeltonController.alertService) {
            SingeltonController.alertService = new SingeltonController();
        }
        return SingeltonController.alertService;
    };

    public removeAlert = (id: string) => {
        this.listManager?.removeAlert(id);
    };

    public addAlert = (settings: IAlert) => {
        this.listManager?.addAlertToList(settingsNormilize(settings || {}));
    };
}

export default SingeltonController.getInstance();
