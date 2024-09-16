import React from 'react';
import './Card.css'

function Card({ suit, value }) {
    return (
        <div className='card'>
            <h1>{value} of {suit}</h1>
        </div>
    );
}

export default Card;