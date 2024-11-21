import React, { useState } from "react";
import { ApartmentDescription } from "../components/ApartmentDescription.jsx";
import "./ApartmentPage.scss";
import {ApartmentBanner} from "../components/ApartmentBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useLocation } from "react-router-dom";
import  { useEffect } from "react";


function ApartmentPage() {
    const location = useLocation();
    const { apartmentId } = location.state || {};
    console.log("Apartment ID from state", apartmentId);
    console.log("Location state:", location.state?.apartmentId);
    const [selectedFlat, setSelectedFlat] = useState(null);
    useEffect(fetchApartmentData, []);

    function fetchApartmentData() {
    fetch("logements.json")
    .then((res) => res.json())
    .then((flats) =>{
     const flat = flats.find((flat) => flat.id === apartmentId);
     setSelectedFlat(flat);
})
  .catch(console.error);
 
}
if (selectedFlat == null) return <div>...Loading</div>;
  return (
    <div className="apartment-page">
      <ApartmentBanner imageUrl={selectedFlat.cover} />
      <ApartmentHeader  selectedFlat={selectedFlat} />
      
      <div className="apartment__description__area">
     <ApartmentDescription title="Description" content={selectedFlat.description} />
     <ApartmentDescription title="Equipements" content={selectedFlat.equipments} />
     </div>
    </div>
  );
}

export default ApartmentPage;
