import {gamesImg} from '../../../data/img/index.js'
import Style from './GameSelect.module.css'
const GameSelect = ({handleState})=>{

    return( 
    <>
    <section className={Style.section} >
        <button onClick={()=>handleState()} className={Style.button}>
            <img src={gamesImg[0]} className={Style.imgButton} alt="" />
            {/* si se agregan nuevos elementos hay que tocar estilos nuevamente para que qeude "bien" el "carrusel" */}
        </button>
    </section>
    </>
    )
}

export default GameSelect