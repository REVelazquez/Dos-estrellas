import { noticias } from "../../../data/docs/news";
import Style from "./CountlessNews.module.css"
import { NavLink } from "react-router-dom";
const CountlessNews = ({language}) => {
  const filtratedNews = noticias.filter(noticia => noticia.category === 'Countless Army');

  return (
    <div className={Style.section}>
      {filtratedNews.map((news) => (
        <div  className={Style.container} key={news.id}>
          {news.image && <img className={Style.img} src={news.image} alt={`Imagen de noticia ${news.id}`} />}
          <h3 className={Style.tittle}>{language === 'ES' ? news.tittleEs : news.tittleEn}</h3>
          <p className={Style.text} style={{ marginLeft: '.5em', marginRight: '.5em' }}>
            {language === 'ES' ? news.textEs[0] : news.textEn[0]}
          </p>
          <NavLink to={`/news/${news.id}`} className={Style.link}>
            <p>{language === 'ES' ? 'Ver más...' : 'See more...'}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CountlessNews;
