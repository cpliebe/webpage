import Navbar from './Navbar'
import Home from './Home'
import MLB from './MLB'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
            <Navbar />
     <div className="content">
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/MLB"><MLB/></Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
