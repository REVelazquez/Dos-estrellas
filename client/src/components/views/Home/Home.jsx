import { NewsCarrousel } from "../../extras"
import Style from './Home.module.css'

const Home = ({language})=>{

    return(
        <div className={Style.container}>
            <h2 className={Style.tittle}>{language === 'ES' ? 'Nuestros juegos' : 'Our games'}</h2>

            <h2 className={Style.tittle}>{language === 'ES' ? 'Ultimas noticias' : 'Latest news'}</h2>
            <NewsCarrousel language={language} />
        </div>
    )
}

export default Home