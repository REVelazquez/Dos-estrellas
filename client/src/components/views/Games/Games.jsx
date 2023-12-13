import {useState } from "react"
// import GameSelect from "../../extras/GameSelect/GameSelect"
import { GameDetail } from "../../extras"

const Games= ({language})=>{

    const [countless, setCountless]= useState(true)

    // const handleState= ()=>{
    //    setCountless(!countless)
    // }

    return(
        <div>
            {/* <GameSelect handleState={handleState} /> */}
            {countless && <GameDetail language={language} />}
        </div>
    )
}

export default Games