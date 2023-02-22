import { IAlert } from '@/models/alert';
import React from 'react';
import { Wrapper } from './styles';

const Alert = ({ position, type, duration, title, description, indent, color }: IAlert) => {
    return <Wrapper params={{ position, indent, color }}></Wrapper>;
};
