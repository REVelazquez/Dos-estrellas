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

        const categoryHandler = (category) => {
            if (filtroCategoria === category) {
                setFiltroCategoria('default');
            } else {
                setFiltroCategoria(category);
            }
    
            const select = document.getElementById('filterSelect');
            if (select) {
                select.value = filtroCategoria === category ? 'default' : category;
            }
        };

    filteredNoticias.sort((a, b) => b.id - a.id);

    return (<div className={Style.container}>
        {/* filtro u orden? */}
        <section className={Style.filterContainer}>
        <h3 className={Style.filterText}>{language === 'ES' ? 'Filtro: ' : 'Filter: '}</h3>
        <select name="order" id="filterSelect" onChange={handleFiltroChange} className={Style.select}>

                <option className={Style.options} value='default'>{'All'}</option>
                <option className={Style.options} value='Countless Army'>{'Countless Army'}</option>
                <option className={Style.options} value='General'>{'General'}</option>

        </select>
        </section>
        <section className={Style.newsContainer}>

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
                categoryHandler={categoryHandler}
                />)
            })}
            </section>
    </div>)
}

export default News