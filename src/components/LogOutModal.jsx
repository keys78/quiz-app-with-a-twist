import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap"
import {Stack } from '@mui/material';
import { CssBaseline, Button } from '@material-ui/core';
import { CgLogOut } from "react-icons/cg";
import styled, { css } from 'styled-components'
import useStyles from "./MaterialUI-styles";


const LogOutModal = ({ displayLogOutModal, setDisplayLogOutModal, darkmode }) => {
    const myClasses = useStyles();

    const [error, setError] = useState('')
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <CssBaseline />
            <div className={`LogOutModal ${displayLogOutModal ? "ShowLog-out" : ""}`}>

                <ConfirmLogoutWrapper darkmode={darkmode} className="lg:w-4/12 w-11/12 mt-24 mx-auto py-8 px-4 rounded-2xl">
                    {error && <Alert variant="danger">{error}</Alert>}
                    <ConfirmLogout>Logout Confirmation</ConfirmLogout>
                    <p className="mb-6">Are you sure you want to logout?. This action cannot be undone.</p>
                    <div>
                        <Stack spacing={4} justifyContent="flex-end" alignItems="flex-end" direction="row">
                            <Button className={myClasses.button} onClick={() => setDisplayLogOutModal(!displayLogOutModal)} variant="outlined">Cancel</Button>
                            <Button className={myClasses.button2} startIcon={<CgLogOut />} onClick={handleLogout} variant="outlined">Log Out</Button>
                        </Stack>
                    </div>
                </ConfirmLogoutWrapper>

            </div>
            <div
                className={`LogOut-Overlay  ${displayLogOutModal ? "ShowLog-out" : ""}`}
                onClick={() => setDisplayLogOutModal(!displayLogOutModal)}
            />
        </>
    );
}

const ConfirmLogoutWrapper = styled.div`
    background-color: white;

    ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    `: ""
    }
    
    p{
        font-size: 16px;
    }
`
const ConfirmLogout = styled.h1`
    font-size: 25px;

    
`
export default LogOutModal;