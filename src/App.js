import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/pages/Feed';
import Watch from './components/pages/Watch';
import Donate from './components/pages/Donate';
import Footer from './components/Footer';
import { useWeb3React } from '@web3-react/core'
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { InjectedConnector } from "@web3-react/injected-connector";
// import { useWeb3React } from '@web3-react/core'

// const CoinbaseWallet = new WalletLinkConnector({
//  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//  appName: "Web3-react Demo",
//  supportedChainIds: [1, 3, 4, 5, 42],
// });

// const WalletConnect = new WalletConnectConnector({
//  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//  bridge: "https://bridge.walletconnect.org",
//  qrcode: true,
// });

// const Injected = new InjectedConnector({
//  supportedChainIds: [1, 3, 4, 5, 42]
// });

function App() {
  const { active, chainId, account } = useWeb3React();
  return (
    <>
      <Router>
        <Navbar/>
        <div>Connection Status: {active}</div>
        <div>Account: {account}</div>
        <div>Network ID: {chainId}</div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Feed' component={Feed} />
          <Route path='/watch' component={Watch} />
          <Route path='/donate' component={Donate} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
