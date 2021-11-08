import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled, { css } from 'styled-components'
import { CssBaseline, Button } from '@material-ui/core';
import useStyles from "../MaterialUI-styles";
import { useAuth } from "../../contexts/AuthContext";
import { BsWhatsapp } from "react-icons/bs";
import moment from "moment";

const PanelTimer = ({ setShowScore, setCurrentQuestion, isActive, setIsActive, darkmode, score }) => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const myClasses = useStyles();
    const { currentUser } = useAuth();

    const redWarning = 'text-red-500 transition duration-200 animate-pulse'
    const yellowWarning = 'text-blue-600 transition duration-200'
    const normal = 'text-green-500 transition duration-200'

    const [color, setColor] = useState(normal);
    const history = useHistory();

    const [displayMessage, setDisplayMessage] = useState(false);


    function resetQuiz() {
        setMinutes(1);
        setSeconds(0);
        setIsActive(false)
        setShowScore(false)
        setCurrentQuestion(0)
        setDisplayMessage(false);
        history.push('/dashboard')

    }


    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                clearInterval(interval);
                minutes === 0 && seconds <= 56 ? setColor(yellowWarning) : setColor(color);
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
                    else {
                        setDisplayMessage(true);
                        setShowScore(true)
                        setIsActive(false)

                        const myData = JSON.parse(localStorage.getItem('scoreBoard'))
                        const singlePlayerStat = {
                            name: currentUser.email,
                            play_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                            score: score
                        }
                        myData.unshift(singlePlayerStat)
                        localStorage.setItem('scoreBoard', JSON.stringify(myData))
                    }
                } else {
                    setSeconds(seconds - 1);
                }
                minutes === 0 && seconds <= 30 ? setColor(redWarning) : setColor(color)

            }, 1000);
        }

    }, [isActive, seconds])


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


    return (
        <>
            <CssBaseline />
            {displayMessage && <DisplayMessage darkmode={darkmode}> Time is up Champ !</DisplayMessage>}
            <TimerContainer className={`${color} `}>
                {`Time Remaining: ${timerMinutes}:${timerSeconds} `}
                {isActive && <img className="w-10" src="images/blue-hourglass-unscreen.gif" alt="hourglass" />}
            </TimerContainer>

            {!isActive && <ReplayPanel>
                <a
                    href={`https://api.whatsapp.com/send?text=Hi friend, I just scored ${score} on Cell Revive! Play Now! on https://celr.netlify.app/`}>
                    <BsWhatsapp />
                </a>


                <button onClick={() => history.push('/leaderboard')} variant="text">Leaderboard</button>
                <Button className={myClasses.button}
                    onClick={resetQuiz}
                    variant="outlined">Play Again
                </Button>
            </ReplayPanel>
            }
        </>
    );
}

const TimerContainer = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    justify-content: right;
    align-items: center;

    @media (max-width: 640px) {
        font-size: 0.9rem;
        font-weight: 700;
  }
`

const ReplayPanel = styled.div`
    display: flex;
    gap:10px;
    position: absolute;
    bottom:24px;
    right:24px;

`

const DisplayMessage = styled.div`
    font-size: larger;
    font-weight:700;
    letter-spacing: -1px;
    margin-bottom: -27px;

    @media (max-width: 640px) {
        font-size: 0.8rem;
        letter-spacing: 0px;
        margin-bottom: -17px;
  }

    ${({ darkmode }) => darkmode ? css`
    color: var(--color-primary);
    transition: color 0.3s ease-in-out;
    `: ""
    }
`

export default PanelTimer;