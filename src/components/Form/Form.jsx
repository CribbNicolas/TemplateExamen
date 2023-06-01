const Form = () => {
    return (
        <dialog>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="color">Color</label>
                <input type="text" id="color" />
                <button type="submit">Submit</button>
            </form>
        </dialog>
    )
}

export default Form