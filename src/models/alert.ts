export type position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type alertType = 'alert' | 'success' | 'warning' | 'error';
export type indent = 'small' | 'medium' | 'large';
export type spawnAnimation = 'smooth-sliding-in' | 'fade-in';
type fadeAnimation = 'to-right' | 'to-left' | 'to-bottom' | 'to-top';

export interface IAlert {
    id?: string;
    isVisible: boolean;
    position: position;
    spawnAnimation: spawnAnimation;
    fadeAnimation: fadeAnimation;
    type: alertType;
    visibleTime: number;
    title: string;
    description: string;
    indent: indent;
    color: string;
}

export type Params = Pick<IAlert, 'position' | 'color' | 'indent' | 'spawnAnimation' | 'fadeAnimation' | 'isVisible'>;
