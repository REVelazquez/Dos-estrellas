import { games } from '../../../data/docs/games'
import Style from './GameSelect.module.css'
const GameSelect = ({handleGames})=>{

    const currentGames=games.filter(game=>game.id!==0)
    return( 
    <>
    <section className={Style.section} >
    {currentGames.map(game=>
        <button onClick={()=>handleGames(game.id)} className={Style.button}>
            <img src={game.image} className={Style.imgButton} alt="" />
        </button>
    )}
    </section>
    </>
    )
}

export default GameSelect