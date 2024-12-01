import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApartmentDescription } from "../components/ApartmentDescription.jsx";
import "./ApartmentPage.scss";
import { ApartmentBanner } from "../components/ApartmentBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";

function ApartmentPage() {
  const { id } = useParams(); // Ottieni l'ID dall'URL
  const navigate = useNavigate(); // Per il reindirizzamento
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Stato per il caricamento

  useEffect(() => {
    let isMounted = true; // Flag per prevenire aggiornamenti non necessari

    console.log("Fetching data for ID:", id);
    fetch("/logements.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("File logements.json non trovato");
        }
        return res.json();
      })
      .then((flats) => {
        console.log("Fetched flats:", flats);
        const flat = flats.find((flat) => String(flat.id) === String(id));
        if (!flat) {
          console.warn("ID non trovato, reindirizzamento a 404...");
          if (isMounted) navigate("/404", { replace: true });
        } else {
          console.log("Flat trovato:", flat);
          if (isMounted) setSelectedFlat(flat);
        }
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        if (isMounted) navigate("/404", { replace: true });
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false; // Cleanup
    };
  }, [id, navigate]);

  // Se il caricamento è ancora in corso
  if (isLoading) {
    return <div className="loading">Caricamento in corso...</div>;
  }

  // Se i dati non sono ancora pronti
  if (!selectedFlat) {
    return null; // In teoria non dovrebbe mai arrivare qui grazie al reindirizzamento
  }

  return (
    <div className="apartment-page">
      {/* Banner con le immagini */}
      <ApartmentBanner pictures={selectedFlat.pictures} />

      {/* Header con titolo e altre info */}
      <ApartmentHeader selectedFlat={selectedFlat} />

      {/* Area con descrizione e equipaggiamenti */}
      <div className="apartment__description__area">
        <ApartmentDescription title="Description" content={selectedFlat.description} />
        <ApartmentDescription title="Equipments" content={ selectedFlat.equipments.map((eq, index) => (
            <div className="equipments" key={index}>{eq}</div>
        ))} />
      </div>
    </div>
  );
}

export default ApartmentPage;
