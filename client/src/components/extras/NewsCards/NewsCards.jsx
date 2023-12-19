import { NavLink } from "react-router-dom"

const NewsCards = ({language, id, category, image, tittleEs, tittleEn, textEs, textEn})=>{

    return(
        <section style={{width:'12em', height:'31em'}}>
            {image && <img  style={{height:'8em',marginTop:'6em', marginBottom:'0px'}} src={image} alt='Imagen de noticia 1' />}
                <h3 style={{marginTop:'1px'}}>{language=== 'ES' ? tittleEs : tittleEn}</h3>
                {language === 'ES' ? <p>{textEs[0]}</p> : <p>{textEn[0]}</p>}
            <NavLink to={`/news/${id}`} >
                <p>{language === 'ES' ? 'Ver más...' : 'See more...'}</p>
            </NavLink>
            
        </section>
    )
}

export default NewsCards