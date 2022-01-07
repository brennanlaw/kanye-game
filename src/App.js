import React, { useState, useEffect } from "react";
import './style/App.css';

const quotes = require("./quotes.json");
const fakeQuotes = require("./fake-quotes.json");
const images = require("./images.json");

function App() {

    const [game, setGame] = useState({
        quote: "",
        guess: null,
        answer: null,
        background: "",
        gameOver: null
    });

    const startGame = () => {
        const isRealQuote = Math.random() < 0.6 ? true : false;
        let newQuote = isRealQuote ? quotes[Math.floor(Math.random() * quotes.length)] : fakeQuotes[Math.floor(Math.random() * fakeQuotes.length)];
        let newBackground = images[Math.floor(Math.random() * images.length)];
        setGame({
            quote: newQuote,
            guess: null,
            answer: isRealQuote,
            background: newBackground,
            gameOver: false
        })
    }

    const getButtonClass = (isTrueButton) => {
        if (game.guess === isTrueButton) return game.guess === game.answer ? "correct" : "wrong";
        else return "neutral";
    }

    useEffect(() => startGame(), [])

    const handleGuess = (userGuess) => {
        setGame(oldGame => ({...oldGame, guess: userGuess, gameOver: true}))
    }

    return (
        <div className="App" style={{backgroundImage: `url("${game.background}")`}}>
            <div className={`header ${game.gameOver ? (game.guess === game.answer ? "correct" : "wrong") : ""}`}>
                <h1>{`${game.gameOver ? (game.answer ? "Kanye said this!" : "Kanye did not say this!") : "Did Kanye Say This?"}`}</h1>
            </div>
            <div className="content">
                <div className={`quote ${!game.gameOver ? "fade-in-fwd" : ""}`}>
                    <div className="quote-text">{`"${game.quote}"`}</div>
                </div>
                <div className="input-area">
                    <div className="btn-container">
                        <button 
                            id="true-btn" 
                            className={`${game.gameOver ? getButtonClass(true) : "active-btn slide-in-top-2"}`} 
                            onClick={() => handleGuess(true)} 
                            disabled={game.gameOver}>
                            Kanye
                        </button>
                        <button 
                            id="false-btn" 
                            className={`${game.gameOver ? getButtonClass(false) : "active-btn slide-in-top-2"}`} 
                            onClick={() => handleGuess(false)} 
                            disabled={game.gameOver}>
                            Not Kanye
                        </button>
                    </div>
                    <button 
                        className={`play-btn active-btn ${game.gameOver ? " slide-in-top" : ""}`} 
                        style={{visibility: game.gameOver ? "visible" : "hidden"}} 
                        onClick={startGame}>
                        Play Again 🔁
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
