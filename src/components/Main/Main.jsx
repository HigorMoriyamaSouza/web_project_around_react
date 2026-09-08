import avatar from '../../images/avatar.jpg'

export default function Main() {
    return(
        <main className="content">

          /*
           * Profile Section
          */
          <section className="profile page__section">
            <div className="profile__image-container">
              <img className="profile__image" src={avatar} alt="Avatar" />
            </div>

            <div className="profile__info">
              <h1 className="profile__title">Custeau</h1>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
              ></button>
              <p className="profile__description">Explorer</p>
            </div>

            <button
                aria-label="Add card"
                className="profile__add-button"
                type="button"
            ></button>
          </section>

          /*
           * Cards Section
          */
          <section className="cards page__section">
            <ul className="cards__list"></ul>
          </section>
        </main>
    );
}