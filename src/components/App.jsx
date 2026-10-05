import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import { useState, useEffect } from 'react'
import { api } from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

export default function App() {

  //Popups:
  const [popup, setPopup] = useState(null);

  //Popups Open/Close functions:
  const handleOpenPopup = popup => setPopup(popup);
  const handleClosePopup = () => setPopup(null);

  //Loads user data from the api for the User Context: 
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo().then(userData => setCurrentUser(userData));
  }, []);

  function handleUpdateUser(newUserName, newUserAbout) {
    api.setUserInfo(newUserName, newUserAbout).then(newUserData => {
      setCurrentUser(newUserData);
      handleClosePopup();
    }); 
  }

  function handleUpdateAvatar(newAvatar) {
    api.setUserAvatar(newAvatar).then(newUserData => {
      setCurrentUser(newUserData);
      handleClosePopup();
    });
  }

  return (
    <>
      <div className="page__content">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  )
}
