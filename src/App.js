import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile'
import PrivateRoute from "./components/PrivateRoute"
import QuestionsPanel from './components/QuestionsPanelFolder/QuestionsPanel';
import Navbar from './components/Navbar';
import GlobalStyles from './components/Global';
import Help from './Pages/Help';
import Leaderboard from './Pages/Leaderboard';
import { AnimatePresence } from 'framer-motion';
import useAxiosFetch from './components/useAxiosFetch';


const fetchLSItem = itemName => window.localStorage.getItem(itemName);
const setLSItem = (itemName, value) =>
  window.localStorage.setItem(itemName, value);

function App() {

  const initDarkmodeSetting = fetchLSItem("darkmode") === "true";
  const [darkmode, setDarkmode] = useState(initDarkmodeSetting);
  const [isActive, setIsActive] = useState(false);

  const handleToggleDarkmode = () => {
    const newDarkmodeValue = !darkmode;
    setDarkmode(newDarkmodeValue);
    setLSItem("darkmode", newDarkmodeValue);
  };

  const { data: questionData, fetchError } = useAxiosFetch('https://61879aaf057b9b00177f9a1b.mockapi.io/questions')

  return (
    <>
      <GlobalStyles darkmode={darkmode} />

      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} handleToggleDarkmode={handleToggleDarkmode} />
      <AnimatePresence exitBeforeEnter>
        <Switch>

          <PrivateRoute exact path="/dashboard" component={() => <Dashboard
            darkmode={darkmode}
            fetchError={fetchError}
            isActive={isActive} setIsActive={setIsActive}
          />} />

          <PrivateRoute path="/update-profile" children={<UpdateProfile darkmode={darkmode} />} />
          <PrivateRoute path="/help" children={<Help darkmode={darkmode} />} />
          <PrivateRoute path="/leaderboard" children={<Leaderboard darkmode={darkmode} />} />
          <Route path="/signup" children={<Signup darkmode={darkmode} />} />
          <Route exact path="/" children={<Login darkmode={darkmode} />} />
          <Route path="/forgot-password" children={<ForgotPassword darkmode={darkmode} />} />
          <PrivateRoute exact path="/test-is-on" children={<QuestionsPanel darkmode={darkmode}
            questionData={questionData}
            isActive={isActive} setIsActive={setIsActive}
          />}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
