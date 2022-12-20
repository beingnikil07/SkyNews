import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const pageSize = 15
  const apiKey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact key="general" path="/">
            <News pageSize={pageSize} apiKey={apiKey} country="in" category="general" setProgress={setProgress} />
          </Route>
          <Route exact key="business" path="/business">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="business" setProgress={setProgress} />
          </Route>
          <Route exact key="entertainment" path="/entertainment">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="entertainment" setProgress={setProgress} />
          </Route>
          <Route exact key="general" path="/general">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="general" setProgress={setProgress} />
          </Route>
          <Route exact key="health" path="/health">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="health" setProgress={setProgress} />
          </Route>
          <Route exact key="science" path="/science">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="science" setProgress={setProgress} />
          </Route>
          <Route exact key="sports" path="/sports">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="sports" setProgress={setProgress} />
          </Route>
          <Route exact key="technology" path="/technology">
            <News pageSize={pageSize} country="in" apiKey={apiKey} category="technology" setProgress={setProgress} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;


