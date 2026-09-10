import { useState } from 'react';
import avatar from '../../images/avatar.jpg'
import Popup from './components/Popup/Popup'
import NewCard from './components/Popup/components/NewCard/NewCard'
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';

export default function Main() {
    const [popup, setPopup] = useState(null);

    //Popups:
    const newCardPopup = { title: "New card", children: <NewCard /> };
    const editProfilePopup = { title: "Edit Profile", children: <EditProfile />};
    const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar />};

    const handleOpenPopup = popup => setPopup(popup);
    const handleClosePopup = () => setPopup(null);

    return(
        <main className="content">

          {
            //Profile Section
          }
          <section className="profile page__section">
            <div className="profile__image-container" onClick={() => handleOpenPopup(editAvatarPopup)}>
              <img className="profile__image" src={avatar} alt="Avatar" />
            </div>

            <div className="profile__info">
              <h1 className="profile__title">Custeau</h1>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
              <p className="profile__description">Explorer</p>
            </div>

            <button
                aria-label="Add card"
                className="profile__add-button"
                type="button"
                onClick={() => handleOpenPopup(newCardPopup)}
            ></button>
          </section>

          {
            //Cards Section
          }
          <section className="cards page__section">
            <ul className="cards__list"></ul>
          </section>

          { 
            //Popup Rendering
            popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )
          }
        </main>
    );
}