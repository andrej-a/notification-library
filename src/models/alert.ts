export type position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type alertType = 'alert' | 'success' | 'warning' | 'error';
export type indent = 'small' | 'medium' | 'large';
export type spawnAnimation = 'smooth-sliding-in' | 'fade-in';
export type fadeAnimation = 'smooth-sliding-out' | 'fade-out';

export interface IAlert {
    id?: string;
    position: position;
    spawnAnimation: spawnAnimation;
    fadeAnimation: fadeAnimation;
    type?: alertType;
    visibleTime?: number;
    title?: string;
    description?: string;
    indent: indent;
    color: string;
    animationDuration?: number;
    visibleState?: boolean;
}

export interface Params extends IAlert {}
