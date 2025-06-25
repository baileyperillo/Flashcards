import React, { useState } from 'react';
//import './Card.css';

const Card = ({ question, answer, currentIndex, totalCards, imgURL, isCorrect }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    //Want to fix the cards so it will face front after every click

    /* Not working. Will work on it later

     // Reset flip state when forceFlipReset changes
    useEffect(() => {
    if (forceFlipReset && isFlipped) {
        setIsFlipped(false);
        onFlipResetComplete();
    }
    }, [forceFlipReset, isFlipped, onFlipResetComplete]);
    */


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
                <div className="card-back">
                    <p>{answer}</p>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default Card;
