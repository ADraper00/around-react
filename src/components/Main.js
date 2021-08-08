import React from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main(props) {
  const [userName, setIsUserName] = React.useState('');
  const [userDescription, setIsUserDescription] = React.useState('');
  const [userAvatar, setIsUserAvatar] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [cards, setIsCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(({ name, about, avatar }) => {
      setIsUserName(name);
      setIsUserDescription(about);
      setIsUserAvatar(avatar);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  React.useEffect(() => {
    api.getGroupCards().then(data => {
      setIsCards(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-box">
          <div className="profile__avatar-wrapper">
            <img id="avatar" src={userAvatar} alt="avatar" className={`profile__avatar ${isLoading }`} />
            <div onClick={props.onEditAvatarClick} className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__text">
            <div className="profile__text-top">
              <h1 className={`profile__name $${isLoading }`}>{userName}</h1>
              <button onClick={props.onEditProfileClick} type="button" name="Edit profile" className={`profile__edit-button ${isLoading }`} aria-label="Edit profile"></button>
            </div>
            <p className={`profile__title $${isLoading }`}>{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlaceClick} type="button" name="Add image" className={`profile__add-button ${isLoading }`} aria-label="Add image"></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} cardData={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
