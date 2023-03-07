import React, { Component, ErrorInfo, ReactNode } from 'react';
import Wrapper from './styles';

interface Props {
    children?: ReactNode;
}

interface State {
    error: string;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        error: '',
    };

    public componentDidCatch(error: Error): void {
        this.setState({
            error: error.name.toString(),
        });
    }

    public render() {
        if (this.state.error) {
            return (
                <Wrapper>
                    <h1>Sorry.. there was an error in alertor-library: {this.state.error}</h1>
                    <h2>Try to reload page</h2>
                </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
