import { games, futureGames } from "../../../data/docs/games"
import { FaSteam } from "react-icons/fa";
import Style from './GamesCarrousel.module.css'

const GamesCarrousel = ({language}) => {
    const currentElements = games
    
    return (
        <div className={Style.wrapper}>
            {currentElements.map(item => (
                <section key={'Game='+ item.name} className={Style.container} >
                    <img className={Style.image} src={item.image} alt={item.name} />
                    <section className={Style.texts}>
                    <article>
                        <h2 className={Style.tittle}>{language === 'ES' ? 'Genero:' : 'Genre:' }</h2>
                        <h3 className={Style.genre} >{language === 'ES' ? item.genero : item.genre}</h3>
                    </article>
                    <section>
                        <button className={Style.button}>{language === 'ES' ? 'Ver más..' : 'See more...'}</button>
                        <a className={Style.steam} href={item.steamPage} target="_blank" rel="noopener noreferrer">
                            <FaSteam />
                        </a>
                    </section>

                    </section>
                </section>
            ))}
        </div>
    );
}

export default GamesCarrousel;
