import { Alert } from '../../../components/Alert/index';
import { IAlert } from '@/models/alert';
import { Story } from '@storybook/react';
import React from 'react';

export default {
    title: 'Alert',
    component: Alert,
};

const Template: Story<IAlert> = args => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    position: 'top-left',
    type: 'success',
    duration: 5,
    title: 'Success title!',
    description: 'Success alert description!',
    indent: 'small',
    color: 'green',
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
    position: 'top-left',
    type: 'warning',
    duration: 5,
    title: 'Warning title!',
    description: 'Warning alert description!',
    indent: 'small',
    color: 'orange',
};
export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    position: 'top-left',
    type: 'error',
    duration: 5,
    title: 'Error title!',
    description: 'Error alert description!',
    indent: 'small',
    color: 'red',
};
