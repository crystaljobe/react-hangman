import { useState } from 'react';
import axios from 'axios';
import words from './words.json';
import './App.css';


function App() {
  const [words, setWords] = useState(words);

  const randomWordIndex = Math.floor(Math.random() * words.length)

  return (
    <>
      <h1>Hangman</h1>
      <h2>Game Rules: </h2>
      <ul className="gameRules">
        <li>Guess a single letter each turn</li>
        <li>If the guessed letter is not in the target word, you will receive one strike</li>
        <li>If you get 6 strikes before guessing the target word, you lose</li>
      </ul>
      <div className="card">
        
        <input id="letterInput" type="text" placeholder='Enter letter guess here'></input>
          {/* onChange={} value={} */}

        <button>Submit Guess</button>
          {/* onClick={() => setCount((count) => count + 1)} */}
        
        <h2>Puzzle Word Goes Here</h2>
          {/* element for displaying puzzle word sep by space */}

        {/*  element for input and submit for letter guesses */}
        {/*  alert box should pop up if letter is already guessed */}
        {/*  element holding guessed letters */}
        {/*  user gets 6 guesses */}
        
      </div>
    </>
  )
}

export default App
