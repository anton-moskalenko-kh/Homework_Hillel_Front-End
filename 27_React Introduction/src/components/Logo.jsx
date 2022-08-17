import { Component} from "react";

class Logo extends Component{
    render() {
        const { url, text} = this.props
        return (
            <img src={url} alt={text} className="logo"/>
        )
    }
}

export default Logo