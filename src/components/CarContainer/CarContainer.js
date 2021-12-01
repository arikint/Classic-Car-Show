import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Car from '../Car/Car';
import './CarContainer.css';
 /* --------------------------------------------
 -----Contains lower section------------
 ---------------------------------------------*/
const CarContainer = () => {
    const [cars, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./historicCars.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
    }
/* --------------------------------------------
 -----return cart info------------
 ---------------------------------------------*/

    return (
        <div className="carContainer">
            <div className="car-container">
                {
                    cars.map(car => <Car
                        key={car.key}
                        car={car}
                        handleAddToCart={handleAddToCart}
                    >
                    </Car>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default CarContainer;