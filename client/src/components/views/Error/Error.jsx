import { errorPage } from "../../../data/img"
const Error = ()=>{
    return (
        <div>
            <img src={errorPage} alt="" />
            <h1 style={{color:'yellow'}}>U shouldn't be here</h1>
        </div>
    )
}

export default Error