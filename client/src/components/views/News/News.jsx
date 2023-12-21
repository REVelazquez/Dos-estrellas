import { noticias } from "../../../data/docs/news"
import { useState } from "react";
import { NewsCards } from "../../extras"
import Style from './News.module.css'

const News = ({language})=>{
    const [filtroCategoria, setFiltroCategoria] = useState('default');

    const handleFiltroChange = (event) => {
        setFiltroCategoria(event.target.value);
    };

    const filteredNoticias = filtroCategoria === 'default'
        ? noticias // Si es 'default', muestra todas las noticias
        : noticias.filter((noticia) => noticia.category === filtroCategoria);

    filteredNoticias.sort((a, b) => b.id - a.id);

    return (<div className={Style.container}>
        {/* filtro u orden? */}
        <section className={Style.filterContainer}>
        <h3 className={Style.filterText}>{language === 'ES' ? 'Filtro: ' : 'Filter: '}</h3>
        <select name="order" id="" onChange={handleFiltroChange} className={Style.select}>

                <option value='default'>{'All'}</option>
                <option value='Countless Army'>{'Countless Army'}</option>
                <option value='general'>{'General'}</option>

        </select>
        </section>
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