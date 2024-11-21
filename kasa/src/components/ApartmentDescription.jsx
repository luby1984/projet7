import React from "react";
import "./ApartmentDescription.scss"


 export function ApartmentDescription(props) {
    return (
      <div className="apartment__description">
        <p className="description__header">
          <span>{props.title}</span>
          <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p className="description__content">{props.content}
        </p>
      </div>
    );
  }
