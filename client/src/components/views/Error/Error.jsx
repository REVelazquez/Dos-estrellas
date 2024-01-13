import { useNavigate } from "react-router"
import { errorPage } from "../../../data/img"
const Error = ()=>{
    const navigate =useNavigate()
    return (
        <div style={{minHeight:'75vh'}}>
            <img style={{marginTop:'5em'}} src={errorPage} alt="" />
            <h1 style={{color:'yellow'}}>U shouldn't be here</h1>
            <button onClick={()=>navigate('/')} >Go Home</button>
        </div>
    )
}

export default Error