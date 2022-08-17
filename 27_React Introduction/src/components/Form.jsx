import { Component} from "react";
import Button from "./Button";
import { v4 } from 'uuid';

class Form extends Component{

    handleSkill (event) {
        event.preventDefault();
        const {onAdd} = this.props;
        onAdd({id: v4(), skillName: event.target.skillName.value})
        event.target.skillName.value = '';
    }

    render() {
        return (
            <form action="#" className="form" onSubmit={this.handleSkill.bind(this)}>
                <input type="text" name="skillName" className="form__input" placeholder="Enter your skill name"/>
                <Button text="Добавить"/>
            </form>
        )
    }
}

export default Form