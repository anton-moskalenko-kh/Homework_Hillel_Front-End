import Button from "./Button";
import { v4 } from 'uuid';

function Form(props) {
    const {onAdd} = props;

    const handleItem = (event) => {
        event.preventDefault();
        onAdd({id: v4(), description: event.target.description.value})
        event.target.description.value = '';
    }

    return (
        <form action="#" className="form" onSubmit={handleItem}>
            <input type="text" name="description" className="form__input"/>
            <Button text="Добавить"/>
        </form>
    )
}

export default Form