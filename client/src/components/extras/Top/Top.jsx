import { useEffect, useState } from "react"
import Style from './Top.module.css'
import { TiArrowSortedUp } from "react-icons/ti";


const Top = ()=>{
    const [isVisible, setIsVisible]= useState(false)

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
    
        if (scrollTop > 300) { // Cambiar 300 por la cantidad de scroll que desees para mostrar el botón
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      // Manejar el evento de scroll
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      // Ir al inicio de la página
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Animación suave al desplazarse
        });
      };

    return(
        <div className={Style.scrollButton}>
            {isVisible && <button className={Style.scrollToTop} onClick={scrollToTop}>{<TiArrowSortedUp size={30} />}</button>}
        </div>
    )
}

export default Top