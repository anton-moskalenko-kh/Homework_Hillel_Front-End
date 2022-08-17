import Button from "./Button";
import {useState} from "react";

function Item(props) {
    const {description, remove, id, checked, checkedItem, update} = props

    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')

    const checkboxChecked = checked ? 'todo-item__desc--underline' : '';
    const todoClassName = ['todo-item__desc', checkboxChecked]

    const handleChecked = () => {
        checkedItem({ id, checked: !checked })
    }

    const handleEditItem = () => {
        setEdit(true)
        setValue(description)
    }

    const handleUpdateItem = () => {
        update({id, value})
        setEdit(false)
    }

    const deleteItem = (event) => {
        event.preventDefault()
        remove(id)
    }
    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <input type="checkbox" onClick={handleChecked} defaultChecked={checked}/>
                { edit ?
                    <div className="update__block">
                        <input type="text" name="description" className="form__input" value={value} onChange={(e) => setValue(e.target.value)}/>
                    </div>
                    :
                    <p className={todoClassName.join(' ')}>{description}</p>
                }
                { edit ? <Button text="Сохранить" click={handleUpdateItem}/>
                    :
                    <>
                        <Button text="Редактировать" click={handleEditItem} />
                        <Button text="Удалить" click={deleteItem}/>
                    </>
                }
            </label>
        </div>
    )
}

export default Item