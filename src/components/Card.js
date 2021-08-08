import React from 'react';

export default function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <article className="card">
      <img className="card__image" src={cardData.link} alt={`${cardData.name} taken by ${cardData.owner.name}`} onClick={handleClick} />
      <div className="card__name-box">
        <h2 className="card__name">{cardData.name}</h2>
        <div className="card__like-container">
          <button type="button" name="Like image" className="card__heart" aria-label="Like photo"></button>
          <p className="card__likes">{cardData.likes.length}</p>
        </div>
      </div>
      <button type="button" name="Delete image" className="card__delete" aria-label="Delete photo"></button>
    </article>
  );
}
