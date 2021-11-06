import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { CssBaseline, Button } from '@material-ui/core';
import { RiDeleteBin6Line } from "react-icons/ri";
import useStyles from '../components/MaterialUI-styles';


const Leaderboard = ({ darkmode }) => {
    const [newData, setNewData] = useState(JSON.parse(localStorage.getItem('scoreBoard')))
    const myClasses = useStyles();

    const clearStats = () => {
        newData.length = 0;
        localStorage.setItem('scoreBoard', JSON.stringify(newData));
        setNewData(JSON.parse(localStorage.getItem('scoreBoard')))
    }

    return (
        <>
            <CssBaseline />
            <LeaderboardWrapper darkmode={darkmode}>
                <LeaderboardContainer darkmode={darkmode} className="xl:w-6/12 lg:w-9/12 sm:w-11/12 w-full mx-auto py-6 sm:py-10 sm:px-6 px-3">
                    <div>
                        <h1 className="text-center">Player Stats</h1>
                        <div className="flex justify-between items-center py-6">
                            <p>{`Stats Total: ${newData.length}`}</p>
                            <Button
                                className={myClasses.buttonClear} startIcon={< RiDeleteBin6Line />}
                                onClick={clearStats} variant="Outlined">Clear Stats
                            </Button>
                        </div>
                        <TableHeader>
                            <h6>Player</h6>
                            <h6>Play date</h6>
                            <h6>Score</h6>
                        </TableHeader>
                        {newData.map((sd, i) => (
                            <PlayerStats key={i}>
                                <p>{sd.name}</p>
                                <p>{sd.play_time}</p>
                                <p>{sd.score}</p>
                            </PlayerStats>
                        ))}
                    </div>
                </LeaderboardContainer>
            </LeaderboardWrapper>
        </>
    )
}

const LeaderboardWrapper = styled.section`
 padding-top: 6rem;
 transition: background-color 0.3s ease-in-out;
 

 @media (max-width: 768px) {
    padding:0.8rem 0.3rem;
  }

 ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);

    @media (max-width: 768px) {
    padding:0.8rem 0.9rem;
  }
    
    ${LeaderboardContainer} {
    background-color: var(--darkmodelayer_1);
    border:none;

    ::-webkit-scrollbar-track {
    background:rgb(1, 5, 32); 
   
}
          }

    ${TableHeader} {
        color:#beb2b5;
    }
    `: ""
    }
`
const LeaderboardContainer = styled.div`
  background-color:white;
  transition: background-color 0.3s ease-in-out;
  border-top: 0.6px solid #dbdbdb;
  border-radius:10px;
  height: 60vh;
  overflow: scroll;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);


::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background:#fff;
  transition: background-color 0.3s ease-in-out;
  width: 0px;
}
 
`
const PlayerStats = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr .5fr;
`
const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr .5fr;
    padding-bottom: 1rem;

    h6 {
     color:'red';
     font-weight: 700;
    }
   
`


export default Leaderboard
