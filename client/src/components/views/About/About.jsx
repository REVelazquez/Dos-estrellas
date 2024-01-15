import { presentacionEn, presentacionEs } from "../../../data/docs/about"
import Style from './About.module.css'

const About = ({language})=>{

    return(<div key='aboutCont' className={Style.container}>
        <h4 >{language === 'ES' ? presentacionEs.map(texto => <p>{texto}</p>) : presentacionEn.map(texto => <p>{texto}</p>) }</h4>
    </div>)
}

export default About