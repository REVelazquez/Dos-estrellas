import { useNavigate } from "react-router"
import Style from './Navbar.module.css'

const NavBar = ({language, changeLanguageEN, changeLanguageES})=>{

    const navigate=useNavigate()

    return(
        <nav className={Style.nav}>
            <button className={Style.navButtons} onClick={()=>navigate('/')}>{language === 'ES' ? 'Inicio' : 'Home' }</button>
            <button className={Style.navButtons} onClick={()=>navigate('/News')}>{language === 'ES' ? 'Noticias': 'News'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/games')}>{language === 'ES' ? 'Juegos' : 'Games'}</button>
            <button className={Style.navButtons} onClick={()=>navigate('/contact')}>{language === 'ES' ? 'Contacto': 'Contact'}</button>
            <button className={Style.languageButtons} disabled= {language === 'ES' && true} onClick={()=>changeLanguageES()}>ES</button>
            <button className={Style.languageButtons} disabled= {language === 'EN' && true} onClick={()=>changeLanguageEN()}>EN</button>
        </nav>
    )
}

export default NavBar