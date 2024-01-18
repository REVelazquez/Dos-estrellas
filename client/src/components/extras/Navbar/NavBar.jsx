import { useNavigate } from "react-router"
import Style from './Navbar.module.css'
import { NavLink } from "react-router-dom"

import { company } from "../../../data/img"

const NavBar = ({language, changeLanguageEN, changeLanguageES, handleGames})=>{

    const navigate=useNavigate()

    const handleGamesButton = ()=>{
        handleGames(0)
        navigate('/games')
    }
    const handleNews=()=>{
        handleGames(0)
        navigate('/news')
    }
    const handleAbout=()=>{
        handleGames(0)
        navigate('/about')
    }
    const handleContact=()=>{
        handleGames(0)
        navigate('/contact')
    }

    const handleHome=()=>{
        handleGames(0)
    }

    return(
        <nav className={Style.nav}>
            <section className={Style.buttons}>
            <button className={Style.navButtons} onClick={handleNews}>{language === 'ES' ? 'Noticias': 'News'}</button>
            <button className={Style.navButtons} onClick={handleGamesButton}>{language === 'ES' ? 'Juegos' : 'Games'}</button>
            <NavLink  className={Style.link} to='/' onClick={handleHome}>
            <img className={Style.img} src={company[1]} alt="" />
            </NavLink>
            <button className={Style.navButtons} onClick={handleContact}>{language === 'ES' ? 'Contacto': 'Contact'}</button>
            <button className={Style.navButtons} onClick={handleAbout}>{language === 'ES' ? 'Conocenos': 'About us'}</button>

            </section>
            <section className={Style.langButtons}>

            <button className={Style.languageButtons} disabled= {language === 'ES' && true} onClick={()=>changeLanguageES()}>ES</button>
            <button className={Style.languageButtons} disabled= {language === 'EN' && true} onClick={()=>changeLanguageEN()}>EN</button>
            </section>
        </nav>
    )
}

export default NavBar