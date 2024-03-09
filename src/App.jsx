import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState(null);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        setNumber(randomNumber); // Update state with random number
    };

    useEffect(() => {
        generateRandomNumber();
    }, []); // Empty dependency array to run only once

    return (
        <div className="container w-full mx-auto">
            <div className="App">
                <button
                    className="button text-center font-bold p-4 bg-blue-500 text-white"
                    onClick={() => generateRandomNumber()}
                >
                    랜덤 숫자 추첨
                </button>
                {number && <p>랜덤 숫자: {number}</p>}
            </div>
        </div>
    );
}

export default App;
