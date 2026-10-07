import { useContext } from 'react'
import Popup from './components/Popup/Popup'
import Card from './components/Card/Card'
import NewCard from './components/Popup/components/NewCard/NewCard'
import EditProfile from './components/Popup/components/EditProfile/EditProfile'
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

export default function Main(props) {
  
    //Popups:
    const newCardPopup = { title: "New card", children: <NewCard onAddPlaceSubmit={props.onAddPlaceSubmit} /> };
    const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
    const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

    //Recovers user data from context: 
    const { currentUser } = useContext(CurrentUserContext);

    return(
        <main className="content">

          {
            //Profile Section
          }
          <section className="profile page__section">
            <div className="profile__image-container" onClick={() => props.onOpenPopup(editAvatarPopup)}>
              <img className="profile__image" src={currentUser.avatar} alt="Avatar" />
            </div>

            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => props.onOpenPopup(editProfilePopup)}
              />
              <p className="profile__description">{currentUser.about}</p>
            </div>

            <button
                aria-label="Add card"
                className="profile__add-button"
                type="button"
                onClick={() => props.onOpenPopup(newCardPopup)}
            />
          </section>

          {
            //Cards Section
          }
          <section className="cards page__section">
            <ul className="cards__list">
                {
                    //Cards Rendering 
                    props.cards.map(card => <Card 
                                        key={card._id} 
                                        card={card} 
                                        onOpen={props.onOpenPopup}
                                        onCardLike={props.onCardLike}
                                        onCardDelete={props.onCardDelete}
                                      />)
                }
            </ul>
          </section>

          { 
            //Popups Rendering
            props.popup && (
                <Popup onClose={props.onClosePopup} title={props.popup.title}>
                    {props.popup.children}
                </Popup>
            )
          }
        </main>
    );
}