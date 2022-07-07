import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useEffect } from 'react';
// import { useState } from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';

// import ethSend from 'eth-send';
// import Web3 from 'web3';

// import { ethers } from 'ethers';
// import contract from '../contracts/NFTCollectible.json';
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { InjectedConnector } from "@web3-react/injected-connector";
// import { useWeb3React } from '@web3-react/core'

// export const CoinbaseWallet = new WalletLinkConnector({
//  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//  appName: "Web3-react Demo",
//  supportedChainIds: [1, 3, 4, 5, 42],
// });

// export const WalletConnect = new WalletConnectConnector({
//  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//  bridge: "https://bridge.walletconnect.org",
//  qrcode: true,
// });

// export const Injected = new InjectedConnector({
//  supportedChainIds: [1, 3, 4, 5, 42]
// });
export const tipJar = "0x8DAA10845A8144469da192ef18b13bCdFBb73591";
// export const contractAddress = "0x836049Ddc0e177D2f52871b2d6e443dac0f2b659";
// const abi = contract.abi;


function HeroSection() {
  // const { activate, deactivate} = useWeb3React();


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
      {/* <h1>XOJUSTKIRST</h1> */}
      {/* <p>What are you waiting for?</p> */}
      {/* <p>Send Kirstin some Ethereum!</p> */}
      <div className='hero-btns'>
        <div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={()=> window.open('https://instagram.com/xojustkirst')}
          >
          
              <i className='fa fa-instagram' />

          </Button> 
        </div>
        <div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={()=> window.open('https://twitch.tv/xojustkirst')}
          >
            <i className='fa fa-twitch' />
          </Button>
        </div>
        <div>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => window.open('https://www.tiktok.com/@xojustkirst?lang=en')}
        >
          <i className="fab fa-tiktok"/>

          </Button>
        </div>
      </div>    
    <div>

    </div>
    </div>
    
  );
}

export default HeroSection;

