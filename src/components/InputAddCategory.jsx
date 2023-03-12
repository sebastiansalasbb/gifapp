import { useState } from "react"

export const InputAddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState("")

    const actualizarInput = (e) => {
        setInputValue(e.target.value)
    }


    const enviarForm = (e) => {
        e.preventDefault();

        if (inputValue.trim().length < 1) {
            return
        }

        setCategories(inputValue)
        setInputValue("")
    }


    return (
        <form onSubmit={enviarForm}>
            <input type="text" value={inputValue}
                onChange={actualizarInput} />
            <button >Agregar</button>
        </form>
    )
}
export default InputAddCategory;


