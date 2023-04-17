import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
      
      <Router>
      <LoadingBar
        color='#0d6efd'
        progress={this.state.progress}
        height={3}
        
      />
      <NavBar />
      <Switch>
      <Route exact path="/Sports"><News setProgress={this.setProgress} key="sports" country="in" category="sports"/></Route>
      <Route exact path="/Business"><News setProgress={this.setProgress} key="business" country="in" category="business"/></Route>
      <Route exact path="/Entertainment"><News setProgress={this.setProgress} key="entertainment" country="in" category="entertainment"/></Route>
      <Route exact path="/Health"><News setProgress={this.setProgress} key="health" country="in" category="health"/></Route>
      <Route exact path="/Science"><News setProgress={this.setProgress} key="science" country="in" category="science"/></Route>
      <Route exact path="/Technology"><News setProgress={this.setProgress} key="technology" country="in" category="technology"/></Route>
      <Route exact path="/"><News setProgress={this.setProgress} key="general" country="in" category="general"/></Route>
      </Switch>
      </Router>
      </div>
    )
  }
}

