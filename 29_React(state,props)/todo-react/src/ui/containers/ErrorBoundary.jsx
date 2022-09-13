import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError (error) {
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log({error, errorInfo})
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props
        return hasError
            ? <div>
                <h1>Что-то пошло не так, попробуйте перезагрузить страницу</h1>
            </div>
            : children
    }
}

export default ErrorBoundary