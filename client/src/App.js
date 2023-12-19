import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Contact, Home, Games, News, Error, About, NewsDetail } from './components/views';
import { NavBar, Footer, Top } from './components/extras/index'
import { useState } from 'react';

const App= () => {
  const navigate= useNavigate()
  const location=useLocation()

  const localLanguage= navigator.language.toLocaleLowerCase()

  const [language, setLanguage]= useState(localLanguage.startsWith('es')?'ES':'EN')

  const changeLanguageEN= ()=>{
    setLanguage('EN')
  }
  const changeLanguageES= ()=>{
    setLanguage('ES')
  }
  return (
    <div className="App">
      {location.pathname !== '/error' && <NavBar
      language= {language}
      changeLanguageEN={changeLanguageEN}
      changeLanguageES={changeLanguageES}

      />}
      <Routes>
        <Route path='/'  element={<Home language={language} />} />
        <Route path='/contact'  element={<Contact language={language} />} />
        <Route path='/games'  element={<Games language={language} />} />
        <Route path='/news'  element={<News language={language} />} />
        <Route path='/news/:id' element={<NewsDetail language={language} />} />
        <Route path='/about'  element={<About language={language} />} />
        <Route path='/*'  element={<Error/>} />
      </Routes>
      {location.pathname !== '/error' && <Top />}
      {location.pathname !== '/error' && <Footer language={language} />}
    </div>
  );
}

export default App;
