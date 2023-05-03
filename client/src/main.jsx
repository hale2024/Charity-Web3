import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import { KlaytnCypress } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

// import { ChainId} from '@thirdweb-dev/react';

import { StateContextProvider } from "./context";
import App from "./App";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
     <ThirdwebProvider activeChain={ KlaytnCypress }> 
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider> 
  </React.StrictMode>,
  document.getElementById("root")
);


