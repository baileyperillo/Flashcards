import React, { useState, useEffect } from 'react';
//import './Card.css';

const Card = ({ question, answer, currentIndex, totalCards, imgURL, isCorrect, isFlipped, onFlip }) => {
    //const [isFlipped, setIsFlipped] = useState(false);
    //Want to fix the cards so it will face front after every click

     // Reset flip state when forceFlipReset changes
    /*useEffect(() => {
        console.log('Flip reset check:', forceFlipReset, isFlipped);
        if (forceFlipReset && isFlipped) {
            setIsFlipped(false); // Immediately trigger flip back
            onFlipResetComplete(); // Notify parent when done
        }
        }, [forceFlipReset, isFlipped, onFlipResetComplete]);
    */
    


    return (
    <div className="card-container">
        <div className="card-count">
        Card {currentIndex + 1} of {totalCards}
        </div>
        
        <div className={`card${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
            
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
                <div className="card-back">
                    <p>{answer}</p>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default Card;
