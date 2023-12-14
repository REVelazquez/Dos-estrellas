import Style from './Footer.module.css'
import { copyEN, copyES, ayuda, help } from '../../../data/docs/footer'
import { company } from '../../../data/img'
import { NavLink, useNavigate} from 'react-router-dom'

const Footer = ({language})=>{
    const navigate= useNavigate()

    const handleButton= ()=>{
        navigate('/')
    }

    return(
        <div className={Style.container}>
            <section className={Style.section}>
                <button className={Style.link} onClick={handleButton}>
                    <img src={company[0]} className={Style.logo} alt="" />
                </button>
                <section className={Style.section2}>

                {language === 'ES' ? <h3 className={Style.tittle}>{ayuda}<NavLink to='/contact' className={Style.contact2}>Contactanos!</NavLink></h3>
                : <h3 className={Style.tittle}>{help}<NavLink to='/contact' className={Style.contact2}>Contact us!</NavLink></h3>}
                {language === 'ES' ? <h3 className={Style.tittle} >Nuestras redes:</h3> : <h3 className={Style.tittle} >Our socials:</h3>}
                </section> 
            </section>
            {language === 'ES' ? <p className={Style.copy} >{copyES}</p> 
            :<p className={Style.copy} >{copyEN}</p> }
        </div>
    )
}

export default Footer