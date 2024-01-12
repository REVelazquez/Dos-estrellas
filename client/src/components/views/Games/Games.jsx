import {useState } from "react"
// import GameSelect from "../../extras/GameSelect/GameSelect"
import { DetailCountless } from "../../extras"

const Games= ({language})=>{

    const [countless, setCountless]= useState(true)

    // const handleState= ()=>{
    //    setCountless(!countless)
    // }

    return(
        <div>
            {/* <GameSelect handleState={handleState} /> */}
            {countless && <DetailCountless language={language} />}
        </div>
    )
}

export default Games