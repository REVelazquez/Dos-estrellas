import { useEffect, useState } from 'react';
import { noticias } from '../../../data/docs/news';
import { NavLink } from 'react-router-dom';
import Style from './NewsCarrousel.module.css'

const NewsCarrousel = ({ language }) => {
    const lastNews = noticias.sort((a, b) => b.id - a.id).slice(0, 5);
    
    const [currentNew, setCurrentNew]=useState(0)
    const [timeElapsed, setTimeElapsed]=useState(0)

    const handleNext= ()=>{
        let futureNew= 0
        if (currentNew !== lastNews.length-1){
            futureNew= currentNew+1
            setCurrentNew(futureNew)
        }else if (currentNew === lastNews.length-1){
            setCurrentNew(0)
        }
    }

    const handlePrev= ()=>{
        let pastNew=0
        if (currentNew !== 0){
            pastNew=currentNew-1
            setCurrentNew(pastNew)
        }else if(currentNew === 0){
            pastNew=lastNews.length-1
            setCurrentNew(pastNew)
        }
    }

    const handleUnique= (index)=>{
        setCurrentNew(index)
    }

    useEffect(()=>{
        let interval=setInterval(()=>{
            setCurrentNew((prev) => (prev !== lastNews.length - 1 ? prev + 1 : 0));
            setTimeElapsed(0)
        }, 10000)
            
        return()=>clearInterval(interval)
    }, [lastNews.length])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeElapsed((prev) => prev + 1000);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeElapsed]);

    const progressBarWidth = (timeElapsed / 10000) * 100 ;

    return (
        <section>
            {noticias[currentNew] &&<div className={Style.container} key={noticias[currentNew].id}>
                <div className={Style.imgAndNew}>
                <img className={Style.img} src={noticias[currentNew].image} alt={language === 'ES' ? noticias[currentNew].tittleEs : noticias[currentNew].tittleEn} />
                    <div className={Style.textContainer}>
                        <h3 className={Style.tittle}>{language === 'ES' ? noticias[currentNew].tittleEs : noticias[currentNew].tittleEn}</h3>
                        <p className={Style.text}>{language === 'ES' ? noticias[currentNew].textEs[0] : noticias[currentNew].textEn[0]}</p>
                        <NavLink className={Style.link} to={`/news/${noticias[currentNew].id}`}><p>{language === 'ES' ? 'Ver más...' : 'See more..'}</p></NavLink>
                    </div>
                </div>
                    <div style={{ width: '50%', height: '5px', backgroundColor: '#ccc' }}>
                    <div
                    style={{
                        width: `${progressBarWidth}%`,
                        height: '100%',
                        backgroundColor: 'blue',
                    }}
                    ></div>
            </div>
                </div>
            }
            {lastNews.length > 1 && <button onClick={handlePrev}>{'<'}</button>}
            {lastNews.map((newItem, index)=><button onClick={()=>handleUnique(index)} key={index}>{'•'}</button>)}
            {lastNews.length > 1 && <button onClick={handleNext}>{'>'}</button>}
        </section>
    );
};

export default NewsCarrousel;
