import { Component } from "react";

import "./card.style.css";

const Card = ({ monnester }) => {
  const { name, email, id } = monnester;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
