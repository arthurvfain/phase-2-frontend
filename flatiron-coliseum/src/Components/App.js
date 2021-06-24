
import '../App.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Coliseum from './Coliseum';
import HallOfFame from './HallOfFame';
import Home from "./Home"

function App()
{
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path='/Coliseum' component={()=><Router><Coliseum/></Router>}/>
          <Route path='/HallOfFame' component={HallOfFame} />
          <Route exactPath='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
