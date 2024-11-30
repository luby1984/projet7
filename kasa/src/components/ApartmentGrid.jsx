import React, { useState, useEffect } from 'react';
import "./ApartmentGrid.scss";
import Apartment from "./Apartment.jsx";


function ApartmentGrid() {
  const[apartments, setApartments] = useState([]);
  useEffect(() => {
    console.log("component was mounted, we fetch apartments");
    fetchApartments();

    return ( )=> {
   console.log("component was unmonted, we cancel the fetch");
    }
  }, []);
 

  function fetchApartments(){
  fetch("/logements.json")
  .then((res) => res.json())
  .then((res) => setApartments(res))
  .catch(console.error);
  }
  return (
    <div className="grid">
      {apartments.map((apartment, index) => (
        <Apartment title={apartment.title} 
        imageUrl={apartment.cover} 
         id={apartment.id}
        key={apartment.id}/>
        
      ))}
    </div>
  );
}

export default ApartmentGrid;