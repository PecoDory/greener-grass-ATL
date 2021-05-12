import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import {verifyUser} from "./services/auth"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify()
  }, [])

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>Greener Grass ATL</h1>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login verify={verify}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
