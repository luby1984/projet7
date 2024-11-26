import React, { useState } from "react";
import "./ApartmentDescription.scss";




 export function ApartmentDescription(props) {
    const[isContentVisible, setContentVisible] = useState (false);
    const showContent = () => {
        setContentVisible (!isContentVisible);
    }
    return (
      <div className="apartment__description">
        <p className="description__header">
          <span>{props.title}</span>
          <i
          className={`fa-solid fa-chevron-up ${isContentVisible ? 'clicked' : ''}`}
          onClick={showContent}
        ></i>
        </p>
       {isContentVisible && <p className="description__content">{props.content}
        </p>}
      </div>
    );
  }
