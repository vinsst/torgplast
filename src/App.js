import React from "react";

import Main from "./pages/main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="horizontalLine"></div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
