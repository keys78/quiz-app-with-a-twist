import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Signup from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Index from './Pages/Index';
import ForgotPassword from './Pages/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/PrivateRoute"
import QuestionsPanel from './components/QuestionsPanelFolder/QuestionsPanel';
import Navbar from './components/Navbar';
import GlobalStyles from './components/Global';
import Help from './Pages/Help';
import Leaderboard from './Pages/Leaderboard';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';



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


  const [questionData, setQuestionData] = useState(null)
  useEffect(() => {
    axios.get('https://61879aaf057b9b00177f9a1b.mockapi.io/questions').then(res => {
      if (res.statusText === 'OK') {
        setQuestionData(res.data);
        console.log(questionData)
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>
      <GlobalStyles darkmode={darkmode} />

      <Router>
        <AuthProvider>
          <Navbar darkmode={darkmode} setDarkmode={setDarkmode} handleToggleDarkmode={handleToggleDarkmode} />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <PrivateRoute exact path="/" children={<Dashboard darkmode={darkmode}
                questionData={questionData}
                isActive={isActive} setIsActive={setIsActive}
              />}
              />
              <PrivateRoute path="/update-profile" children={<UpdateProfile darkmode={darkmode} />} />
              <PrivateRoute path="/help" children={<Help darkmode={darkmode} />} />
              <PrivateRoute path="/leaderboard" children={<Leaderboard darkmode={darkmode} />} />
              <Route path="/signup" children={<Signup darkmode={darkmode} />} />
              <Route path="/login" children={<Index darkmode={darkmode} />} />
              <Route path="/forgot-password" children={<ForgotPassword darkmode={darkmode} />} />
              <Route path="/your-test-is-on-!" children={<QuestionsPanel darkmode={darkmode}
                questionData={questionData}
                isActive={isActive} setIsActive={setIsActive}
              />}
              />
            </Switch>
          </AnimatePresence>
        </AuthProvider>
      </Router>

    </>
  );
}

export default App;
