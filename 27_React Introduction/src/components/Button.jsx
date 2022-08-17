import { Component} from "react";

class Button extends Component{
    render() {
        const { text } = this.props
        return (
            <button className="form__button">{text}</button>
        )
    }
}

export default Button