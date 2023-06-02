const Button = ({message = ""}) => {
    const clicked = () => {
        console.log('you clicked me!')
    }

return (
    <Button className="button" onClick={clicked}>
        <h2 className="button_text">{message}
        </h2>
    </Button>
)
}