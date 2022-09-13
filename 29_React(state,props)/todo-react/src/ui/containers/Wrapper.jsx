import {useEffect, useState} from "react";
import MainForm from "../components/Form";
import Item from "../components/Item";
import {Input} from "@mui/material";

import ErrorBoundary from "./ErrorBoundary";

function Wrapper() {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('items')) || []);
    }, [])

    const addItem = ({id, description}) => {
        const newItems = [...items, {id, description}];
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const updateItem = ({id, value}) => {
        const saveItem = items.map(item => {
            if (item.id === id) {
                item.description = value;
            }
            return item;
        });
        setItems(saveItem)
    }

    const checkedItem = ({id, checked}) => {
        const updateItems = items.map(item => {
            if (item.id === id) {
                item.checked = checked;
            }
            return item;
        });
        setItems(updateItems)
        localStorage.setItem('items', JSON.stringify(updateItems))
    }

    return (
        <ErrorBoundary>
            <div className="container">
                <MainForm onAdd={addItem}/>
                <h2>Your Tasks:</h2>
                <div className="todos-wrapper">
                    {items.map(item => <Item key={item.id}
                                             checkedItem={checkedItem}
                                             update={updateItem}
                                             checked={item.checked}
                                             id={item.id}
                                             remove={removeItem}
                                             description={item.description}
                        />
                    )}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default Wrapper