import React, { useState } from 'react';
import PanelTimer from './PanelTimer';
import styled, { css } from 'styled-components'
import moment from 'moment'
import { questions } from '../data'
import { GiDart } from "react-icons/gi";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";


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
            <QuestionsContainer darkmode={darkmode} className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">

                <PanelTimer setShowScore={setShowScore}
                    setCurrentQuestion={setCurrentQuestion}
                    isActive={isActive} setIsActive={setIsActive}
                />

                {showScore ? (
                    <ScoreSection>
                        You scored <span>{score}</span> out of <span>{questions.length}</span>
                        <p>{score < 2 ? 'Try Harder Next Time' : 'Congrats'}</p>
                        <p>{score >= 4 ? 'You Aced It!!' : ''}</p>
                    </ScoreSection>
                ) : (
                    <>
                        <QuestionCount>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </QuestionCount>

                        <QuestionsDivide>
                            <h1>{questions[currentQuestion].questionText}</h1>
                            <div>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <AnswerOptions onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                        <span>{<GiDart />}</span> <span>{answerOption.answerText}</span>
                                    </AnswerOptions>
                                ))}
                            </div>
                        </QuestionsDivide>

                        <NextPreviousBtn>
                            {currentQuestion >= 1 &&
                                <button onClick={() => setCurrentQuestion(currentQuestion - 1)} >
                                    <MdOutlineSkipPrevious />
                                </button>
                            }

                            {currentQuestion < questions.length - 1 &&
                                <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                                    <MdOutlineSkipNext />
                                </button>
                            }

                        </NextPreviousBtn>
                    </>
                )}

            </QuestionsContainer>
        </QuestionsWrapper>
    );
}


const QuestionsWrapper = styled.div`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;
 
  ${({ darkmode }) =>
        darkmode
            ? css`
          background-color: var(--color-darkmode-layer-1);
          color: var(--color-white);

          ${QuestionsContainer} {
            background-color: var(--color-darkmode-layer-2);
          }
        `
            : ""}
    
`
const QuestionsContainer = styled.div`
   height: 60vh;
  border: 0.5px solid black;
  margin:auto;
  position: relative;
`

const ScoreSection = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 4rem;
  letter-spacing: -1px;

  span{
      color:red;
  }

  p{
      font-size:18px;
  }
`
const QuestionCount = styled.div`
    border-bottom: 1px solid #dbd9d9d8;
    margin-top: -40px;
    font-size: 17px;
    span {
        font-size: 28px;
    }
`

const QuestionsDivide = styled.div`
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:12px;
   

    h1{
        font-size: 17px;
    }
`

const AnswerOptions = styled.div`
    display: flex;
    gap:5px;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.10), 
              0 4px 4px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);
    margin-bottom:15px;
    cursor: pointer;
`

const NextPreviousBtn = styled.div`
    width: 100%;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left:0;
    padding:20px;
`



export default QuestionsPanel;