import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from '../../components/Alert/index';
import theme from '../../styles/theme';
import storiesArguments from './config/storiesArguments';

const {
    color: { lightBlue, brightGreen, darkOrange, darkRed },
} = theme;
export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const NotificationAlert = Template.bind({});
NotificationAlert.args = {
    id: uuidv4(),
    type: 'info',
    title: 'Notification title!',
    description: 'Notification alert description!',
    color: lightBlue,
    ...storiesArguments,
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    id: uuidv4(),
    type: 'success',
    title: 'Success title!',
    description: 'Success alert description!',
    color: brightGreen,
    ...storiesArguments,
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
    id: uuidv4(),
    type: 'warning',
    title: 'Warning title!',
    description: 'Warning alert description!',
    color: darkOrange,
    ...storiesArguments,
};
export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    id: uuidv4(),
    type: 'error',
    title: 'Error title!',
    description: 'Error alert description!',
    color: darkRed,
    ...storiesArguments,
};
