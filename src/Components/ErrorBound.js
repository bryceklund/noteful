import React, { Component } from 'react';

class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>Whoops! Something failed right here.</div>
            );
        }
        return this.props.children
    }
}

export default ErrorBound;