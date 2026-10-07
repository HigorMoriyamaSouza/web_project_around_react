import { useState, useContext } from "react"
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

/*
 * Avatar Edition Popup Component.
*/
export default function EditAvatar() {
    const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);
    const [avatar, setAvatar] = useState(currentUser.avatar);
    
    const handleAvatarChange = event => setAvatar(event.target.value); 

    const handleSubmit = event => {
        event.preventDefault();
        handleUpdateAvatar(avatar);
    }

    return(
        <form 
            className="popup__form" 
            name="avatar-form"
            id="edit-avatar-form"  
            onSubmit={handleSubmit}
        >
            
            {
                //New Avatar URL Field
            }
            <label className="popup__field">
                <input
                    className="popup__input popup__input-avatar popup__input_type_url"
                    id="avatar-link"
                    name="link"
                    placeholder="Avatar link"
                    required
                    type="url"
                    value={avatar}
                    onChange={handleAvatarChange}
                />
                <span className="popup__input-error link-input-error"></span>
            </label>

            <button className="button popup__button" type="submit">Save</button>
        </form>
    );
}