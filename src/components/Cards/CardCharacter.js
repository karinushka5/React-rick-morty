import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Card.scss";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;
  console.log('fetch',fetchedData)
console.log(name, location, origin, gender, image, status, species)
  let api = `https://rickandmortyapi.com/api/character/${id}`;
console.log(origin)
  useEffect(() => {
    setTimeout(()=>{
      (async function() {
        let data = await fetch(api)
        .then(response => response.json());
        updateFetchedData(data);
        
      })()
    },1000)
  }, [api]);
  if (fetchedData) {

  return (
    <div className="wrapper_character">
<div className="container d-flex justify-content-center">
      <div className="d-flex   gap-3">
     

        <img className="img-fluid images_character" src={image} alt="" />
        <Link to="/" >
         <div className="exit">X</div>
        </Link>
        <div className="content d-flex ">
        <div className="row flex-column p-3">
        <div className="">
            <div className="fw-bold col">Name : </div>
            {name}
          </div>
          <div className="">
            <div className="fw-bold col">Status : </div>
            {status}
          </div>
          <div className="">
            <div className="fw-bold col">Species : </div>
            {species}
          </div>
        </div>
         <div className="row flex-column p-3">
         <div className="">
            <div className="fw-bold">Origin: </div>
            {origin?.name}
          </div>
          <div className="">
            <div className="fw-bold">Location: </div>
            {location?.name}
          </div>
          <div className="">
            <div className="fw-bold">Gender : </div>
            {gender}
          </div>
         </div>
          
          

        </div>
      </div>
    </div>
    </div>
    
  );}
  else {
    <div>'Error'</div>
  }
};

export default CardCharacter;