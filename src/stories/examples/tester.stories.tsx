import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AlertContainer from '../../components/AlertContainer/index';
import alertService from '../../service/SingletonController';

export default {
    title: 'Notifications tester',
    component: AlertContainer,
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
            options: ['info', 'success', 'warning', 'error'],
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
                id="test"
                style={{ position: 'absolute', top: '50%', left: '50%' }}
                onClick={() => {
                    alertService.addAlert({
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
            <AlertContainer />
        </React.Fragment>
    );
};

export const TestAlert = Template.bind({});
TestAlert.args = {
    id: uuidv4(),
};
