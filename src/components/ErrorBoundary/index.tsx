import React, { Component, ErrorInfo,ReactNode } from 'react';

import Wrapper, { ErrorDescription } from './styles';

interface Props {
    children?: ReactNode;
}

interface State {
    errorsList: string[];
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            errorsList: [],
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorsList: [error.name, errorInfo.componentStack],
        });
    }

    public render() {
        const { errorsList } = this.state;
        if (errorsList.length) {
            return (
                <Wrapper>
                    <ErrorDescription>
                        Sorry.. there is an error in alertor-library:
                    </ErrorDescription>
                    {errorsList.map(error => {
                        return <ErrorDescription>{error}</ErrorDescription>;
                    })}
                </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
