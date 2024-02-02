import { games, futureGames } from "../../../data/docs/games"
import { FaSteam } from "react-icons/fa";
import Style from './GamesCarrousel.module.css'
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

const GamesCarrousel = ({ language, handleGames }) => {
    const currentElements = games
    const navigate=useNavigate()

    if (currentElements.length <= 1) {
        currentElements.push(futureGames)
    }

    const [currentPost, setCurrentPost] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)

    const handleUnique = (index) => {
        setCurrentPost(index);
        resetTimer();
    }
    
    const handleNext = () => {
        let futurePost = (currentPost + 1) % currentElements.length;
        setCurrentPost(futurePost);
        resetTimer();
    }
    
    const handlePrev = () => {
        let pastPost = (currentPost - 1 + currentElements.length) % currentElements.length;
        setCurrentPost(pastPost);
        resetTimer();
    }

    const resetTimer = () => {
        setTimeElapsed(0);
      };

    useEffect(() => {
        let interval = setInterval(() => {
          setCurrentPost((prev) => (prev !== currentElements.length - 1 ? prev + 1 : 0));
          resetTimer();
        }, 15000);
      
        return () => {
          clearInterval(interval);
          resetTimer(); // Asegúrate de reiniciar el temporizador al limpiar el intervalo.
        };
      }, [currentElements.length, currentPost, timeElapsed]);

    const handleButton = (id)=>{
        navigate('/games')
        handleGames(id)
    }

    return (
        <div className={Style.wrapper}>
          {currentElements.length > 1 && <button className={Style.button} onClick={handlePrev}><IoIosArrowBack /></button>}
          <section>
            <div>

            
            {currentElements[currentPost] && currentElements[currentPost].name !== 'Future projects' ? (
              <div className={Style.container}>
                <img className={Style.image} src={currentElements[currentPost].image} alt={currentPost.name} />
                <section className={Style.texts}>
                  <h2 className={Style.tittle}>{language === 'ES' ? 'Genero:' : 'Genre:'}</h2>
                  <h3 className={Style.genre}>{currentElements[currentPost].genre}</h3>
                  <section className={Style.buttonSec}>
                    <button className={Style.buttonDetail} onClick={()=>handleButton(currentElements[currentPost].id)} >{language === 'ES' ? 'Detalles' : 'Details'}</button>
                    <a href={currentElements[currentPost].steamPage} target="_blank"  rel="noopener noreferrer"   className={Style.steam}>{<FaSteam/>}</a>
                  </section>
                </section>
              </div>
            ) : (
              <div>
                <h2 className={Style.tittle}>
                  {language === 'ES' ? currentElements[currentPost].textEs : currentElements[currentPost].textEn}
                </h2>
                <h3 className={Style.genre}>
                  {language === 'ES' ? currentElements[currentPost].text2Es : currentElements[currentPost].text2En}
                </h3>
              </div>
            )}
            </div>
            <div className={Style.pointsContainer}>
              {currentElements.map((newItem, index) => (
                <button disabled={currentPost === index} className={Style.pointButton} onClick={() => handleUnique(index)} key={index}>{'•'}</button>
              ))}
            </div> 
          </section>
          {currentElements.length > 1 && <button className={Style.button} onClick={handleNext} ><IoIosArrowForward/></button>}
        </div>
      );
}

export default GamesCarrousel
