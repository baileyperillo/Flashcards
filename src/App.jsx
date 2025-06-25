import './App.css';
import { useState } from 'react';
import Card from './Components/Card.jsx';
import barsuit from './Images/barsuit.jpg';
import black from './Images/black.jpg';
import trunk from './Images/trunk.jpg';
import bag from './Images/gucci.jpg';
import suit from './Images/armani.jpg';
import vivien from './Images/vivien.jpg';
import aubrey from './Images/givenchy.jpg';
import lobster from './Images/scaparelli.jpg';
import mugler from './Images/mugler.jpg';
import burrows from './Images/burrows.jpg';

const App = () => {

  {/*Make this into separate file at a later time */}
  const cardData = [ 
    {question: "start", answer: "press the button below", url: null },
    { question: "This French brand is known for its monogram canvas, handbags and luxury trunks", answer: "Louis Vuitton", 
      url: trunk
    },
    { question: "Italian fashion house famous for its double-G logo and horsebit loafers", answer: "Gucci", 
      url: bag
    },
    { question: "This brand revolutionized fashion with the little black dress, tweed, and No. 5 perfume", answer: "Chanel",
      url: black
    },
    { question: 'This brand is most known for creating "the New Look" ', answer: "Dior",
      url: barsuit 
    }, 
    { question: "This brand is most known for creating elegant suits for men and women, popularizing the power suit in the 1980s",
      answer: "Armani",
      url: suit
    },
    { question: "This Britsh brand is most known for bringing punk and victorian style to fashion, popularizing the corset", answer: "Vivien Westwood", 
      url: vivien
    },
    { question: "This French brand was known their elegant, sophisticated dresses worn by Aubrey Hepburn", answer: "Givenchy", 
      url: aubrey
    },
    { question: "This brand was founded in the 1920s and most notable design was the Lobster dress and fun patterns", answer: "Scaparelli", 
      url: lobster
    },
    { question: "This brand is most known for their theatric, dramatic designs, often futuristic-looking", answer: "Mugler",
      url: mugler
    },
    { question: "This brand/designer was a part of the American team in the Battle of Versailles, and known for bringing African American style to high fashion", 
      answer: "Stephen Burrows",
      url: burrows
    },
    //{ question: "This brand was created by a duo that are seen as controversial for their fat-shaming and homophobic comments", answer: "Dulce & Gobana"}
    //{question: "This American brand is most known for mostly mens wear and tailored suits", answer: "Tom Ford"}
    //question:  "This Dominican designer participated in the Battle of Versailles is most known for creating evening wear, bridal dresses, and suits for women", 
     // answer: "Oscar De La Renta", 
     // url: 
    // Add more cards as needed
  ];

  const [cardCount, setCount] = useState(0); {/*This is to count the cards*/}
  const [forceFlipReset, setForceFlipReset] = useState(false);
  const totalCards = cardData.length; {/*In case totalCards will be changed */}

  //used for input
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0); //used for displaying score of correct answers


  const checkAnswer = () => {   //Check the input answer is correct
     //remove case sensitivity
    if (userGuess.toLowerCase() === cardData[cardCount].answer.toLowerCase()) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
    }else{
      setIsCorrect(false);
    }
  };


  
  //updates count number when you press "Next Card" button; resets user
  //previously handleClick
  const clickNext = () => { 
    setCount((prev) => Math.min(prev + 1));
    setForceFlipReset(true);
    setUserGuess('');
    setIsCorrect(null);

  }
  //go to previous card
  const clickPrev = () => {
  setForceFlipReset(true);
  setCount(prev => Math.max(0, prev - 1)); // Never goes below 0
  setUserGuess('');
  setIsCorrect(null);
};


  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to Fashion Association!</h1>
        <h2>Test your knowledge on what old, famous fashion brands. Each card has a clue on. This clue is related to the brand.</h2>
        <h3>Click on it to see if you are right!</h3>
        <h5>Number of Cards: {totalCards}</h5> {/*cardData.length*/}
      </div>

      {cardData.length > 0 && (
        <>
          <Card 
            question={cardData[cardCount].question}
            answer={cardData[cardCount].answer}
            imgURL={cardData[cardCount].url}
            currentIndex={cardCount}
            totalCards={totalCards}
            forceFlipReset={forceFlipReset}
            onFlipResetComplete={() => setForceFlipReset(false)}
            //check if this is correct - Part 2
            isCorrect={isCorrect}
            
          />

          <div className="input-selection">
            <label htmlFor="guess-input">Guess your answer here: </label>
            <input 
              id = "guess-input"
              type="text" 
              className={`input ${isCorrect ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
              //look up what this means
              value={userGuess}//connects the state of the component with the value of the <input>
              onChange= {     //updates the component's state as the user enters data
                (e) => setUserGuess(e.target.value)
              }
              name="place your answer here"
              />
            
            
            <button type = "button" className = "input-button" onClick={checkAnswer}>Submit guess</button>
            {/*if correct send message and make green, else send message in red*/}
            {isCorrect === true && <p className="feedback correct">Correct! Well done!</p>}
            {isCorrect === false && <p className="feedback incorrect">Incorrect. Please try again or press the card for the answer.</p>}
            
            <div className = "nav-button">
              <button type= "button" className = "button" onClick={clickPrev}
              disabled={cardCount === 0} // Disable on first card 
              >Back Card</button>

              <button type= "button" className = "button" onClick={clickNext}
              disabled={cardCount === cardData.length - 1} // Disable on last card
              >Next Card</button>
            </div>
          </div>
        </>   
      )}
    </div> 
  );

  {/* This code is not working but the one on top is ... Why??
  return (
    
    <h5 className="cardCount">Card: {count + 1} of {totalCards}</h5>
    
    <Card
      question={cardData[count].question}
      answer={cardData[count].answer}
      currentIndex={count}
      totalCards={totalCards}
    />

    <button type="button" className="next" onClick={handleClick}>
      Next Card
    </button>
  )*/}

}

export default App