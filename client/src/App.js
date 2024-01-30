import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Contact, Home, Games, News, Error, About, NewsDetail } from './components/views';
import { NavBar, Footer, Top } from './components/extras/index'
import { useState } from 'react';

const App= () => {
  const location=useLocation()

  const localLanguage= navigator.language.toLocaleLowerCase()

  const [language, setLanguage]= useState(localLanguage.startsWith('es')?'ES':'EN')
  const [games, setGames]= useState(0)

  const changeLanguageEN= ()=>{
    setLanguage('EN')
  }
  const changeLanguageES= ()=>{
    setLanguage('ES')
  }
  
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto", 
  });
};

  const handleGames = (id)=>{
    if (+id !== games){
      setGames(+id)
    }else{
      setGames(0)
    }
    scrollToTop()
}

  return (
    <div className="App">
      {location.pathname !== '/error' && <NavBar
      language= {language}
      changeLanguageEN={changeLanguageEN}
      changeLanguageES={changeLanguageES}
      handleGames={handleGames}

      />}
      <Routes>
        <Route path='/'  element={<Home language={language} handleGames={handleGames}  />} />
        <Route path='/contact'  element={<Contact language={language} scrollToTop={scrollToTop} />} />
        <Route path='/games'  element={<Games language={language} handleGames={handleGames} games={games}  />} />
        <Route path='/news'  element={<News language={language} />} />
        <Route path='/news/:id' element={<NewsDetail language={language} scrollToTop={scrollToTop} />} />
        <Route path='/about'  element={<About language={language} />} />
        <Route path='/*'  element={<Error language={language} /> } />
      </Routes>
      {location.pathname !== '/error' && <Top />}
      {location.pathname !== '/error' && <Footer language={language} />}
    </div>
  );
}

export default App;
