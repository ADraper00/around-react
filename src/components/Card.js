import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


export default function Card({ cardData, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardData.owner._id === currentUser._id;
  const isLiked = cardData.likes.some(like => like._id === currentUser._id);

  function handleClick() {
    onCardClick(cardData);
  }
  
  function handleLike() {
    onCardLike(cardData);
  }

  function handleDeleteClick() {
    onCardDelete(cardData);
  }

  return (
    <article className="card">
      <img className="card__image" src={cardData.link} alt={`${cardData.name} taken by ${cardData.owner.name}`} onClick={handleClick} />
      <div className="card__name-box">
        <h2 className="card__name">{cardData.name}</h2>
        <div className="card__like-container">
          <button type="button" name="Like image" onClick={handleLike} className={`card__heart ${isLiked && 'card__heart_liked'}`} aria-label="Like photo"></button>
          <p className="card__likes">{cardData.likes.length}</p>
        </div>
      </div>
      <button type="button" name="Delete image" onClick={handleDeleteClick} className={`card__delete ${isOwn ? 'element__delete_visable' : 'card__delete_hidden'}`} aria-label="Delete photo"></button>
    </article>
  );
}
