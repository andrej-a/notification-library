import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IAlert } from '@/models/alert';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '../../components/Alert/index';

export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const NotificationAlert = Template.bind({});
NotificationAlert.args = {
    id: uuidv4(),
    position: 'top-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'fade-out',
    type: 'alert',
    visibleTime: 5000,
    title: 'Notification title!',
    description: 'Notification alert description!',
    indent: 'small',
    color: '#00b2ff',
    visibleState: true,
    animationDuration: 1500,
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    id: uuidv4(),
    position: 'top-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'fade-out',
    type: 'success',
    visibleTime: 5000,
    title: 'Success title!',
    description: 'Success alert description!',
    indent: 'small',
    color: '#00cc2d',
    visibleState: true,
    animationDuration: 1500,
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
    id: uuidv4(),
    position: 'top-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'fade-out',
    type: 'warning',
    visibleTime: 5000,
    title: 'Warning title!',
    description: 'Warning alert description!',
    indent: 'small',
    color: '#ff9900',
    visibleState: true,
    animationDuration: 1500,
};
export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    id: uuidv4(),
    position: 'top-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'fade-out',
    type: 'error',
    visibleTime: 5000,
    title: 'Error title!',
    description: 'Error alert description!',
    indent: 'small',
    color: '#d22525',
    visibleState: true,
    animationDuration: 1500,
};
