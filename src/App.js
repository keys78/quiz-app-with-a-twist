import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/PrivateRoute"
import QuestionsPanel from './components/QuestionsPanelFolder/QuestionsPanel';
import Navbar from './components/Navbar';
import GlobalStyles from './components/Global';
import Help from './Pages/Help';


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


  return (
    <>
      <GlobalStyles darkmode={darkmode} />
      <Router>
        <AuthProvider>
          <Navbar darkmode={darkmode} setDarkmode={setDarkmode} handleToggleDarkmode={handleToggleDarkmode} />
          <Switch>
            <PrivateRoute exact path="/" children={<Dashboard darkmode={darkmode}
              isActive={isActive} setIsActive={setIsActive}
            />}

            />
            <PrivateRoute path="/update-profile" children={<UpdateProfile darkmode={darkmode} />} />
            <PrivateRoute path="/help" children={<Help darkmode={darkmode} />} />
            <Route path="/signup" component={Signup} />
            <Route darkmode={darkmode} path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/your-test-is-on-!" children={<QuestionsPanel darkmode={darkmode}
              isActive={isActive} setIsActive={setIsActive}
            />}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
