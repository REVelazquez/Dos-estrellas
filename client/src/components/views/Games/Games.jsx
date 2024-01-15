import {useState } from "react"
// import GameSelect from "../../extras/GameSelect/GameSelect"
import { DetailCountless } from "../../extras"
import Style from './Games.module.css'

const Games= ({language})=>{

    const [countless, setCountless]= useState(true)

    // const handleState= ()=>{
    //    setCountless(!countless)
    // }

    return(
        <div className={Style.container}>
            {/* <GameSelect handleState={handleState} /> */}
            {countless && <DetailCountless language={language} />}
        </div>
    )
}

export default Games