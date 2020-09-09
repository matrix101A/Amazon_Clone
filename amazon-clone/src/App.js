import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
function App() {
  //BEM
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
