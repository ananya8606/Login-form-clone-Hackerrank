
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
export default class App extends React.Component {
   render(){
  return (
    <Router>
      <div className="App">
     <Route exact path="/"><Login /></Route>
     <Route exact path="/auth/login"><Login /></Route>
     <Route path="/auth/signup"><Signup /></Route>
     </div>
    </Router>
  );
}
}
