
import GameSelect from "../../extras/GameSelect/GameSelect"
import { DetailCountless } from "../../extras"
import Style from './Games.module.css'

const Games= ({language, handleGames, games})=>{

    return(
        <div className={Style.container}>
        {games !== 1 && <GameSelect handleGames={handleGames} />}
        {games !== 0 &&
        <div className={Style.separator}></div>
        }
        <div className={Style.container2}>
            {games !== 0 && <section className={Style.space}></section>}
            {games === 1 && <button className={Style.button} onClick={()=>handleGames(0)}>{language === 'ES' ? 'Volver' : 'Go back'}</button>}
            {games === 1 && <DetailCountless language={language} />}
            </div>
            <div className={Style.separator2}></div>
        </div>
    )
}

export default Games