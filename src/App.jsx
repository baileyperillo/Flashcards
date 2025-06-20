import './App.css';
import { useState } from 'react';
import Card from './Components/Card.jsx'
import barsuit from './Images/barsuit.jpg'
import black from './Images/black.jpg'
import trunk from './Images/trunk.jpg'
import bag from './Images/gucci.jpg'
import suit from './Images/armani.jpg'
import vivien from './Images/vivien.jpg'
import aubrey from './Images/givenchy.jpg'
import lobster from './Images/scaparelli.jpg'
import mugler from './Images/mugler.jpg'
import burrows from './Images/burrows.jpg'

export function App() { {/*Make this into separate file at a later time */}
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

  function handleClick() {
    setCount((cardCount) => (cardCount + 1) % totalCards);
    setForceFlipReset(true);
  }
  return (
  <div className="App">
    <div className="header">
      <h1>Welcome to Fashion Association!</h1>
      <h2>Test your knowledge on what old, famous fashion brands. Each card has a clue on. This clue is related to the brand.</h2>
      <h3>Click on it to see if you are right!</h3>
      <h5>Number of Cards: {totalCards}</h5>
    </div>
    {cardData.length > 0 ? (
      <>
        <Card 
          question={cardData[cardCount].question}
          answer={cardData[cardCount].answer}
          imgURL={cardData[cardCount].url}
          currentIndex={cardCount}
          totalCards={totalCards}
          forceFlipReset={forceFlipReset}
        onFlipResetComplete={() => setForceFlipReset(false)}
        />
        <button className = "button" onClick={handleClick}>Next Card</button>
        {/*consider putting a backwards button */}

      </>
    ) : (
      <p>No cards loaded</p>
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