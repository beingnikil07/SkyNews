import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  pageSize = 15
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact key="general" path="/">
              <News pageSize={this.pageSize} country="in" category="general" setProgress={this.setProgress} />
            </Route>
            <Route exact key="business" path="/business">
              <News pageSize={this.pageSize} country="in" category="business" setProgress={this.setProgress} />
            </Route>
            <Route exact key="entertainment" path="/entertainment">
              <News pageSize={this.pageSize} country="in" category="entertainment" setProgress={this.setProgress} />
            </Route>
            <Route exact key="general" path="/general">
              <News pageSize={this.pageSize} country="in" category="general" setProgress={this.setProgress} />
            </Route>
            <Route exact key="health" path="/health">
              <News pageSize={this.pageSize} country="in" category="health" setProgress={this.setProgress} />
            </Route>
            <Route exact key="science" path="/science">
              <News pageSize={this.pageSize} country="in" category="science" setProgress={this.setProgress} />
            </Route>
            <Route exact key="sports" path="/sports">
              <News pageSize={this.pageSize} country="in" category="sports" setProgress={this.setProgress} />
            </Route>
            <Route exact key="technology" path="/technology">
              <News pageSize={this.pageSize} country="in" category="technology" setProgress={this.setProgress} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;



// we are passing a unique key so that we can mount page automatically .