import { answer, ask, pregunta, respuesta, invocaTropas, summonTroops} from "../../../data/docs/countlessArmy"
import { gamesImg } from "../../../data/img"
import { conquest, conquista, conquistaEdif } from "../../../data/img/conquista"

const GameDetail = ({language})=>{

    return(
        <div style={{backgroundColor:'purple'}}>
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




        </div>
    )
}

export default GameDetail