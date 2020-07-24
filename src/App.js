import React from "react";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AsideBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
