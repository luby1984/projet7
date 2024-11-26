import React, { useState } from 'react'
import "./ApartmentBanner.scss";
import { useLocation } from 'react-router-dom';

export function ApartmentBanner(props) {
    const pictures = props.pictures || []; 
    const [currentPicture, setCurrentPicture] = useState (0);

     const location = useLocation ();
     const isAboutPage = location.pathname === '/about';

    const getClassName = (index) => {
        if(index === currentPicture) return "show";
        return"";  
    };
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);  
        } else {
            setCurrentPicture(newCurrentPicture)
        }
        
    };
    return (
       <div className='apartment__banner'>
        <div className='image__container'>
          {pictures.length > 0 ? (
              pictures.map((pic, index) => <img key={index} src={pic} alt="" className={getClassName(index)} />)
            ) : (
                <p>No pictures available</p> // Messaggio opzionale
            )}
            </div>
            {!isAboutPage && (
            <>
            <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className='fa-solid fa-chevron-left'></i>
            </button>
            <span className='slide-counter'>{currentPicture + 1} / {pictures.length}
            </span>
            <button className="btn btn-next" onClick={moveToNext}>
                <i className='fa-solid fa-chevron-right'></i>
            </button>
            </>
            )}
       </div>
    );
 }

