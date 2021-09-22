import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoginPage} from "./components/LoginPage";
import UserComponent from "./components/UserComponent";

function App() {
  return (
   <Router>
       <Switch>
            <Route path="/iniciarsesion" component={LoginPage} />
            <Route path="/alumnos" component={UserComponent}/>
       </Switch>
   </Router>
  );
}
export default App;
