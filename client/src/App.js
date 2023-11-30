import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Contact, Home, Games, News, Error } from './components/views';
import { NavBar, Footer } from './components/extras/index'
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
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      {location.pathname !== '/error' && <Footer/>}
    </div>
  );
}

export default App;
