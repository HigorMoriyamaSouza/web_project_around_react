/*
 * New Card Popup Component.
*/
export default function NewCard() {
    return(
        <form 
            className="popup__form" 
            name="card-form"
            id="new-card-form"
            noValidate
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
                />
                <span className="popup__input-error link-input-error" id="card-link-error"></span>
            </label>

            <button className="button popup__button" type="submit">Create</button>
        </form>
    );
}