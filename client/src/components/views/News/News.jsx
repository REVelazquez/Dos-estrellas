import { noticias } from "../../../data/docs/news"
import { useState } from "react";
import { NewsCards } from "../../extras"
const News = ({language})=>{
    const [filtroCategoria, setFiltroCategoria] = useState('default');

    const handleFiltroChange = (event) => {
        setFiltroCategoria(event.target.value);
    };

    const filteredNoticias = filtroCategoria === 'default'
        ? noticias // Si es 'default', muestra todas las noticias
        : noticias.filter((noticia) => noticia.category === filtroCategoria);

    filteredNoticias.sort((a, b) => b.id - a.id);

    return (<div style={{ alignItems:'center'}}>
        {/* filtro u orden? */}
        <select name="order" id="" onChange={handleFiltroChange}>

                <option value='default'>{'All'}</option>
                <option value='Countless Army'>{'Countless Army'}</option>
                <option value='general'>{'General'}</option>

        </select>
        <section style={{display:"flex", flexDirection:'row', height:'29.5em', alignItems:'center'}}>

        {filteredNoticias.map(({id, category, image, tittleEs, tittleEn, textEs, textEn})=>{
            return (
                <NewsCards 
                key={id}
                id={id}
                category={category}
                image={image}
                language={language}
                tittleEs={tittleEs}
                textEs={textEs}
                tittleEn={tittleEn}
                textEn={textEn}
                />)
            })}
            </section>
    </div>)
}

export default News