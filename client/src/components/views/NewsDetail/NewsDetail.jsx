import { useNavigate, useParams } from "react-router"
import { noticias } from "../../../data/docs/news"
import Style from './NewsDetail.module.css'


const NewsDetail = ({language, scrollToTop})=>{
    const navigate= useNavigate()
    const {id} = useParams()

    const selectedNew = noticias.find(noticia => noticia.id === +id)
    const handleButton = ()=>{
        navigate('/news')
        scrollToTop()
    }

    return(
        <div className={Style.container}>
            <section className={Style.section}>
                <img className={Style.img} src={selectedNew.image} alt={`${selectedNew.tittleEn}`} />
                {language === 'ES' ? <h1 className={Style.tittle} >{selectedNew.tittleEs}</h1> : <h1 className={Style.tittle} >{selectedNew.tittleEn}</h1>}
                {language === 'ES' ? selectedNew.textEs.map(parrafo=><p className={Style.text}>{parrafo}</p>) : selectedNew.textEn.map(parrafo=><p>{parrafo}</p>)}
            </section>
            <button className={Style.button} onClick={handleButton}>{language === 'ES' ? 'Más noticias' : 'More news'}</button>
        </div>
    )
}

export default NewsDetail