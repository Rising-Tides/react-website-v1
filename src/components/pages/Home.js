import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
//var counter = 1; //instantiate a counter
//var maxImage = 9; //the total number of images that are available
function Home() {
  var cycle = 0; 
  var allBackgrounds = [ "img_1.jpg",  
               "img_2.jpg",  
               "img_3.jpg", 
               "img_4.jpg", 
               "img_5.jpg" ]; 
   
  setInterval(function() { 
    if (cycle < 5) { 
      // document.body.style.backgroundImage = "url('" + allBackgrounds[cycle] + "')"; 
      $('body').css("background-image","url('" + allBackgrounds[cycle] + "')"); 
      cycle += 1; 
    } else {  
      cycle = 0; 
    } 
  }, 5000);
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
    </>
  );
}

export default Home;
