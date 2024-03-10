import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState(null);
    const [isGenerating, setIsGenerating] = useState(true);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        setNumber(randomNumber); // Update state with random number
    };

    useEffect(() => {
        let intervalId;
        if (isGenerating) {
            intervalId = setInterval(() => {
                generateRandomNumber();
            }, 35); // Change the interval time as needed
        }

        return () => clearInterval(intervalId);
    }, [isGenerating]);

    const toggleGenerating = () => {
        setIsGenerating(!isGenerating);
    };

    return (
        <div className="container w-full mx-auto">
            <div className="App">{number && <p> {number}</p>}</div>
            <button
                className="button text-center font-bold p-4 bg-blue-500 text-white"
                onClick={toggleGenerating}
            >
                {isGenerating ? '스탑' : '재개'}
            </button>
        </div>
    );
}

export default App;
