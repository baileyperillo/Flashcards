import React, { useState } from 'react';
//import './Card.css';

const Card = ({ question, answer, currentIndex, totalCards, imgURL }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    //Want to fix the cards so it will face front after every click
    return (
    <div className="card-container">
        <div className="card-count">
        Card {currentIndex + 1} of {totalCards}
        </div>
        
        <div className={`card ${isFlipped ? 'flipped' : ''}`}onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-inner">
            <div className="card-front">
            {imgURL && (
                <img 
                src={imgURL} 
                alt="Brand logo" 
                className="card-image"
                />
            )} 
                <p className="card-question">{question}</p>
            </div>
            <div className="card-back">{answer}</div>
        </div>
        </div>
    </div>
    );
};

export default Card;
