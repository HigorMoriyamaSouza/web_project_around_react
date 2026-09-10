/*
 * Avatar Edition Popup Component.
*/
export default function EditAvatar() {
    return(
        <form 
            className="popup__form" 
            name="avatar-form"
            id="edit-avatar-form"  
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
                />
                <span className="popup__input-error link-input-error"></span>
            </label>

            <button className="button popup__button" type="submit">Save</button>
        </form>
    );
}