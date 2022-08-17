import { Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Email extends Component{
    render() {
        const { email } = this.props
        return (
            <span className="email"><FontAwesomeIcon icon={faEnvelope} className="email__icon"/>{email}</span>
        )
    }
}

export default Email