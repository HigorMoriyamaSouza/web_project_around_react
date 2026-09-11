/*
 * Card Component.
*/
import CardImage from "../Popup/components/CardImage/CardImage"

export default function Card(props) {
    const { name, link, isLiked } = props.card;
    const { onOpen } = props;

    const imageComponent = { title: null, children: <CardImage card={props.card} /> };

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
            />

            {
                //Card Footer
            }
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button
                    aria-label="Like card"
                    className="card__like-button"
                    type="button"
                />
            </div>
        </li>
    );
}