
// componente de las targetas de cada item
export const GifItem = ( {title, url} ) => {

    // recibimos las props desde GifGrid.
    // solo necesitamos el title y la url. 
    // creamos las targetas en el html.
    // html (src, title)
    // css "card"
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
