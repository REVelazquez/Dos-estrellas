import { presentacionEn, presentacionEs } from "../../../data/docs/about"
import Style from './About.module.css'

const About = ({language})=>{

    return(<div key='aboutCont' className={Style.container}>
        {language === 'ES' ? presentacionEs.map(texto => <h4 className={Style.presentation}>{texto}</h4>) : presentacionEn.map(texto => <h4 className={Style.presentation}>{texto}</h4>) }
    </div>)
}

export default About