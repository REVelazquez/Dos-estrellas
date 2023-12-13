import { useNavigate } from "react-router"
import Style from './Navbar.module.css'
import { NavLink } from "react-router-dom"

import { company } from "../../../data/img"

const NavBar = ({language, changeLanguageEN, changeLanguageES})=>{

    const navigate=useNavigate()

    return(
        <nav className={Style.nav}>
            <NavLink to='/'>
            <img className={Style.img} src={company[0]} alt="" />
            </NavLink>
            <button className={Style.navButtons} onClick={()=>navigate('/News')}>{language === 'ES' ? 'Noticias': 'News'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/games')}>{language === 'ES' ? 'Juegos' : 'Games'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/contact')}>{language === 'ES' ? 'Contacto': 'Contact'}</button>
            <button className={Style.languageButtons} disabled= {language === 'ES' && true} onClick={()=>changeLanguageES()}>ES</button>
            <button className={Style.languageButtons} disabled= {language === 'EN' && true} onClick={()=>changeLanguageEN()}>EN</button>
        </nav>
    )
}

export default NavBar