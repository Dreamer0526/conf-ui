import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Poc from "./pages/poc/Poc";


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/poc" component={Poc} />
    </BrowserRouter>
  );
};

export default App;
