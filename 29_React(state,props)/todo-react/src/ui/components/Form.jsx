import {v4} from 'uuid';
import {Form, Field} from "react-final-form";

//Material UI
import Input from "./Form/Input";
import ItemButton from "./Button";

function MainForm(props) {
    const {onAdd} = props;

    const handleItem = (event) => {
        onAdd({id: v4(), description: event.description})
        event.description = ''
    }

    const minLengthField = (values) => {
        const errors = {}
        const valueLength = values.description || []
        if (valueLength.length < 5 && values.description !== '') {
            errors.description = "Минимальная длина не менее 5 символов"
        }
        return errors
    }

    return (
        <Form onSubmit={handleItem}
              validate={minLengthField}
              render={(props) => {
                  const {handleSubmit} = props
                  return (
                      <form className="form" onSubmit={handleSubmit}>
                          <Field component={Input} name='description' placeholder={'Enter your task'} className="form__input"/>
                          <ItemButton text="Add task" varient='contained'/>
                      </form>
                  )
              }}
        />
    )
}

export default MainForm