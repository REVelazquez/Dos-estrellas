import {countlessText} from "../../../data/docs/countlessArmy"
import { imagenes, gifs } from "../../../data/img/Countless Army"
import CountlessNews from "../CountlessNews/CountlessNews"
import Style from './DetailCountless.module.css'

const DetailCountless = ({language})=>{

    return(
        <section className={Style.mainContainer}>
            <img src={imagenes.banner} className={Style.banner} alt="game banner" />
            <p className={Style.texto}>{language === 'ES' ? countlessText.pregunta : countlessText.ask}</p>
            <p className={Style.texto}>{language === 'ES' ? countlessText.respuesta : countlessText.answer}</p>
            <section className={Style.container}>
                {language === 'ES' 
                ? <h3 className={Style.tittle}>{countlessText.conquista_espanhol}</h3>
                : <h3 className={Style.tittle}>{countlessText.conquista_english}</h3>}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >{language === 'ES' 
                    ? countlessText.invocaTropas.map(texto=> <p className={Style.texto}>{texto}</p>) 
                    : countlessText.summonTroops.map(texto=><p className={Style.texto}>{texto}</p>)}</article>
                    <img  src={gifs.gif1} className={Style.gifs} alt="conquer buildings" />
                </section>
            </section>
            <section className={Style.container}>
                {language === 'ES' 
                ? <h3 className={Style.tittle}>{countlessText.mapas_espanhol}</h3>
                : <h3 className={Style.tittle}>{countlessText.mapas_english}</h3>}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >{language === 'ES' 
                    ? countlessText.invadeMapas.map(texto=> <p className={Style.texto}>{texto}</p>) 
                    : countlessText.invadeMaps.map(texto=><p className={Style.texto}>{texto}</p>)}</article>
                    <img src={gifs.gif2} className={Style.gifs} alt="invade maps" />
                </section>
            </section>
            <section className={Style.container}>
                {language === 'ES' 
                ? <h3 className={Style.tittle}>{countlessText.conquest_mantain_espanhol}</h3>
                : <h3 className={Style.tittle}>{countlessText.conquest_mantain_english}</h3>}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >
                        {language=== 'ES' 
                        ? countlessText.mejoraText.map(texto=><p className={Style.texto}>{texto}</p>)
                        : countlessText.updatesText.map(texto=><p className={Style.texto}>{texto}</p>)}
                    </article>
                    <img src={gifs.gif4} className={Style.gifs} alt="update and unlock" />
                </section>
            </section>
            {/* conquista */}
            <section className={Style.container}>
                {language === 'ES' 
                ? <h3 className={Style.tittle}>{countlessText.mapas_espanhol}</h3>
                : <h3 className={Style.tittle}>{countlessText.mapas_english}</h3>}
                <section className={Style.containerDetails} >
                    <article className={Style.articles} >
                        {language === 'ES' 
                        ? countlessText.conquistaYDefiende.map(text=><p className={Style.texto}>{text}</p>) 
                        : countlessText.conquestAndDeffend.map(text=><p className={Style.texto}>{text}</p>)}
                    </article>
                    <img src={gifs.gif2} className={Style.gifs} alt="defend and conquer map" />
                </section>
            </section>
            <section className={Style.reqContainer}>
                {language === 'ES' 
                ? <h3 className={Style.tittleReq} >{countlessText.sistRequisitos}</h3> 
                : <h3 className={Style.tittleReq}>{countlessText.sisRequirements}</h3>}
                <section className={Style.requisites} >
                    <ul>
                        {language=== 'ES' 
                        ? countlessText.requisitosEs.map((requisito)=><p className={Style.texto}>{requisito}</p>)
                        : countlessText.requisitosEn.map((requisito)=><p className={Style.texto}>{requisito}</p>)}
                    </ul>
                </section>
            </section>
            <h3 className={Style.tittle} >{language ==='ES' ?'Ultimas noticias relacionadas' :'Last related news'}</h3>
            <CountlessNews language={language} />
        </section>
    )
}

export default DetailCountless