import { useEffect, useState, useContext } from 'react'
import Popup from './components/Popup/Popup'
import NewCard from './components/Popup/components/NewCard/NewCard'
import EditProfile from './components/Popup/components/EditProfile/EditProfile'
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar'
import Card from './components/Card/Card'

import { api } from '../../utils/api.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

export default function Main() {
  
    //Popups:
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "New card", children: <NewCard /> };
    const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
    const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };
    
    //Popups Open/Close functions:
    const handleOpenPopup = popup => setPopup(popup);
    const handleClosePopup = () => setPopup(null);

    //Handles Cards:
    const [cards, setCards] = useState([]);
    const handlesCardsLoad = () => api.getCards().then(cardsData => setCards(cardsData));
    useEffect(() => { handlesCardsLoad() }, [] );

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

    //Recovers user data from context: 
    const currentUser = useContext(CurrentUserContext);

    return(
        <main className="content">

          {
            //Profile Section
          }
          <section className="profile page__section">
            <div className="profile__image-container" onClick={() => handleOpenPopup(editAvatarPopup)}>
              <img className="profile__image" src={currentUser.avatar} alt="Avatar" />
            </div>

            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              />
              <p className="profile__description">{currentUser.about}</p>
            </div>

            <button
                aria-label="Add card"
                className="profile__add-button"
                type="button"
                onClick={() => handleOpenPopup(newCardPopup)}
            />
          </section>

          {
            //Cards Section
          }
          <section className="cards page__section">
            <ul className="cards__list">
                {
                    //Cards Rendering 
                    cards.map(card => <Card 
                                        key={card._id} 
                                        card={card} 
                                        onOpen={handleOpenPopup}
                                        onCardLike={handleCardLike}
                                        onCardDelete={handleCardDelete}
                                      />)
                }
            </ul>
          </section>

          { 
            //Popups Rendering
            popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )
          }
        </main>
    );
}