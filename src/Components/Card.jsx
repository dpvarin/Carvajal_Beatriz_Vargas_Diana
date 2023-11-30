import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Components/utils/global.context'

const Card = ({ name, username, id }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(ContextGlobal);

  const isFavorite = (favorites || []).some(fav => fav.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites({ id, name, username });
    } else {
      addToFavorites({ id, name, username });
    }
  };


  return (
    <div className="card">

      <img src="./images/doctor.jpg" alt="Doctor" className="card-img" />
      <p>{name}</p>
      <p>{username}</p>

      <Link to={`/dentist/${id}`} className="detail-link">
        Ver detalle
      </Link>

      <button onClick={handleToggleFavorite} className={`favButton ${isFavorite ? 'favorited' : ''}`}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Card;

