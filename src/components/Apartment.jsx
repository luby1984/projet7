import React from 'react';
import "./Apartment.scss";
import { Link } from 'react-router-dom';

function Apartment({ id, imageUrl, title }) {
  return (
    <Link to={`/flat/${id}`}> {/* Inserisci l'ID come parte della path */}
      <div className="apartment">
        <img src={imageUrl} alt={title} />
        <div className="apartment__subtitle">{title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
