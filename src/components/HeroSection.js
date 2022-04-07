import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useEffect } from 'react';
// import { useState } from 'react';
import $ from 'jquery';

// import ethSend from 'eth-send';
// import Web3 from 'web3';

// import { ethers } from 'ethers';
// import contract from '../contracts/NFTCollectible.json';

export const tipJar = "0x8DAA10845A8144469da192ef18b13bCdFBb73591";
export const contractAddress = "0x836049Ddc0e177D2f52871b2d6e443dac0f2b659";
// const abi = contract.abi;


function HeroSection() {
  // const [currentAccount, setCurrentAccount] = useState(null);
  // const [setCurrentAccount] = useState(null);

  // const checkWalletIsConnected = async () => { 
  //   const { ethereum } = window;
  
  //   // if (!ethereum) {
  //   //   console.log("Make sure you have Metamask installed!");
  //   //   return;
  //   // } else {
  //   //   console.log("Wallet exists! We're ready to go!")
  //   // }
  //   if (window.ethereum) {
  //     handleEthereum();
  //   } else {
  //     window.addEventListener('ethereum#initialized', handleEthereum, {
  //       once: true,
  //     });
    
  //     // If the event is not dispatched by the end of the timeout,
  //     // the user probably doesn't have MetaMask installed.
  //     setTimeout(handleEthereum, 3000); // 3 seconds
  //   }
    
  //   function handleEthereum() {
  //     const { ethereum } = window;
  //     if (ethereum && ethereum.isMetaMask) {
  //       console.log('Ethereum successfully detected!');
  //       // Access the decentralized web!
  //     } else {
  //       console.log('Please install MetaMask  ');
  //     }
  //   }
  //   const accounts = await ethereum.request({ method: 'eth_accounts' });
  
  //   if (accounts.length !== 0) {
  //     const account = accounts[0];
  //     console.log("Found an authorized account: ", account);
  //     setCurrentAccount(account); 
  //   } else {
  //     console.log("No authorized account found");
  //   }
  // }
  
  // const connectWalletHandler = async () => { 
  //   const { ethereum } = window;
  
  //   if (!ethereum) {
  //      alert("Please install Metamask");
  //     window.location.replace("https://metamask.io/download/");
  //   }
  
  //   try {
  //     const accounts = await ethereum.request({method: 'eth_requestAccounts' });
  //     console.log("Found an account! Address: ", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  
  // const mintNftHandler = async () => { 
  //   try {
  //     const { ethereum } = window;
  
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(contractAddress, abi, signer);
  
  //       console.log("Initialize payment");
  //       let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
  
  //       console.log("Mining... please wait");
  //       await nftTxn.wait();
  
  //       console.log("Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash");
  
  //     } else {
  //       console.log("Ethereum object does not exist");
  //     }
  
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  
  const tipETH = async () => { 
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        const value = 0.01 // ether
        window.open(`https://pay.buildship.dev/to/${tipJar}?value=${value}`);
      
        // const nftContract = new ethers.Contract(contractAddress, abi, signer);
  
        // console.log("Initialize payment");
        // let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
  
        // console.log("Mining... please wait");
        // await nftTxn.wait();
  
        // console.log("Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash");
  
      } else {
        console.log("Ethereum object does not exist");
      }
  
    } catch (err) {
      console.log(err);
    }
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
  
  const mintNftButton = () => {
    return (
      // <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
      //   Mint NFT
      // </button>
      <Button  
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        // onClick={mintNftHandler}
        onClick={tipETH}
        >
        Send Tip
      </Button>
    )
  }
  // var images = ["img_1.jpg","img_2.jpg","img_3.jpg"];
  
  // function slideshow() { 
  //   if (cnt>=images.length) cnt=0; 
  //     $('.hero-container').css("background-image","url("+images[cnt++]+")");
  // }

  useEffect(() => {
    // checkWalletIsConnected();
    var images = ["images/IMG_9.jpg", "images/IMG_2.jpg","images/IMG_6.jpg", "images/IMG_4.jpg"];

    var cnt = 0;
    const iId=setInterval(() => {
      if (cnt>=images.length) cnt=0; 
        $('.hero-container').css("background-image","url("+images[cnt++]+")", "center center/cover no-repeat");
    }, 2500);
    return () => clearInterval(iId);

  }, [])  

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      {/* <img src='/images/IMG_1.jpg'>''</img> */}
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      {/* <p>Send Kirstin some Ethereum!</p> */}
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
        {/* {currentAccount ? mintNftButton() : connectWalletButton()} */}
        {mintNftButton()}
      </div>      
    </div>
  );
}

export default HeroSection;

