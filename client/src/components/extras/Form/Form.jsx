import { useState } from "react"
import { Validation } from "./Validation"

const Form = ({language, handleMessage})=>{

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
        if (selectedValue !== 'None' && selectedValue!== 'Contacto comercial'){
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

        setError((prevError) => ({
            ...prevError,
            [name]: Validation({ ...inputs, [name]: value }, language)[name],
        }));

        setDisable(!(inputs.email && inputs.message && inputs.tittle));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        try {
            const finalTitle = selectedGame ? `${selectedCategory} - ${selectedGame}: ${inputs.tittle}` : `${selectedCategory} - ${inputs.tittle}`;
            setInputs({
                ...inputs,
                tittle:finalTitle
            })
            if(error.email || error.message || error.tittle){
                if(language === 'ES'){
                    alert('Tienes algo equivocado')
                }else{
                    alert('You have something wrong')
                }
            }
            handleMessage()
        } catch (error) {
            console.error('Error en la solicitud', error)
        }
        console.log(inputs)
    }

    return(
        <form onSubmit={handleSubmit} style={{color:'white', display:"flex", flexDirection:'column', width:'20em'}}>
            <label htmlFor="Email">Email</label>
            <input onChange={handleOnChange} type="text" name='email' value={inputs.autor} />
            <p>{error.email}</p>
            <section>
                <label htmlFor="">{language === 'ES' ? 'Categoria':'Category'}</label>
                <select name="Categorias" id="CatSelect" onChange={handleSelect1}>
                        <option value="None"> - - - </option>
                        <option value="Problemas con un juego">Problemas con un juego</option>
                        <option value="Se encontro un bug">Encontre un bug</option>
                        <option value="Contacto comercial">Contacto comercial</option>
                </select>
                {gameRelated && 
                    <section>
                        <label htmlFor="Juego">Juego</label>
                        <select onChange={handleSelect2} name="Select2" id="GameSelect">
                            <option value="">- - -</option>
                            <option value="Countless Army">Countless Army</option>
                        </select>
                </section>
                }
            </section>
            <label htmlFor="Titulo">Asunto</label>
            <input onChange={handleOnChange} type="text" value={inputs.tittle} name='tittle' />
            <p>{error.tittle}</p>
            <label htmlFor="Mensaje">Mensaje:</label>
            <textarea onChange={handleOnChange} name="message" value={inputs.message} id="" cols="30" rows="10"></textarea>
            <p>{inputs.message.length}/500</p>
            <p>{error.message}</p>
            <button type="submit" disabled={disable} style={{width:'fit-content'}} > Enviar </button>
        </form>
    )
}

export default Form