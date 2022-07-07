import React from 'react';
import '../../App.css';
import { tipJar } from '../HeroSection';
import { Button } from '../Button';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

export const CoinbaseWallet = new WalletLinkConnector({
 url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42],
});

export const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

export const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});

export default function Donate() {
  // return <h1 className='donate'>LIKE & SUBSCRIBE</h1>;
    
  // const tipETH = async () => { 
  //   try {
  //     const { ethereum } = window;
  
  //     if (ethereum) {
  //       // const provider = new ethers.providers.Web3Provider(ethereum);
  //       // const signer = provider.getSigner();
  //       const value = 0.01 // ether
  //       window.open(`https://pay.buildship.dev/to/${tipJar}?value=${value}`);
      
  //       // const nftContract = new ethers.Contract(contractAddress, abi, signer);
  
  //       // console.log("Initialize payment");
  //       // let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
  
  //       // console.log("Mining... please wait");
  //       // await nftTxn.wait();
  
  //       // console.log("Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash");
  
  //     } else {
  //       console.log("Ethereum object does not exist");
  //     }
  
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  function sendEth(fromAddress, toAddress, etherValue) {
    var weiValue = etherValue * Math.pow(10, 18);
      var weiValueHex = weiValue.toString(16);
      
    if (window.ethereum === undefined) {
          console.log('[ethTip] sendEth called without window.ethereum object');
          return;
      }
  
      var params = [{
          to: toAddress,
          from: fromAddress,
          value: weiValueHex
      }];
      
    window.ethereum.request({
          method: 'eth_sendTransaction',
          params: params
      }) 
      .then((result) => {
          console.log('[ethTip] User completed Tx: https://etherscan.io/tx/' + result);
      alert('Thanks for the eth! https://etherscan.io/tx/' + result);
    })
      .catch((error) => {
          console.log('[ethTip] ' + error['message']);
      });
  }
  
  function connectAndSendEth(toAddress, etherValue) {
      if (window.ethereum === undefined) {
          console.log('[ethTip] connectAndSendEth called without window.ethereum object');
          return;
      }
  
      window.ethereum.request(
          { method: 'eth_requestAccounts' }
      )
      .then((accounts) => {
          if (accounts.length > 0) {
              sendEth(accounts[0], toAddress, etherValue);
          }
      })
      .catch((error) => {
          console.log('[ethTip] Error: ' + JSON.stringify(error));
      });
  } 
  // const connectWalletButton = () => {
  //   return (
  //     <Button  
  //       className='btns'
  //       buttonStyle='btn--primary'
  //       buttonSize='btn--large'
  //       onClick={connectWalletHandler}
  //       >
  //       CONNECT WALLET
  //     </Button>
  //   )
  // }
  const { activate, deactivate} = useWeb3React();
  const mintNftButton = () => {

    return (
      // <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
      //   Mint NFT
      // </button>

      <div className='tip'>
        {/* <Button  
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // onClick={mintNftHandler}
          onClick={tipETH}
          >
          Send ETH
        </Button> */}
        <div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => { activate(CoinbaseWallet) }}
          >
            Coinbase Wallet
          </Button>
        </div>
        <div>  
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => { activate(WalletConnect) }}
          >
            Wallet Connect
          </Button>
        </div>
        <div>  
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => { activate(Injected) }}
          >
            Metamask
          </Button>
        </div>
        <div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={deactivate}
          >
            Disconnect
          </Button>  
        <div>   
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => {connectAndSendEth(tipJar, 0.02)}}
          >
            Donate
            </Button> 
          </div> 
        </div>
      </div>


    )
  }
  return(
    <div className='donate'>
      {mintNftButton()}
    </div>

  )
}
