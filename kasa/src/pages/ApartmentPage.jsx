import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApartmentDescription } from "../components/ApartmentDescription.jsx";
import "./ApartmentPage.scss";
import { ApartmentBanner } from "../components/ApartmentBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { ErrorPageNotFound } from "./ErrorPageNotFound.jsx";

function ApartmentPage() {
  const { id } = useParams(); // Ottieni l'id dalla URL
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id); // Filtra l'appartamento con l'id
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }, [id]);

  if (!selectedFlat) return ErrorPageNotFound;

  return (
    <div className="apartment-page">
      <ApartmentBanner pictures={selectedFlat.pictures} />
      <ApartmentHeader selectedFlat={selectedFlat} />
      <div className="apartment__description__area">
        <ApartmentDescription
          title="Description"
          content={selectedFlat.description}
        />
        <ApartmentDescription
          title="Equipements"
          content={selectedFlat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
