import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import { Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdLeaderboard } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { IconContext } from "react-icons";
import LogOutModal from "./LogOutModal";


const NavTags = ({ displayModal, setDisplayModal }) => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  
  const [displayLogOutModal, setDisplayLogOutModal] = useState(true)

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

  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert("");
    }, 5000);
    return () => clearTimeout(clearMessage);
  }, [alert]);

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className={`Modal ${displayModal ? "Show" : ""}`}>

        <IconContext.Provider value={{ size: '23px', className: "navs" }}>
          <div className="flex flex-col gap-80 justify-between items-center mt-16">
            <div>
              <IoHome onClick={() => setDisplayModal(!displayModal)} />
              <Link to="/update-profile">
                <ImProfile />
              </Link>
              <MdLeaderboard />
            </div>
            <div>
              {/* <CgLogOut onClick={() => setAlert("Are you sure you want to Logout?")} /> */}
              <CgLogOut onClick={handleLogout} />
            </div>
          </div>
        </IconContext.Provider>
      </div>

      {/* <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      /> */}
      <p className="Alert">{alert}</p>
      <LogOutModal displayLogOutModal={displayLogOutModal} setDisplayLogOutModal={setDisplayLogOutModal}/>
    </div>
  );
}
export default NavTags;