import React from 'react';

import { IAlert } from '@/models/alert';
import { Story } from '@storybook/react';

import { Alert } from '../../components/Alert/index';

export default {
    title: 'Alert',
    component: Alert,
};

const Template: Story<IAlert> = args => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    isVisible: true,
    position: 'top-left',
    showAnimation: 'left-right',
    hideAnimation: 'to-right',
    type: 'success',
    visibleTime: 5,
    title: 'Success title!',
    description: 'Success alert description!',
    indent: 'small',
    color: 'green',
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
    isVisible: true,
    position: 'top-left',
    showAnimation: 'left-right',
    hideAnimation: 'to-right',
    type: 'warning',
    visibleTime: 5,
    title: 'Warning title!',
    description: 'Warning alert description!',
    indent: 'small',
    color: 'orange',
};
export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    isVisible: true,
    position: 'top-left',
    showAnimation: 'left-right',
    hideAnimation: 'to-right',
    type: 'error',
    visibleTime: 5,
    title: 'Error title!',
    description: 'Error alert description!',
    indent: 'small',
    color: 'red',
};
