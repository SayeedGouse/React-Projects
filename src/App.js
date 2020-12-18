
import Birthday from './user2';
import Tour from './tour/tour';
import NavBar from './NavBar';
import MorAbtTour from './tour/morAbtTour'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/>
      <div className='main'>
            
            <Switch>
              <Route path='/' exact component={Birthday}/>
              <Route path='/tour' exact component={Tour}/>
              <Route path='/tour/:id' children={<MorAbtTour/>}></Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
