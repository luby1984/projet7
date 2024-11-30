import React from 'react'
import "./Apartment.scss"
import { Link } from 'react-router-dom';

function Apartment({ id, imageUrl, title }) {
  const state = { apartmentId: id };
   console.log("Navigating with state:", state);

  return (
    <Link to={`/flat/${id}`}>
      <div className="apartment">
        <img src={imageUrl} alt={title} />
        <div className="apartment__subtitle">{title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
