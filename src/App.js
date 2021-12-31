import React from "react";
import './style/App.css';

function App() {

    let background = "https://www.the-sun.com/wp-content/uploads/sites/6/2021/10/NINTCHDBPICT000677149318-1.jpg";
    let quote = "One of my favorite of many things about what the Trump hat represents to me is that people can't tell me what to do because I'm black";





    return (
        <div className="App" style={{backgroundImage: `url("${background}")`}}>
            <div className="content">
                <h1>{`"${quote}"`}</h1>
                <div className="btn-container">
                    <btn className="btn">Kanye</btn>
                    <btn className="btn">Not Kanye</btn>
                </div>
                <btn className="btn">Play Again</btn>
            </div>
        </div>
    );
}

export default App;
