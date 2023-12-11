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
const GameDetail = ({language})=>{

    return(
        <section>
            <img src={gamesImg[1]} style={{marginTop:'1em'}}  alt="game banner" />
            <p style={{color:'white'}}>{language === 'ES' ? pregunta : ask}</p>
            <p style={{color:'white'}}>{language === 'ES' ? respuesta : answer}</p>
            <section style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={conquista} alt='conquista' />: <img src={conquest} alt='conquest' />}
                <section style={{display:"flex", flexDirection:"row"}}>
                    <div style={{color:'whitesmoke', marginRight:'0.75em'}}>{language === 'ES' ? invocaTropas.map(texto=><p>{texto}</p>) : summonTroops}</div>
                    <img src={conquistaEdif} style={{width:'30rem'}} alt="conquer buildings" />
                </section>
            </section>
            <section style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={invasion} alt="Invade mapas" />: <img src={invation} alt="Invade maps" />}
                <section style={{display:"flex", flexDirection:"row"}}>
                    <div style={{color:'white', marginTop:'0.25em', marginRight:'.5em'}}>{language === 'ES' ? invadeMapas.map(texto=> <p>{texto}</p>) : invadeMaps}</div>
                    <img src={mapas} style={{width:'30rem'}} alt="invade maps" />
                </section>
            </section>
            <section style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={mejoras} alt="Mejora y actualiza" />: <img src={updates} alt="Updates and unlocks" />}
                <section style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? mejoraText : updatesText}</p>
                    <img src={mejorasGif} style={{width:'30rem'}} alt="update and unlock" />
                </section>
            </section>
            {/* conquista */}
            <section style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={mapasEs} alt="mapa esp" />: <img src={mapasEn} alt="map En" />}
                <section style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? conquistaYDefiende : conquestAndDeffend}</p>
                    <img src={mapaGif} style={{width:'30rem'}} alt="defend and conquer map" />
                </section>
            </section>
            <section style={{color:'white'}}>
                {language === 'ES' ? <h1>{sistRequisitos}</h1> : <h1>{sisRequirements}</h1>}
                <section>
                    <ul style={{color:'white'}}>
                        {language=== 'ES' ? requisitosEs.map((requisito)=><p>{requisito}</p>): requisitosEn.map((requisito)=><p>{requisito}</p>)}
                    </ul>
                </section>
            </section>



        </section>
    )
}

export default GameDetail