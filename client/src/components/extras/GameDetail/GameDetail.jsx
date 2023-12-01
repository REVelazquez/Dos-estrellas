import { answer } from "../../../data/docs/countlessArmy"
import { ask } from "../../../data/docs/countlessArmy"
import { pregunta } from "../../../data/docs/countlessArmy"
import { respuesta } from "../../../data/docs/countlessArmy"
import { gamesImg } from "../../../data/img"

const GameDetail = ({language})=>{

    return(
        <div>
            <img src={gamesImg[1]} alt="" />
            <p style={{color:'white'}}>{language === 'ES' ? pregunta : ask}</p>
            <p style={{color:'white'}}>{language === 'ES' ? respuesta : answer}</p>
            <p></p>
        </div>
    )
}

export default GameDetail