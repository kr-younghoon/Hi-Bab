import Webcam from 'react-webcam';
import React from 'react';
import SwitchCamera from '../Button/SwitchCamera';

const FACING_MODE_USER = 'user';
const FACING_MODE_ENVIRONMENT = 'environment';

const videoConstraints = {
    facingMode: FACING_MODE_USER,
};

export default function FuncWebcam() {
    const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

    const handleClick = React.useCallback(() => {
        setFacingMode((prevState) =>
            prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
        );
    }, []);

    console.log(facingMode);
    return (
        <>
            <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                    ...videoConstraints,
                    facingMode,
                }}
            />
            <SwitchCamera onClick={handleClick} />
        </>
    );
}
