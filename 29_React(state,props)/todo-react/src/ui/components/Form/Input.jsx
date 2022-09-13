import {TextField} from "@mui/material";

function Input(props) {
    const {input, meta, typeInput, ...rest} = props
    return (
        <>
            <TextField onChange={input.onChange} value={input.value} {...rest} />
            {meta.error && meta.touched && <p className='error'>{meta.error}</p>}
        </>
    )

}

export default Input