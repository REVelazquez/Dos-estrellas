import { useNavigate, useParams } from "react-router"
import { noticias } from "../../../data/docs/news"



const NewsDetail = ({language})=>{
    const navigate= useNavigate()
    const {id} = useParams()

    const selectedNew = noticias.find(noticia => noticia.id === +id)
    const handleButton = ()=>{
        navigate('/news')
    }
    console.log(selectedNew)
    return(
        <div style={{display:"flex", flexDirection:'column'}}>
            <button style={{width:'5em', margin:'2em'}} onClick={handleButton}>{language === 'ES' ? 'Atras' : 'Go back'}</button>
            <section style={{width:'35em', marginLeft:'31em', color:'whitesmoke'}}>
                <img style={{height:'10em'}} src={selectedNew.image} />
                {language === 'ES' ? <h1>{selectedNew.tittleEs}</h1> : <h1>{selectedNew.tittleEn}</h1>}
                {language === 'ES' ? selectedNew.textEs.map(parrafo=><p>{parrafo}</p>) : selectedNew.textEn.map(parrafo=><p>{parrafo}</p>)}
            </section>
        </div>
    )
}

export default NewsDetail