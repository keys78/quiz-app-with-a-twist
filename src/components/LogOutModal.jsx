import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";


const LogOutModal = ({ displayLogOutModal, setDisplayLogOutModal }) => {
    const [error, setError] = useState("")
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
    const [alert, setAlert] = useState("");


    return (
        <div>
            <button className="m-20" onClick={() => setDisplayLogOutModal(!displayLogOutModal)}>Logout</button>
            <div className={`LogOutModal ${displayLogOutModal ? "ShowLog-out" : ""}`}>
                Do you want to logout?
            </div>


            <div
        className={`LogOut-Overlay  ${displayLogOutModal ? "ShowLog-out" : ""}`}
        onClick={() => setDisplayLogOutModal(!displayLogOutModal)}
      />
            <p className="Alert">{alert}</p>
        </div>
    );
}
export default LogOutModal;