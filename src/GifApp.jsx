import { useState } from "react";
import InputAddCategory from "./components/InputAddCategory";
import GifGrid from "./components/GifGrid";



export const GifApp = () => {
    const [categories, setCategories] = useState([])

    const agregar = (E) => setCategories([E])




    return (
        <>
            <h1>Gift App</h1>
            <InputAddCategory setCategories={agregar} />

            <ul>
                {
                    categories.map((e) =>
                        <GifGrid key={e} categories={e} />)
                }
            </ul>
        </>
    )
}

export default GifApp;