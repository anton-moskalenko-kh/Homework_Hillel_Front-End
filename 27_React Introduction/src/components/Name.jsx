import { Component} from "react";

class Name extends Component{
    render() {
        const { name, surname } = this.props
        return (
            <span className="name">{name + " " + surname}</span>
        )
    }
}

export default Name