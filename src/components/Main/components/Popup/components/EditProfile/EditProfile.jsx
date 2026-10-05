import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

/*
 * Profile Edition Popup Component.
*/
export default function EditProfile() {
    const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    const handleNameChange = event => setName(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        handleUpdateUser(name, description);
    }

    return(
        <form 
            className="popup__form" 
            name="card-form"
            id="edit-profile-form"
            onSubmit = {handleSubmit}
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
                    value={name}
                    onChange={handleNameChange}
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
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <span className="popup__input-error description-input-error"></span>
            </label>

            <button className="button popup__button" type="submit">Save</button>
        </form>
    );
}