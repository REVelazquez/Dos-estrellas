import { NavLink } from "react-router-dom"
import Style from './NewsCards.module.css'

const NewsCards = ({language, id, category, image, tittleEs, tittleEn, textEs, textEn})=>{
    let selectionClass= Style.section
    let tittleClass= Style.tittle
    let textClass= Style.text
    let linkClass= Style.link
    if (category === 'Countless Army'){
        selectionClass= Style.countlessSection
        tittleClass= Style.countlessTittle
        textClass=Style.countlessText
        linkClass=Style.countlessLink
    }
    return(
        <section className={selectionClass}>
                <div className={Style.container} style={{marginTop:'2em'}}>
                    {image && <img  style={{height:'8em', marginBottom:'0px'}} src={image} alt='Imagen de noticia 1' />}
                    <h3 className={tittleClass}>{language=== 'ES' ? tittleEs : tittleEn}</h3>
                    {language === 'ES' ? <p style={{marginLeft:'.5em', marginRight:'.5em'}}>{textEs[0]}</p> : <p style={{marginLeft:'.5em', marginRight:'.5em'}}>{textEn[0]}</p>}
                        <NavLink to={`/news/${id}`} className={linkClass}>
                    <p>{language === 'ES' ? 'Ver más...' : 'See more...'}</p>
                        </NavLink>
                    </div>   
        </section>
    )
}

export default NewsCards