import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col-sm-4 cuadro-contenedor">
      <div className="card mb-3">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`./hero/${id}`}>Mas...</Link>
        </div>
      </div>
    </div>
  );
};
