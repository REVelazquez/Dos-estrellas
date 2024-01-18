
import GameSelect from "../../extras/GameSelect/GameSelect"
import { DetailCountless } from "../../extras"
import Style from './Games.module.css'

const Games= ({language, handleGames, games})=>{
    

    return(
        <div className={Style.container}>
            <GameSelect handleGames={handleGames} />
            <section className={Style.space}></section>
            {games === 1 && <DetailCountless language={language} />}
        </div>
    )
}

export default Games