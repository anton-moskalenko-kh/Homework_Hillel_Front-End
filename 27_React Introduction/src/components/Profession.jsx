import { Component} from "react";

class Profession extends Component{
    render() {
        const { profession } = this.props
        return (
            <span className="profession">{profession}</span>
        )
    }
}

export default Profession