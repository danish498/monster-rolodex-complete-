import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.style.css";

const CardList = ({ monnesters }) => (
  <div className="card-list">
    {monnesters.map((monnester) => {
      return <Card monnester={monnester} />;
    })}
  </div>
);

export default CardList;
