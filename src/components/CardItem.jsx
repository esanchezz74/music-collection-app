import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.path} target="_blank">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Album Cover"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.albumName}</h5>
            <h6 className="cards__item__artist">{props.artistName}</h6>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
