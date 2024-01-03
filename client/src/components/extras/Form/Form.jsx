import { useState } from "react"
import { PiHandEyeLight } from "react-icons/pi"

const Form = ({language})=>{

    const [gameRelated, setGameRelated]= useState(false)
    const [inputs, setInputs]=useState({
        autor:'',
        tittle:'',
        message:''
    })
    
    const [error, setError]=useState({
        name:'',
        tittle:'',
        message:''
    })

    const selection= (value)=>{
        if (value === 'Problemas con un juego' || value === 'Se encontro un bug'){
            setGameRelated(true)
        }else{
            setGameRelated(false)
        }
    }

    const handleSelect1= (event)=>{
        const selectedValue=event.target.value
        selection(selectedValue)
    }
    return(
        <form action="" style={{color:'white', display:"flex", flexDirection:'column', width:'20em', marginLeft:'39.5%'}}>
            <label htmlFor="">Email</label>
            <input type="text" />
            <section>
                <label htmlFor="">{language === 'ES' ? 'Categoria':'Category'}</label>
                <select name="" id="" onChange={handleSelect1}>
                        <option value="None"> - - - </option>
                        <option value="Problemas con un juego">Problemas con un juego</option>
                        <option value="Se encontro un bug">Encontre un bug</option>
                        <option value="Contacto comercial">Contacto comercial</option>
                </select>
                {gameRelated && 
                <select name="" id="">
                    <option value="None">- - -</option>
                    <option value="Countless Army">Countless Army</option>
                </select>
                }
            </section>
            <label htmlFor="">Asunto</label>
            <input type="text" />
            <label htmlFor="">Mensaje:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
    )
}

export default Form