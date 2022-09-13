import {Button} from "@mui/material";

function ItemButton(props) {
    const { text, click, varient} = props
    return (
        <Button variant={varient} sx={{marginInlineStart: 1, minWidth: 2}} size='small' type='submit' onClick={click}>{text}</Button>
    )
}

export default ItemButton
