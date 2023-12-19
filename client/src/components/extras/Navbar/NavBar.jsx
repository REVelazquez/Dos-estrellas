import { useNavigate } from "react-router"
import Style from './Navbar.module.css'
import { NavLink } from "react-router-dom"

import { company } from "../../../data/img"

const NavBar = ({language, changeLanguageEN, changeLanguageES})=>{

    const navigate=useNavigate()

    return(
        <nav className={Style.nav}>
            <section className={Style.buttons}>
            <button className={Style.navButtons} onClick={()=>navigate('/News')}>{language === 'ES' ? 'Noticias': 'News'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/games')}>{language === 'ES' ? 'Juegos' : 'Games'}</button>
            <NavLink  className={Style.link} to='/'>
            <img className={Style.img} src={company[1]} alt="" />
            </NavLink>
            <button className={Style.navButtons} onClick={()=>navigate('/contact')}>{language === 'ES' ? 'Contacto': 'Contact'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/about')}>{language === 'ES' ? 'Conocenos': 'About us'}</button>

            </section>
            <section className={Style.langButtons}>

            <button className={Style.languageButtons} disabled= {language === 'ES' && true} onClick={()=>changeLanguageES()}>ES</button>
            <button className={Style.languageButtons} disabled= {language === 'EN' && true} onClick={()=>changeLanguageEN()}>EN</button>
            </section>
        </nav>
    )
}

export default NavBar