import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import { useState, useEffect } from 'react'
import { api } from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

export default function App() {

  //Loads user data from the api for the User Context: 
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo().then(userData => setCurrentUser(userData));
  }, []);

  return (
    <>
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  )
}
