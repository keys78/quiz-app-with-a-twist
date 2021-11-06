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
                <LeaderboardContainer darkmode={darkmode} className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
                    <div>
                        <h1 className="text-center pb-10">Player Stats</h1>
                        <div className="flex justify-between item-center">
                            <p>{`Stats Total: ${newData.length}`}</p>
                            <Button
                                className={myClasses.buttonClear} startIcon={< RiDeleteBin6Line />}
                                onClick={clearStats} variant="outlined">Clear Stats
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

 ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    
    ${LeaderboardContainer} {
            background-color: var(--darkmodelayer_1);
            border:none;
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
  height: 60vh;
  overflow: scroll;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);

  /* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background:rgb(1, 5, 32); 
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
