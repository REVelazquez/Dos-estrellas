import { useState } from "react"
import { Form } from "../../extras"
import { mailEmpresa, presentacion, presentation } from "../../../data/docs/contactos"
const Contact = ({language})=>{
    const [sendMessage, setSendMessage]= useState(false)

    const handleMessage = ()=>{
        setSendMessage(!sendMessage)
    }

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'5px', minHeight:'30.5em'}}>
            <section style={{display:'flex', flexDirection:'column'}}>
                <p style={{fontSize:'medium', color:'white', marginTop:'5px', marginBottom:'0px'}} >{language === 'ES' ? presentacion[0] : presentation[0]}</p>
                <p style={{fontSize:'medium', color:'white', marginTop:'5px', marginBottom:'5px'}} >{language === 'ES' ? presentacion[1] : presentation[1]}</p>
                <button onClick={handleMessage} style={{background:'none', borderStyle:'none', color:'white', fontWeight:'bold', fontSize:'medium', height:'fit-content'}} >{language === 'ES' ? presentacion[2] : presentation[2]}</button>
            </section>
            {sendMessage && <Form language={language} handleMessage={handleMessage} />}
            <section>
                <p style={{color:'white'}}>{language === 'ES' ? presentacion[3] : presentation[3]}</p>
                <a href={`mailto:${mailEmpresa}`} style={{color:'white', textDecoration:'none'}}>{mailEmpresa}</a>
            </section>
        </div>
    )
}

export default Contact