
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //Custom Hook, que engloba el useState y el UseEffect
    const { images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{category}</h3>
            {
                //si isLoading true sigue al parentesis...
                //Si es false no continua y no lo muestra.
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    //Desestructuramos cada elemento de images.
                    //y enviamos los datos a GifItem...
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url}
                        />
                    ))
                }
            </div>
        </>
    )
}
