import React from 'react'
import "./ErrorPageNotFound.scss";
import Main from '../layout/Main.jsx';
import { Link } from 'react-router-dom';



export function ErrorPageNotFound() {
  return (
    <Main>
      <div className="error__page">
        <h1>404</h1>
        <h2>Oops! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </Main>
  );
}