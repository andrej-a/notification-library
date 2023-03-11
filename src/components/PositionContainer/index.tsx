import React, { FC, ReactNode } from 'react';

import { Contaner } from './styles';

interface Props {
    children?: ReactNode;
}

const PositionContaner: FC<Props> = (props: Props) => {
    return <Contaner>{props.children}</Contaner>;
};

export default PositionContaner;
