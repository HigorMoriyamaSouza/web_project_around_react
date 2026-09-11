/*
 * Profile Edition Popup Component.
*/
export default function EditProfile() {
    return(
        <form 
            className="popup__form" 
            name="card-form"
            id="edit-profile-form"
        >
            {
                //Profile Name Field
            }
            <label className="popup__field">
                <input
                    className="popup__input popup__input_type_name"
                    id="input-name"
                    maxLength="40"
                    minLength="2"
                    name="name"
                    placeholder="Name"
                    required
                    type="text"
                />
                <span className="popup__input-error name-input-error"></span>
            </label>

            {
                //Profile Description Field 
            }
            <label className="popup__field">
                <input
                    className="popup__input popup__input_type_description"
                    id="input-description"
                    maxLength="200"
                    minLength="2"
                    name="description"
                    placeholder="About me"
                    required
                    type="text"
                />
                <span className="popup__input-error description-input-error"></span>
            </label>

            <button className="button popup__button" type="submit">Save</button>
        </form>
    );
}