export type position =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
type alertType = 'info' | 'success' | 'warning' | 'error';
export type indent = 'small' | 'medium' | 'large';
export type spawnAnimation = 'smooth-sliding-in' | 'fade-in';
export type fadeAnimation = 'smooth-sliding-out' | 'fade-out';

export interface IAlert {
    id: string;
    position: position;
    spawnAnimation: spawnAnimation;
    fadeAnimation: fadeAnimation;
    type: alertType;
    visibleTime: number;
    title: string;
    description: string;
    indent: indent;
    color: string;
    animationDuration: number;
}

export type Params = Pick<
    IAlert,
    | 'animationDuration'
    | 'position'
    | 'fadeAnimation'
    | 'spawnAnimation'
    | 'position'
    | 'indent'
    | 'color'
> & {
    alertVisibleState: boolean;
};

export interface Position {
    [index: string]: IAlert[];
}
export type Containers = [[key: string, alerts: IAlert[]]] | [];
