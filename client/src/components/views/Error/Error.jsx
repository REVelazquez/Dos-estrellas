import { useNavigate } from "react-router"
import { errorPage } from "../../../data/img"
import Style from './Error.module.css'

const Error = ()=>{
    const navigate =useNavigate()
    return (
        <div className={Style.container}>
            <img className={Style.image} src={errorPage} alt="" />
            <h1 className={Style.text}>U shouldn't be here</h1>
            <button className={Style.button} onClick={()=>navigate('/')} >Go Home</button>
        </div>
    )
}

export default Error