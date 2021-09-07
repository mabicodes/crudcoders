import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoginPage} from "./components/LoginPage";
import {NavBar} from "./components/NavBar";
import UserComponent from "./components/UserComponent";

function App() {
  return (
   <Router>
       <Switch>
            <Route path="/iniciarsesion" component={LoginPage} />
            <Route path="/alumnos" component={UserComponent}/>
       </Switch>
       <NavBar />
   </Router>
  );
}
export default App;
