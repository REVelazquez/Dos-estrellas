import Style from './SendedMessage.module.css'

const SendedMessage = ({language, handleMessage})=>{

    return(
        <div key={'Correct message'} className={Style.container}>
            {language === 'ES'
            ?(
                <div className={Style.textContainer}>
                    <h1 className={Style.tittle}>¡Gracias por ponerte en contacto con nosotros!</h1> 
                    <h2 className={Style.text}>Estaremos respondiendo a la brevedad</h2>
                    <button onClick={()=>handleMessage()} className={Style.button} >Volver</button>
                </div>
            )
            :(
                <div className={Style.textContainer}>
                    <h1 className={Style.tittle}>Thank you for contacting us!</h1>
                    <h2 className={Style.text}>We'll be answering as soon we can</h2>
                    <button onClick={()=>handleMessage()} className={Style.button} >Go back</button>
                </div>
            )
        }
        </div>
    )
}

export default SendedMessage