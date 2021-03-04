import React from "react";
import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div
      className="h-card d-inline-block"
      onClick={(e) => props.onClick(props.item)}
    >
      <img
        className="h-card-image"
        src={props.item.imgSrc}
        alt={props.item.title}
      />
      {props.item.selected && <CardInfo {...props.item} />}
      {/* {<CardInfo {...props.item} />} */}
    </div>
  );
}

export default Card;
