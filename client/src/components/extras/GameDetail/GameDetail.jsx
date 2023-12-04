import { answer, ask, pregunta, respuesta, invocaTropas, summonTroops, invadeMapas, invadeMaps} from "../../../data/docs/countlessArmy"
import { gamesImg } from "../../../data/img"
import { conquest, conquista, conquistaEdif } from "../../../data/img/conquista"
import { invasion, invation, mapas } from "../../../data/img/invasion/invation"

const GameDetail = ({language})=>{

    return(
        <div>
            <img src={gamesImg[1]} style={{marginTop:'1em'}}  alt="" />
            <p style={{color:'white'}}>{language === 'ES' ? pregunta : ask}</p>
            <p style={{color:'white'}}>{language === 'ES' ? respuesta : answer}</p>
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={conquista} />: <img src={conquest} />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%'}}>{language === 'ES' ? invocaTropas : summonTroops}</p>
                    <img src={conquistaEdif} style={{width:'30rem'}} alt="" />
                </div>
            </div>
            <div style={{display:"flex", flexDirection:'column', marginLeft:'25%', marginRight:'25%'}}>
                {language === 'ES' ? <img src={invasion} />: <img src={invation} />}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{color:'white', marginTop:'15%'}}>{language === 'ES' ? invadeMapas : invadeMaps}</p>
                    <img src={mapas} style={{width:'30rem'}} alt="" />
                </div>
            </div>




        </div>
    )
}

export default GameDetail