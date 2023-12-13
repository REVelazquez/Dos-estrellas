import { 
    answer, ask, 
    conquestAndDeffend, conquistaYDefiende, 
    pregunta, respuesta, 
    invocaTropas, summonTroops,
    invadeMapas, invadeMaps, 
    mejoraText, updatesText, 
    requisitosEn, requisitosEs, sisRequirements, sistRequisitos} from "../../../data/docs/countlessArmy"
import { gamesImg } from "../../../data/img"
import { conquest, conquista, conquistaEdif } from "../../../data/img/conquista"
import { invasion, invation, mapas } from "../../../data/img/invasion/invation"
import { updates, mejoras, mejorasGif } from "../../../data/img/updates"
import { mapasEn, mapaGif, mapasEs } from "../../../data/img/mapa"
import Style from './GameDetail.module.css'
const GameDetail = ({language})=>{

    return(
        <section className={Style.mainContainer}>
            <img src={gamesImg[1]} className={Style.banner} alt="game banner" />
            <p className={Style.texto}>{language === 'ES' ? pregunta : ask}</p>
            <p className={Style.texto}>{language === 'ES' ? respuesta : answer}</p>
            <section className={Style.container}>
                {language === 'ES' ? <img src={conquista} className={Style.imgTittle} alt='conquista' />: <img src={conquest}  alt='conquest' />}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >{language === 'ES' ? invocaTropas.map(texto=> <p className={Style.texto}>{texto}</p>) : summonTroops.map(texto=><p className={Style.texto}>{texto}</p>)}</article>
                    <img  src={conquistaEdif} className={Style.gifs} alt="conquer buildings" />
                </section>
            </section>
            <section className={Style.container}>
                {language === 'ES' ? <img src={invasion} className={Style.imgTittle} alt="Invade mapas" />: <img src={invation} className={Style.imgTittle} alt="Invade maps" />}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >{language === 'ES' ? invadeMapas.map(texto=> <p className={Style.texto}>{texto}</p>) : invadeMaps.map(texto=><p className={Style.texto}>{texto}</p>)}</article>
                    <img src={mapas} className={Style.gifs} alt="invade maps" />
                </section>
            </section>
            <section className={Style.container}>
                {language === 'ES' ? <img src={mejoras} className={Style.imgTittle} alt="Mejora y actualiza" />: <img src={updates} className={Style.imgTittle} alt="Updates and unlocks" />}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >
                        {language=== 'ES' ? mejoraText.map(texto=><p className={Style.texto}>{texto}</p>): updatesText.map(texto=><p className={Style.texto}>{texto}</p>)}
                    </article>
                    <img src={mejorasGif} className={Style.gifs} alt="update and unlock" />
                </section>
            </section>
            {/* conquista */}
            <section className={Style.container}>
                {language === 'ES' ? <img src={mapasEs} className={Style.imgTittle} alt="mapa esp" />: <img src={mapasEn} className={Style.imgTittle} alt="map En" />}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >
                        {language === 'ES' ? conquistaYDefiende.map(text=><p className={Style.texto}>{text}</p>) : conquestAndDeffend.map(text=><p className={Style.texto}>{text}</p>)}
                    </article>
                    <img src={mapaGif} className={Style.gifs} alt="defend and conquer map" />
                </section>
            </section>
            <section className={Style.reqContainer}>
                {language === 'ES' ? <h1 className={Style.tittle} >{sistRequisitos}</h1> : <h1 className={Style.tittle}>{sisRequirements}</h1>}
                <section className={Style.requisites} >
                    <ul>
                        {language=== 'ES' ? requisitosEs.map((requisito)=><p className={Style.texto}>{requisito}</p>): requisitosEn.map((requisito)=><p className={Style.texto}>{requisito}</p>)}
                    </ul>
                </section>
            </section>



        </section>
    )
}

export default GameDetail