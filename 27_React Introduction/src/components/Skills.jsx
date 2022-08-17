import { Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons";

class Skills extends Component{
    render() {
        const { skillName } = this.props
        return (
            <span className="skills"><FontAwesomeIcon icon={faSquareCheck} className="icon__point"/>{skillName}</span>
        )
    }
}

export default Skills