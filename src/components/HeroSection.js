import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import contract from '../contracts/NFTCollectible.json';

const contractAddress = "0x836049Ddc0e177D2f52871b2d6e443dac0f2b659";
const abi = contract.abi;


function HeroSection() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => { 
    const { ethereum } = window;
  
    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }
    const accounts = await ethereum.request({ method: 'eth_accounts' });
  
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account); 
    } else {
      console.log("No authorized account found");
    }
  }
  
  const connectWalletHandler = async () => { 
    const { ethereum } = window;
  
    if (!ethereum) {
      alert("Please install Metamask!");
    }
  
    try {
      const accounts = await ethereum.request({method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }
  
  const mintNftHandler = async () => { 
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
  
        console.log("Initialize payment");
        let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
  
        console.log("Mining... please wait");
        await nftTxn.wait();
  
        console.log("Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash");
  
      } else {
        console.log("Ethereum object does not exist");
      }
  
    } catch (err) {
      console.log(err);
    }
  }
  
  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }
  
  const mintNftButton = () => {
    return (
      // <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
      //   Mint NFT
      // </button>
      <Button  
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        onClick={mintNftHandler}
        >
        Mint NFT
      </Button>
    )
  }
  
  useEffect(() => {
    checkWalletIsConnected();
  }, [])  
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>      
    </div>
  );
}

export default HeroSection;
