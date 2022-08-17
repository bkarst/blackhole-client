import React from 'react';
import $ from 'jquery';
// import ScrollReveal from 'scrollreveal'

function run(){
//Scroll reveal
// var ScrollReveal = require('scrollreveal')

window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 6000 });

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


}

const TreeRoadmap = () => {
    var myVar = (typeof ScrollReveal !== 'undefined');
    console.log('myVar', myVar)
    React.useEffect(() => {
      if ((typeof ScrollReveal !== 'undefined')){
      run()
        console.log("Schodfisadf")
      }
      else{
        console.log("fijoasdoifjasdf")
      }
    }, [])
    return (
            <section className="timeline">
    <ul>
      <li>
        <div className="reveal">
          <p><phase>PHASE 1</phase> 
            CoralCoin development starts<br />
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p>
          <phase>PHASE 2</phase> 
          CoralCoin Launches With PoW/PoS <br />
          Apply For Exchange Listings  <br />
        
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p>
          <phase>PHASE 3</phase> 
            Masternodes Launch<br />
        CoralCoin Store Development Beta<br />
Livestream Webcam(How can I say this better)???<br />
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p>
          <phase>PHASE 4</phase>
            CoralCoin Store Launches<br />
            Merchant Exchange Platform Development Starts<br />
            
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p>
          <phase>PHASE 5</phase> 
          CoralCoin App Development Starts 
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p>
          <phase>PHASE 6</phase> 
        Partnership With Online Vendors <br />
        Mobile Wallet Development Begins<br />
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 7</phase> 
          To be revealed
          </p>
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 8</phase> 
            To Be Revealed<br />
        
        
          </p>      
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 9</phase> 
          To be revealed
          </p>      
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 10</phase> 
          To be revealed
          </p>      
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 11</phase> 
          To be revealed
          </p>      
        </div>
      </li>
      <li>
        <div className="reveal">
          <p className="blurry-text">
          <phase>PHASE 12</phase> 
          To be revealed
          </p>      
        </div>
      </li>
    </ul>
  </section>
    )

};
export default TreeRoadmap;