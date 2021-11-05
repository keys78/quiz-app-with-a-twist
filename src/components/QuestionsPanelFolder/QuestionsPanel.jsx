import React, { useState } from 'react';
import PanelTimer from './PanelTimer';
import styled, { css } from 'styled-components'
import moment from 'moment'
import { questions } from '../data'


const QuestionsPanel = ({ darkmode, isActive, setIsActive }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const [scoreBoard, setScoreBoard] = useState([])

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        next();
    };

    const xy = {
        name: 'Emmanuel',
        play_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        score: score
    }


    function next() {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            setIsActive(false)

            scoreBoard.push(xy)
            localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard))

            let myData = JSON.parse(localStorage.getItem('scoreBoard'))
            setScoreBoard(myData)
            console.log(scoreBoard)
        }
    }


    return (
        <QuestionsWrapper darkmode={darkmode}>
            <div className="lg:w-6/12 w-11/12 mx-auto border py-10 px-6">
                <PanelTimer setShowScore={setShowScore} 
                setCurrentQuestion={setCurrentQuestion}
                isActive={isActive} setIsActive={setIsActive}
                />
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                            <div>
                                {currentQuestion >= 1 && <button onClick={() => setCurrentQuestion(currentQuestion - 1)} >Prev</button>}
                                {currentQuestion < questions.length - 1 && <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>}

                            </div>
                        </div>
                    </>
                )}

            </div>
        </QuestionsWrapper>
    );
}


const QuestionsWrapper = styled.div`
   ${({ darkmode }) => darkmode ? css`
    background-color: orange; color:red;`: "" }
`



export default QuestionsPanel;