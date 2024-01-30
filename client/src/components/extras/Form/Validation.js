const emailVal=/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6})$/
export const Validation=(inputs, language, selectedCategory, selectedGame)=>{

    const errors ={}

    //  Email
    switch(true){
        case !inputs.email:
            if(language === 'ES'){
                errors.email='Este campo es obligatorio'
            }else{
                errors.email='This field is obligatory'
            }
            break;
        case inputs.email.length >40:
            if(language === 'ES'){
                errors.email='El email es muy largo'
            }else{
                errors.email='The email is too long'
            }
            break;
        case !emailVal.test(inputs.email):
            if(language === 'ES'){
                errors.email='Este no es un email valido'
            }else{
                errors.email="This isn't a valid email"
            }
            break;
        default:
            errors.email=''
    }

    //  Asunto
    switch(true){
        case !inputs.tittle:
            if(language=== 'ES'){
                errors.tittle='Debes ingresar un asunto'
            }else{
                errors.tittle='You need a subject'
            }
            break;
        
        case  inputs.tittle.length <5:
            if(language === 'ES'){
                errors.tittle='El asunto es demasiado corto'
            }else{
                errors.tittle='The subject is too short'
            }
            break;
        case selectedCategory:
            if (selectedCategory ==='Contacto comercial'){
                if (inputs.tittle.length - selectedCategory.length >35){
                    if(language === 'ES'){
                        errors.tittle='El asunto es demasiado largo'
                    }else{
                        errors.tittle='The subject is too large'
                    }
                }
            }
            if (selectedCategory !== '' && selectedCategory !== 'Contacto comercial' && selectedGame){
                if (inputs.tittle.length - (selectedCategory.length+selectedGame.length) > 35){
                    if(language === 'ES'){
                        errors.tittle='El asunto es demasiado largo'
                    }else{
                        errors.tittle='The subject is too large'
                    }
            }else if(selectedCategory !== '' && selectedCategory !== 'Contacto comercial' && selectedGame === ''){
                if (language === 'ES'){
                    errors.tittle='Debes seleccionar un juego'
                }else{
                    errors.tittle='You must choose a game'
                }
            }
            }
            break;
        default:
            errors.tittle=''
    }
    //  Mensaje
    switch(true){
        case !inputs.message:
            if (language === 'ES'){
                errors.message='Es necesario que escriba un mensaje'
            }else{
                errors.message='You need to write a message'
            }
            break
        case inputs.message.length > 500:
            if (language === 'ES'){
                errors.message='Tu mensaje es demasiado largo'
            }else{
                errors.message='Yout message is too large'
            }
            break
        case inputs.message.length < 50:
            if (language === 'ES'){
                errors.message='Tu mensaje debe tener al menos 50 caracteres'
            }else{
                errors.message='Your message must have at least 50 characters'
            }
            break
        default:
            errors.message=''
    }

    return errors
    
}