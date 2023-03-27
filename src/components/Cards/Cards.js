import React from 'react'
import styles from './Card.scss'
import { Link } from "react-router-dom";
import CardCharacter from "./CardCharacter";
const Cards = ({page, results}) => {
  console.log(results)
  let display;
  if (results) {
    console.log('card', results)
    display = results.map((card) => {
      let {id, name, image } = card;
      return (
        <Link
        style={{ textDecoration: "none" }}
        to={`${page}${id}`}
        key={id}
        className="col-lg-3 col-md-8 col-sm-6 col-12 mb-4 position-relative text-dark"
      >
        <div
          className={`card d-flex flex-column justify-content-center`}
        >
          <img className={`images img-fluid`} src={image} alt="" />
          <div className={`content`}>
            <div className="fs-5 fw-bold mb-4">{name}</div>
          </div>
        </div>

      </Link>
        )
    });
  } else {
    console.log('no')
   display = "Oops! Something went wrong."
  }
  return (
    < >{display}</>
    
  )
}

export default Cards;