import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './component/Login';
import Logout from './component/Logout';
const App = () => (
    <Router>
         <Switch>
             <Route exact path="/" component={Login} />
            <Route exact path="/Logout" component={Logout} />
        </Switch>
    </Router>
);
export default App;
