/*
 * Card Component.
*/
import CardImage from '../Popup/components/ImagePopup/ImagePopup'

export default function Card(props) {
    const { _id, name, link, isLiked } = props.card;
    const { onOpen, onCardLike, onCardDelete } = props;

    const imageComponent = { title: null, children: <CardImage card={props.card} /> };

    const cardLikeButtonClassName = `card__like-button ${
        isLiked 
            ? 'card__like-button_is-active' 
            : ''
    }`;

    return(
        <li className="card">
            {
                //Card Header
            }
            <img 
                className="card__image" 
                src={link} 
                alt="" 
                onClick={() => onOpen(imageComponent)} 
            />
            <button 
                aria-label="Delete Card"
                className="card__delete-button"
                type="button"
                onClick={() => onCardDelete(_id)}
            />

            {
                //Card Footer
            }
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button
                    aria-label="Like card"
                    className={cardLikeButtonClassName}
                    type="button"
                    onClick={() => onCardLike(_id, isLiked)}
                />
            </div>
        </li>
    );
}