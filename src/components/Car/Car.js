import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import './Car.css';
/* --------------------------------------------
 -----Showing data of individual car------------
 ---------------------------------------------*/
const Car = (props) => {
    const { name, image, origin, horsepower, cylinders, acceleration, displacement } = props.car;

    return ( <div className="car">
                  <div className="imagesize">
                <img src={image} alt="" />
                </div>
              <div className="infoback">
                <h3 >{name}</h3>
                <p>Manufactured in: {origin}</p>
                <p>Acceleration: {acceleration} seconds</p>
                <p>Displacement: {displacement} CC</p>
                <p>Number of Cylinders: {cylinders}</p>
                <h4>Horsepower: {horsepower}</h4>
                <div className="btnPosition">
                   <button
                    onClick={() => props.handleAddToCart(props.car)}
                    className="btn"
 /* --------------------------------------------
 -----Fontawsome icon------------
 ---------------------------------------------*/
                    ><FontAwesomeIcon icon={faCarSide} /> Add Cars </button>
                </div>
            </div>
        </div>
    );
};

export default Car;