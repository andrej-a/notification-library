type position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type alertType = 'alert' | 'success' | 'warning' | 'error';
type indent = 'small' | 'medium' | 'big';

export interface IAlert {
    id?: string;
    isVisible: boolean;
    position: position;
    type: alertType;
    visibleTime: number;
    title: string;
    description: string;
    indent: indent;
    color: string;
}

export type Params = Pick<IAlert, 'position' | 'color' | 'indent'>;
