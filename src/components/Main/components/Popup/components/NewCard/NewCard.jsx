import {useState} from 'react'

/*
 * New Card Popup Component.
*/
export default function NewCard(props) {
    const [newCardName, setNewCardName] = useState();
    const [newCardLink, setNewCardLink] = useState();

    const handleCardNameChange = event => setNewCardName(event.target.value);
    const handleCardLinkChange = event => setNewCardLink(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        props.onAddPlaceSubmit(newCardName, newCardLink);
    }

    return(
        <form 
            className="popup__form" 
            name="card-form"
            id="new-card-form"
            noValidate
            onSubmit={handleSubmit}
        >
            { 
                //Card Name Field
            }
            <label className="popup__field">
                <input
                    className="popup__input popup__input_type_card-name"
                    id="card-name"
                    maxLength="30"
                    minLength="1"
                    name="card-name"
                    placeholder="Title"
                    required
                    type="text"
                    value={newCardName}
                    onChange={handleCardNameChange}
                />
                <span className="popup__input-error place-name-input-error" id="card-name-error"></span>
            </label>
    
            {
                //Card Link Field
            }
            <label className="popup__field">
                <input
                    className="popup__input popup__input_type_url"
                    id="card-link"
                    name="link"
                    placeholder="Image link"
                    required
                    type="url"  
                    value={newCardLink}
                    onChange={handleCardLinkChange}
                />
                <span className="popup__input-error link-input-error" id="card-link-error"></span>
            </label>

            <button className="button popup__button" type="submit">Create</button>
        </form>
    );
}
