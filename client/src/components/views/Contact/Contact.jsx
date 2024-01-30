import { useState } from "react"
import { Form, SendedMessage } from "../../extras"
import { mailEmpresa, presentacion, presentation } from "../../../data/docs/contactos"
import Style from './Contact.module.css'

const Contact = ({language, scrollToTop})=>{
    const [sentMessage, setSentMessage]= useState(false)

    const handleMessage = ()=>{
        setSentMessage(!sentMessage)
        scrollToTop()
    }


    return(
        <div  className={Style.container}>
            {sentMessage ? 
                <SendedMessage language={language} handleMessage={handleMessage} /> :
                (
                    <div>
                        <div className={Style.containerPresent}>
                            <p className={Style.presentation1}>{language === 'ES' ? presentacion[0] : presentation[0]}</p>
                            <p className={Style.presentation2}>{language === 'ES' ? presentacion[1] : presentation[1]}</p>
                        </div>
                        <Form language={language} handleMessage={handleMessage} scrollToTop={scrollToTop} />
                        <section>
                            <p className={Style.presentation3}>{language === 'ES' ? presentacion[3] : presentation[3]}</p>
                            <a className={Style.email} href={`mailto:${mailEmpresa}`} style={{ color: 'white', textDecoration: 'none' }}>{mailEmpresa}</a>
                        </section>
                    </div>
                )
            }
            <div className={Style.spacer}></div>
        </div>
    )
}

export default Contact