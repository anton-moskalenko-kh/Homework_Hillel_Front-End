
function Button(props) {
    const { text, click } = props
    return (
        <button className="form__button" onClick={click}>{text}</button>
    )
}

export default Button