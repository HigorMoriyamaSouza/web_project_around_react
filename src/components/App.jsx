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

  //User:
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

  //Cards:
  //Loads cards from the API:
  const [cards, setCards] = useState([]);
  const handlesCardsLoad = () => api.getCards().then(cardsData => setCards(cardsData));
  useEffect(() => { handlesCardsLoad() }, []);

  async function handleAddPlaceSubmit(newCardName, newCardLink) {
    try{
      await api.newCard(newCardName, newCardLink);
    } catch (error) {
      console.log("Error while adding the new card: ", error);
    }
    
    handlesCardsLoad();
    handleClosePopup();
  }

  async function handleCardLike(cardId, isLiked) {
      try{
          isLiked
            ? await api.dislikeCard(cardId) && handlesCardsLoad()
            : await api.likeCard(cardId) && handlesCardsLoad()
      } catch (error) {
          console.log("Error while interacting with the card: ", error);
      }
  } 

  async function handleCardDelete(cardId) {
    try{
        await api.deleteCard(cardId) && handlesCardsLoad();
    } catch (error) {
        console.log("Error while deleting card: ", error);
    }
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
            cards={cards}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  )
}
