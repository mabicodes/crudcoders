import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserComponent from "./components/UserComponent";


function App() {
  return (
   <Router>
       <Switch>
           <Route path="/tabla">
                <UserComponent />
           </Route>
       </Switch>
   </Router>
  );
}
export default App;
