import React, { useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeIn, displayAddress } from '../../lib/CssHelper'
import { getBalance, getKeplr } from '../../lib/CosmosHelper'

function run() {
window.requestAnimFrame = 
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
  window.setTimeout(callback, 1000/60);
};

// Global Canvas Setting
var canvas = document.getElementById('particle');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Particles Around the Parent
function Particle(x, y, distance) {
this.angle = Math.random() * 2 * Math.PI;
this.radius = Math.random() ; 
this.opacity =  (Math.random()*5 + 2)/10;
this.distance = (1/this.opacity)*distance;
this.speed = this.distance*0.00003;

this.position = {
  x: x + this.distance * Math.cos(this.angle),
  y: y + this.distance * Math.sin(this.angle)
};

this.draw = function() {
  ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
  ctx.beginPath();
  ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.closePath();
}
this.update = function() {
  this.angle += this.speed; 
  this.position = {
    x: x + this.distance * Math.cos(this.angle),
    y: y + this.distance * Math.sin(this.angle)
  };
  this.draw();
}
}

function Emitter(x, y) {
this.position = { x: x, y: y};
this.radius = 40;
this.count = 2000;
this.particles = [];

for(var i=0; i< this.count; i ++ ){
  this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
}
}


Emitter.prototype = {
draw: function() {
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.beginPath();
  ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.closePath();    
},
update: function() {  
 for(var i=0; i< this.count; i++) {
   this.particles[i].update();
 }
  this.draw(); 
}
}


var emitter = new Emitter(canvas.width/2, canvas.height/2);

function loop() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
emitter.update();
requestAnimFrame(loop);
}

loop();
}

const BlackholeWallet = () => {

      // const walletInfo = useState(null);
      const [walletInfo, setWalletInfo] = useState(null);
      React.useEffect(() => {
        if ((typeof window !== 'undefined')){
        run()
        }
      }
      , [])
      const links = [
        <div key='3' ><span className='btn-blue btn-main inline lead' style={{color: '#fff', fill: '#fff', background: 'rgb(54,135,182)', margin: 'auto'}}>Buy BKHL on Osmosis</span></div>,
        <div key='2' ><span className='btn-main inline lead' style={{margin: 'auto'}} >How Voting Works</span></div>,
        <div key='4' ><span className='btn-blue btn-main inline lead' style={{color: '#fff', fill: '#fff', background: 'rgb(54,135,182)', margin: 'auto'}}>Buy BKHL on Junoswap</span></div>,
      ]
    const connectAndGetBalance = async () => {
        // console.log('pollOptionId', pollOptionId)
        var keplr = await getKeplr()
        if (keplr === undefined) {
          alert("Please install keplr. To continue.")
          window.open("https://www.keplr.app/", '_blank').focus();
          return
        }
        // console.log(keplr)
            const chainId = "juno-1";
      
            // // Enabling before using the Keplr is recommended.
            // // This method will ask the user whether to allow access if they haven't visited this website.
            // // Also, it will request that the user unlock the wallet if the wallet is locked.
      
            try {
            await keplr.enable(chainId);
            // console.log('keplr')
            }
            catch (err) {
            //   console.log(err)
              alert("Please Sign up for Keplr");
              return
            }
            const offlineSigner = window.keplr.getOfflineSigner(chainId);
            // // It can return the array of address/public key.
            // // But, currently, Keplr extension manages only one address/public key pair.
            // // XXX: This line is needed to set the sender address for SigningCosmosClient.
            const accounts = await offlineSigner.getAccounts();
            //https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/juno1dru5985k4n5q369rxeqfdsjl8ezutch8y9vuau?pagination.limit=1000
            //use juno tools api to find balance
            // const balances = await axios.get(`https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/${accounts[0].address}?pagination.limit=1000`)
      
      
            console.log('accounts', accounts)
            const address = accounts[0].address
            const balance = await getBalance(address);
            // const balancePairs = balances.data.balances
            // const json = await balances.json()
            // console.log('accounts', accounts)
            // console.log('balances', balancePairs);
            // var voting_balance = 0;
            console.log('balance', balance)
            setWalletInfo({ address: address, balance: balance })
            // for (var i = 0; i < balancePairs.length; i++){
            //   const pair = balancePairs[i];
            //   if (pair.denom == "ujuno"){
            //     voting_balance = pair.amount
            //   }
            // }
            
            // // Initialize the gaia api with the offline signer that is injected by Keplr extension.
            // const cosmJS = new SigningCosmosClient(
            //     "https://lcd-cosmoshub.keplr.app",
            //     accounts[0].address,
            //     offlineSigner,
            // );
            // const title = document.getElementById("description").value;
      
            if (balance == 0) {
              alert("You must hold Blackhole to vote. Visit Osmosis for more details. ")
              return
            }
    }
    return (
      <div>
        <div>
    <div className='wallet-container' >
        <canvas id="particle"></canvas>
        <div className='center-wallet-cont'>
            <div style={{cursor: 'pointer', display: walletInfo ? 'none' : 'inline' }} onClick={ connectAndGetBalance }>
                <img style={{width: 50, margin: 'auto', zIndex: 99999}} src="./img/keplr-logo.png" alt="" />
                <div style={{fontSize: 12, marginTop: 10, color: '#ffffff'}}>
                    Connect Keplr
                </div>
                <div style={{fontSize: 12, color: '#ffffff'}}>
                    to vote
                </div>
            </div>
            <div style={{ marginTop: -23, display: walletInfo ? 'inline' : 'none'}}  >
                <div style={{fontSize: 28, marginTop: 10, color: '#ffffff', fontWeight: 800}}>
                  {parseInt(walletInfo && walletInfo.balance)/10000}
                </div>
                <div style={{fontSize: 12, fontWeight: 800, color: '#ffffff'}}>
                    BKHL
                </div>
                <div style={{fontSize: 12, color: 'rgb(54,135,182)', marginTop: 10}}>
                    {walletInfo && displayAddress(walletInfo.address)}
                </div>
            </div>
        </div>
        </div>
    </div>
    
    <div style={{zIndex: 9999999, textAlign: 'center', marginBottom: 120, flexDirection: 'row'}}>
    {links.map((link, index) => {
    return (
    // eslint-disable-next-line react/jsx-key
    <Reveal key={index} style={{margin: 10}} className='onStep' keyframes={fadeIn} delay={index*150} duration={600} triggerOnce>
        {link}
    </Reveal>
    )
    })}
</div>
</div>
    )
};
export default BlackholeWallet;