import { about } from "../../../data/docs/about"
import Style from './About.module.css'

const About = ({language})=>{

    return(<div key='aboutCont' className={Style.container}>
        <h2 className={Style.tittle}>Dos estrellas</h2>
        {language === 'ES' ? about.presentacionEs.map(texto => <h4 className={Style.presentation}>{texto}</h4>) : about.presentacionEn.map(texto => <h4 className={Style.presentation}>{texto}</h4>) }
        {language  === 'ES' ? <h2 className={Style.tittle}>Conocenos!</h2> : <h2 className={Style.tittle}>Get to know us!</h2>}
        <section className={Style.container2}>
            {language === 'ES' ? about.membersEs.map(member=> <div className={Style.containerMember}>
                <img src={member.image} alt={`${member.name} img`} className={Style.memberImg} />
                <h2 className={Style.memberName}>{member.name}</h2>
                <h3 className={Style.memberWork}>{member.ocupacion}</h3>
                <div className={Style.tittleAndText}>
                    <h4 className={Style.subtittles}>Generos Favoritos</h4>
                    <h5 className={Style.text2}>{member.generosFavoritos}</h5>
                </div>
                <div className={Style.tittleAndText}>
                    <h4 className={Style.subtittles}>Tematicas Favoritas</h4>
                    <h5 className={Style.text2}>{member.tematicasFavoritas}</h5>
                </div>

            </div>)
            :about.membersEn.map(member=><div className={Style.containerMember}>
                <img src={member.image} alt={`${member.name} img`} className={Style.memberImg} />
                <h2 className={Style.memberName}>{member.name}</h2>
                <h3 className={Style.memberWork}>{member.ocupacion}</h3>
                <div className={Style.tittleAndText}>
                    <h4 className={Style.subtittles}>Favorite Genres</h4>
                    <h5 className={Style.text2}>{member.generosFavoritos}</h5>
                </div>
                <div className={Style.tittleAndText}>
                    <h4 className={Style.subtittles}>Favorite Tematics</h4>
                    <h5 className={Style.text2}>{member.tematicasFavoritas}</h5>
                </div>
            </div>)
            }
        </section>
    </div>)
}

export default About