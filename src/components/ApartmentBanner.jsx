import React from 'react'
import "./ApartmentBanner.scss";

 export function ApartmentBanner(props) {
  return (
    <div className='apartment__banner'>
        <img src={props.imageUrl} alt="Apartment" />
      </div>
  )
}

