import { Form } from "../../extras"
const Contact = ({language})=>{
    return(
        <div>
            <h1>Aqui van los contactos</h1>
            <Form language={language} />
        </div>
    )
}

export default Contact