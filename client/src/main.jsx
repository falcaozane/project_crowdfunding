import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const clientID = '4bbe13d6fa51a71ab85c3b550c383f2a'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli} clientId={clientID} activeChain={ChainId.Goerli}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)