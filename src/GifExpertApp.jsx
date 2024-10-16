import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    // hook para el DOM...
    // variable categories , array , valor defecto
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);

        //Comprobar que no esta repetido...
        //Si el array ya incluye el nuevo elemento... salimos.
        if (categories.includes(newCategory)) return;

        // varias formas...
        //setCategories(categories.concat('wolf'));
        //setCategories([...categories, 'Wolf']);
        // para ponerlo al principio seria asi...
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // Otra forma,,, como un event pasado como atributo del event  
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    );

};