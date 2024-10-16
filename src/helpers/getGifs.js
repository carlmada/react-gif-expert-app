
//funcion de get gifs
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tg98xU7PmGykOXLII2V3rUh7tlKru3nl&q=${category}&limit=5`;

    // hacemos la peticion fetch
    const resp = await fetch ( url );

    //desestructuramos la respuesta del server
    // obtenemos un array de imagenes
    const { data } = await resp.json() ;
    

    //creamos el array que queremos de la data recibida
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    return gifs;
}

