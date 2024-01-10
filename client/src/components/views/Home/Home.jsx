import { NewsCarrousel } from "../../extras"
import Style from './Home.module.css'

const Home = ({language})=>{

    return(
        <div className={Style.container}>
            <h1>Our games</h1>

            <h2>{language === 'ES' ? 'Ultimas noticias' : 'Last news'}</h2>
            <NewsCarrousel language={language} />
        </div>
    )
}

export default Home