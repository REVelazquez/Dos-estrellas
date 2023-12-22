import { useNavigate, useParams } from "react-router"
import { noticias } from "../../../data/docs/news"
import Style from './NewsDetail.module.css'


const NewsDetail = ({language})=>{
    const navigate= useNavigate()
    const {id} = useParams()

    const selectedNew = noticias.find(noticia => noticia.id === +id)
    const handleButton = ()=>{
        navigate('/news')
    }

    return(
        <div style={{display:"flex", flexDirection:'column'}}>
            <button className={Style.button} onClick={handleButton}>{language === 'ES' ? 'Atras' : 'Go back'}</button>
            <section className={Style.section} style={{color:'whitesmoke'}}>
                <img className={Style.img} src={selectedNew.image} />
                {language === 'ES' ? <h1 className={Style.tittle} >{selectedNew.tittleEs}</h1> : <h1 className={Style.tittle} >{selectedNew.tittleEn}</h1>}
                {language === 'ES' ? selectedNew.textEs.map(parrafo=><p className={Style.text}>{parrafo}</p>) : selectedNew.textEn.map(parrafo=><p>{parrafo}</p>)}
            </section>
        </div>
    )
}

export default NewsDetail