import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Esto es la estructura de un hook..
export const useFetchGifs = (category) => {

    //creamos el useState de las imagenes.
    //esas imagenes van al useState...
    const [images, setImages] = useState([]);

    // mostrar el loading
    const [isLoading, setIsLoading] = useState( true );

    // funcion async para obtener las imagenes y ponerlas en el useState
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        //Cuando acaba de cargar las imagenes...
        setIsLoading( false );
    }

    useEffect(() => {
        // funcion de obtener gifs
        getImages();
    }, []) // este array vacio indica que se renderice una sola vez   

    return {
        //images: images, // mismo nombre es equivalente a esto
        //isLoading: isLoading, // mismo nombre es equivalente a esto
        images, 
        isLoading,
    }

}
