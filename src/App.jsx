import React from 'react';
import Webcam from 'react-webcam';
import './App.css';

const FACING_MODE_USER = 'user';
const FACING_MODE_ENVIRONMENT = 'environment';

const videoConstraints = {
    facingMode: FACING_MODE_USER,
};

export default function App() {
    const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

    const handleClick = React.useCallback(() => {
        setFacingMode((prevState) =>
            prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
        );
    }, []);
    return (
        <>
            <button onClick={handleClick}>Switch camera</button>

            <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                    ...videoConstraints,
                    facingMode,
                }}
            />
        </>
    );
}
