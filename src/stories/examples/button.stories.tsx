import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AlertPortal from '../../components/AlertPortal/index';
import instance from '../../service/alertController';

export default {
    title: 'Notifications tester',
    component: AlertPortal,
    argTypes: {
        id: {
            type: 'string,',
        },
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        position: {
            control: { type: 'radio' },
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        },
        spawnAnimation: {
            control: { type: 'radio' },
            options: ['smooth-sliding-in', 'fade-in'],
        },
        fadeAnimation: {
            control: { type: 'radio' },
            options: ['smooth-sliding-out', 'fade-out'],
        },
        indent: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large'],
        },
        type: {
            control: { type: 'radio' },
            options: ['alert', 'success', 'warning', 'error'],
        },
        visibleTime: {
            type: 'number',
        },
        color: {
            type: 'string',
        },
    },
};

const Template = ({
    title,
    spawnAnimation,
    description,
    position,
    fadeAnimation,
    indent,
    type,
    visibleTime,
    color,
}) => {
    return (
        <React.Fragment>
            <button
                style={{ position: 'absolute', top: '50%', left: '50%' }}
                onClick={() => {
                    instance.addAlert({
                        title,
                        spawnAnimation,
                        description,
                        position,
                        fadeAnimation,
                        indent,
                        type,
                        visibleTime,
                        color,
                    });
                }}>
                ADD ALERT
            </button>
            <AlertPortal />
        </React.Fragment>
    );
};

export const TestAlert = Template.bind({});
TestAlert.args = {
    id: uuidv4(),
};
