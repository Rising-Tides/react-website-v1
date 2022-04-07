import React from 'react';
import '../../App.css';
import { tipJar } from '../HeroSection';
import { Button } from '../Button';

export default function Donate() {
  // return <h1 className='donate'>LIKE & SUBSCRIBE</h1>;
    
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
      <div className='tip'>
        <Button  
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // onClick={mintNftHandler}
          onClick={tipETH}
          >
          Send ETH
        </Button>

      </div>


    )
  }
  return(
    <div className='donate'>
      {mintNftButton()}
    </div>

  )
}
