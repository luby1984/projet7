import React, { useState, useEffect } from 'react';
import "./ApartmentGrid.scss";
import Apartment from "./Apartment.jsx";


function ApartmentGrid() {
  const[apartments, setApartments] = useState([]);
  useEffect(fetchApartments, []);
  //useeffect avec une array vide == execute cette fonction ou changement du composant

  function fetchApartments(){
  fetch("logements.json")
  .then((res) => res.json())
  .then((res) => setApartments(res))
  .catch(console.error);
  }
  return (
    <div className="grid">
      {apartments.map((apartment, index) => (
        <Apartment title={apartment.title} imageUrl={apartment.cover}  id={apartment.id}/>
        
      ))}
    </div>
  );
}

export default ApartmentGrid;