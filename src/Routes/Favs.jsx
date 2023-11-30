import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { favorites, theme } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {favorites.map(fav => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;


