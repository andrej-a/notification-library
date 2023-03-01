type position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type alertType = 'alert' | 'success' | 'warning' | 'error';
type indent = 'small' | 'medium' | 'big';
type showAnimation = 'left-right' | 'right-left' | 'bottom-top' | 'top-bottom';
type hideAnimation = 'to-right' | 'to-left' | 'to-bottom' | 'to-top';

export interface IAlert {
    id?: string;
    isVisible: boolean;
    position: position;
    showAnimation: showAnimation;
    hideAnimation: hideAnimation;
    type: alertType;
    visibleTime: number;
    title: string;
    description: string;
    indent: indent;
    color: string;
    removeAlert?: (id: string) => void;
}

export type Params = Pick<IAlert, 'position' | 'color' | 'indent' | 'showAnimation' | 'hideAnimation' | 'isVisible'>;
