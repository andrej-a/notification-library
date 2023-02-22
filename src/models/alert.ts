export interface IAlert {
    position: position;
    type: alertType;
    duration: number;
    title: string;
    description: string;
    indent: indent;
    color: string;
}

type position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type alertType = 'success' | 'warning' | 'error';
type indent = 'small' | 'medium' | 'big';
