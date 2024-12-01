import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ApartmentDescription } from "../components/ApartmentDescription.jsx";
import { ApartmentBanner } from "../components/ApartmentBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import "./ApartmentPage.scss";

function ApartmentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { apartmentId } = location.state || {};
    const [selectedFlat, setSelectedFlat] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!apartmentId) {
            navigate("/404", { replace: true });
            return;
        }

        fetch("logements.json")
            .then((res) => res.json())
            .then((flats) => {
                const flat = flats.find((flat) => flat.id === apartmentId);
                if (!flat) {
                    navigate("/404", { replace: true });
                } else {
                    setSelectedFlat(flat);
                }
            })
            .catch(() => {
                navigate("/404", { replace: true });
            })
            .finally(() => setIsLoading(false));
    }, [apartmentId, navigate]);

    if (isLoading) return <div>...Loading</div>;

    if (!selectedFlat) return null; // Questo è un caso teorico, non dovrebbe accadere.

    return (
        <div className="apartment-page">
            <ApartmentBanner imageUrl={selectedFlat.cover} />
            <ApartmentHeader selectedFlat={selectedFlat} />
            <div className="apartment__description__area">
                <ApartmentDescription title="Description" content={selectedFlat.description} />
                <ApartmentDescription title="Equipements" content={selectedFlat.equipments.map((eq) => (
                <li>{eq}</li>))} />  
                 
            </div>
        </div>
    );
}

export default ApartmentPage;
