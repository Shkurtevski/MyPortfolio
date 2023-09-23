import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppWrapper from "./components/container/AppWrapper";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AppWrapper />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
