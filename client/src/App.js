import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/auth";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AllGardens from "./screens/AllGardens";
import GardenDetails from "./screens/GardenDetail";
import CreateGarden from "./screens/CreateGarden";
import EditGarden from "./screens/EditGarden";
import CreatePost from "./screens/CreatePost";
import PostDetail from "./screens/PostDetail";
import CreateComment from "./screens/CreateComment";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  };

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <AllGardens />
        </Route>
        <Route exact path="/gardens">
          <AllGardens />
        </Route>
        <Route exact path="/gardens/new">
          <CreateGarden />
        </Route>
        <Route exact path="/gardens/:id">
          <GardenDetails />
        </Route>
        <Route exact path="/gardens/:id/edit">
          <EditGarden />
        </Route>
        <Route exact path="/gardens/:id/posts/new/">
          <CreatePost />
        </Route>
        <Route exact path="/gardens/:id/posts/:post_id/">
          <PostDetail />
        </Route>
        <Route exact path="/gardens/:id/posts/:post_id/comments/new">
          <CreateComment />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login verify={verify} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
