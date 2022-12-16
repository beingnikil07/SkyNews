import React, { Component } from "react"; // if you are going to create a class based component then we have to add component from react always
import Navbar from "./components/Navbar";
import News from "./components/News";
class App extends Component {
  render() {
     return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
export default App;
