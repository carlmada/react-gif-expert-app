import { useState } from "react"

//Viene las props de la app principal 'setCategories'
export const AddCategory = ( { onNewCategory } ) => {

    //useState
    const [inputValue, setInputValue] = useState('');

    //cuando varía el input
    //desetructuramos el event.target---
    const onInputChange = ({ target }) => {
        //leemos el value del input --event.target.value
        // y lo pasamos al useState
        setInputValue(target.value);
    }

    //metodo onSubmit
    const onSubmit = (event) =>{
        //para evitar el refresco de la pantalla
        event.preventDefault();
        //Comprobacion del input
        // si es menor igual a 1 caracter, salimos sin hacer nada
        if ( inputValue.trim().length<=1) return;

        //ahora desestructuramos el setCategories...
        // y añadimos el input al principio del array
        //setCategories( categories => [inputValue, ...categories ] );
        
        onNewCategory( inputValue.trim() );
        
        //limpiamos el inputValue
        setInputValue('');
    }

    //formulario con metodo on Submit...
    return (
        <form onSubmit={ onSubmit } >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} />
        </form>

    )

} 