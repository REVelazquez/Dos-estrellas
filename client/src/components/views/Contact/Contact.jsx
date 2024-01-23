import { useState } from "react"
import { Form } from "../../extras"
import { mailEmpresa, presentacion, presentation } from "../../../data/docs/contactos"
import Style from './Contact.module.css'

const Contact = ({language})=>{
    const [sendMessage, setSendMessage]= useState(false)

    const handleMessage = ()=>{
        setSendMessage(!sendMessage)
    }

    return(
        <div  className={Style.container}>
            <div className={Style.containerPresent}>
                <p className={Style.presentation1} >{language === 'ES' ? presentacion[0] : presentation[0]}</p>
                <p className={Style.presentation2} >{language === 'ES' ? presentacion[1] : presentation[1]}</p>
            </div>
            <Form language={language} handleMessage={handleMessage} />
            <section>
                <p className={Style.presentation3} >{language === 'ES' ? presentacion[3] : presentation[3]}</p>
                <a className={Style.email} href={`mailto:${mailEmpresa}`} style={{color:'white', textDecoration:'none'}}>{mailEmpresa}</a>
            </section>
            <div className={Style.spacer}></div>
        </div>
    )
}

export default Contact