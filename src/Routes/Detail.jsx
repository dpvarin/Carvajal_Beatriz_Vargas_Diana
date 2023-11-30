import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'


const Detail = () => {
  const { id } = useParams();
  const { data, theme } = useContext(ContextGlobal);

  const dentist = data.find(user => user.id === parseInt(id));

  return (
    <div className='detail-container'>
      <h1>Detail Dentist</h1>
      {dentist ? (
        <section className='card-detail'>
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </section>
      ) : (
        <p>Dentista no encontrado</p>
      )}
    </div>
  );
};

export default Detail;
