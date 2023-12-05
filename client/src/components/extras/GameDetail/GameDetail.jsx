import { answer, ask, conquestAndDeffend, conquistaYDefiende, pregunta, respuesta, invocaTropas, summonTroops, invadeMapas, invadeMaps, mejoraText, updatesText} from "../../../data/docs/countlessArmy"
import { gamesImg } from "../../../data/img"
import { conquest, conquista, conquistaEdif } from "../../../data/img/conquista"
import { invasion, invation, mapas } from "../../../data/img/invasion/invation"
import { updates, mejoras, mejorasGif } from "../../../data/img/updates"
import { mapasEn, mapaGif, mapasEs } from "../../../data/img/mapa"
const GameDetail = ({language})=>{

    return(
        <div>
            <img src={gamesImg[1]} style={{marginTop:'1em'}}  alt="game banner" />
            <p style={{color:'white'}}>{language === 'ES' ? pregunta : ask}</p>
            <p style={{color:'white'}}>{language === 'ES' ? respuesta : answer}</p>
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={conquista} alt='conquista' />: <img src={conquest} alt='conquest' />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? invocaTropas : summonTroops}</p>
                    <img src={conquistaEdif} style={{width:'30rem'}} alt="conquer buildings" />
                </div>
            </div>
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={invasion} alt="Invade mapas" />: <img src={invation} alt="Invade maps" />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? invadeMapas : invadeMaps}</p>
                    <img src={mapas} style={{width:'30rem'}} alt="invade maps" />
                </div>
            </div>
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={mejoras} alt="Mejora y actualiza" />: <img src={updates} alt="Updates and unlocks" />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? mejoraText : updatesText}</p>
                    <img src={mejorasGif} style={{width:'30rem'}} alt="update and unlock" />
                </div>
            </div>
            {/* conquista */}
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={mapasEs} alt="mapa esp" />: <img src={mapasEn} alt="map En" />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%', marginRight:'.5em'}}>{language === 'ES' ? conquistaYDefiende : conquestAndDeffend}</p>
                    <img src={mapaGif} style={{width:'30rem'}} alt="defend and conquer map" />
                </div>
            </div>




        </div>
    )
}

export default GameDetail