import React, { Component } from "react"; // if you are going to create a class based component then we have to add component from react always
import Navbar from "./components/Navbar";
import News from "./components/News";
class App extends Component {
  // Here class APP extending methods from react component
  render() {
    // render is a method for rendring components in react class based components
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
export default App;
