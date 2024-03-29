import { useEffect, useState } from "react"
import { Validation } from "./Validation"
import Style from './Form.module.css'

const Form = ({language, handleMessage, scrollToTop})=>{

    const [gameRelated, setGameRelated]= useState(false)
    const [disable, setDisable]=useState(true)
    const [selectedGame, setSelectedGame]=useState('')
    const [selectedCategory, setSelectedCategory]=useState('')

    const [inputs, setInputs]=useState({
        email:'',
        tittle:'',
        message:''
    })
    
    const [error, setError]=useState({
        email:'',
        tittle:'',
        message:''
    })



    const handleSelect1= (event)=>{
        const selectedValue=event.target.value
        setSelectedCategory(selectedValue)
        if (selectedValue !== '' && selectedValue!== 'Contacto comercial'){
            setGameRelated(true)
        }else{
            setGameRelated(false)
            setSelectedGame('')
        }
    }

    const handleSelect2= (event)=>{
        const selectedGameValue = event.target.value;
        setSelectedGame(selectedGameValue);

    }
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    
    }
    useEffect(()=>{
        const validateForm= ()=>{
            const currentErrors= Validation(inputs, language, selectedCategory, selectedGame)
            setError(currentErrors)

            if(inputs.email && inputs.message && inputs.tittle && !currentErrors.message && !currentErrors.email && !currentErrors.tittle){
                setDisable(false)
            }else{
                setDisable(true)
            }
        }
        validateForm()
    }, [inputs, language, selectedCategory, selectedGame])

    const resetForm = () => {
        setGameRelated(false);
        setDisable(true);
        setSelectedGame('');
        setSelectedCategory('');
        setInputs({
            email: '',
            tittle: '',
            message: ''
        });
        setError({
            email: '',
            tittle: '',
            message: ''
        });
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            const finalTittle = selectedGame ? `${selectedCategory} - ${selectedGame}: ${inputs.tittle}` : `${selectedCategory} - ${inputs.tittle}`;
            setInputs({
                ...inputs,
                tittle:finalTittle
            })
            const response = await fetch('https://formspree.io/f/mgegobbj', {method: 'POST', headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(inputs)
            })
            if(response.ok){
                resetForm()
                handleMessage()
            }
        } catch (error) {
            console.error('Error en la solicitud', error)
        }
        setDisable(true)
        scrollToTop()
    }

    return(
        <form onSubmit={handleSubmit} className={Style.form} >
            <label className={Style.labels} htmlFor="Email">Email</label>
            <input className={Style.inputs} onChange={handleOnChange} type="text" name='email' value={inputs.email} />
            <p className={Style.errors}>{error.email}</p>
            <div className={Style.selectCont}>
                <label className={Style.labels} htmlFor="">{language === 'ES' ? 'Categoria':'Category'}</label>
                <select className={Style.select} name="Categorias" id="CatSelect" onChange={handleSelect1}>
                        <option value=""> - - - </option>
                        <option value="Problemas con un juego">{language === 'ES' ? 'Problemas con un juego' : 'Problems with a game' } </option>
                        <option value="Se encontro un bug">{language === 'ES' ? 'Encontre un bug' : 'I find a bug' }</option>
                        <option value="Contacto comercial">{language === 'ES' ? 'Contacto comercial' : 'Business contact' }</option>
                </select>
                {gameRelated && 
                    <section>
                        <label className={Style.labels} htmlFor="Juego">{language === 'ES' ? 'Juego' : 'Game' }</label>
                        <select className={Style.select} onChange={handleSelect2} name="Select2" id="GameSelect">
                            <option value="">- - -</option>
                            <option value="Countless Army">Countless Army</option>
                        </select>
                </section>
                }
            </div>
            <label className={Style.labels} htmlFor="Titulo">{language === 'ES' ?'Asunto': 'Subject'}</label>
            <input className={Style.inputs} onChange={handleOnChange} type="text" value={inputs.tittle} name='tittle' />
            <p className={Style.errors}>{error.tittle}</p>
            <label className={Style.labels} htmlFor="Mensaje">{language === 'ES' ?'Mensaje':'Message'}</label>
            <textarea className={Style.textArea} onChange={handleOnChange} name="message" value={inputs.message} id="" cols="30" rows="10"></textarea>
            <p className={Style.psTA}>{inputs.message.length}/500 <p className={Style.errors}>{error.message}</p></p>
            
            <button type="submit" disabled={disable} className={Style.button} > Enviar </button>
        </form>
    )
}

export default Form