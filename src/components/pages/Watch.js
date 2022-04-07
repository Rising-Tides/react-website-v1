import React from 'react';
import '../../App.css';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
// import HeroSection from '../HeroSection';

// import Cards from '../Cards';

// import InfiniteScroll from 'react-infinite-scroller';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }


export default function Watch() {
  return (
    <>
    <h1 className='watch'> 
      <ReactTwitchEmbedVideo 
        className='twitch-embed'
        channel="xojustkirst" 
        height='100%'
        width='100%'
        />
    </h1>
    {/* <HeroSection/> */}
      {/* <InfiniteScroll
    //       pageStart={0}
    //       loadMore={loadFunc}
    //       hasMore={true || false}
    //       loader={<div className="loader" key={0}>Loading ...</div>}
    //   >
    //       {images} 
    //   </InfiniteScroll> */}
    {/* <Cards /> */}
    {/* <ReactTwitchEmbedVideo channel="xojustkirst" /> */}
    </>


  );
}
