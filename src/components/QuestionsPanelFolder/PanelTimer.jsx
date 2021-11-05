import React, { useState, useEffect } from "react";

const PanelTimer = ({ setShowScore, setCurrentQuestion, isActive, setIsActive }) => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    const [displayMessage, setDisplayMessage] = useState(false);

    function resetQuiz() {
        setMinutes(1);
        setSeconds(0);
        setIsActive(false)

        setShowScore(false)
        setCurrentQuestion(0)
        setDisplayMessage(false);

    }

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                clearInterval(interval);

                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        setDisplayMessage(!displayMessage);
                        setShowScore(true)
                    }
                } else {
                    setSeconds(seconds - 1);
                }

            }, 1000);
        }
    }, [ isActive, seconds]);


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="">
            <div className="">
                {displayMessage && <div>Time is Up Champ</div>}
            </div>
            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>

            <button onClick={resetQuiz}>Reset</button>
        </div>
    );
}

export default PanelTimer;