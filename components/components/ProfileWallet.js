import React, { useState, useRef } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeIn, displayAddress } from '../../lib/CssHelper'
import { getBalance, getKeplr } from '../../lib/CosmosHelper'
import { isMobile } from '../../lib/BrowserHelper';


const ProfileWallet = () => {

      // const walletInfo = useState(null);
      const [walletInfo, setWalletInfo] = useState(null);
      const [displayVortex, setDisplayVortex] = useState(false);
      React.useEffect(() => {
        if ((typeof window !== 'undefined')){
          // console.log("runnning")
        //   if (!isMobile()){
        //     // run()
        //   }
        //   else {

        //     var doc = document.getElementById('canvas')
        //     if (doc) {
        //       doc.style.display = 'none'
        //     }
            
        //   }
          // setDisplayVortex(!isMobile())
          
        }
      }
      , [])
      
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
            // const chainId = "cosmoshub-4";
      
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
            console.log(accounts)
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
              alert("You must hold HOLE to vote. Get it on Junoswap soon or see our Token drop page to earn HOLE. ")
              return
            }
    }
    return (
      <div>
        <div>
    <div className='wallet-container' >
        <div className='center-wallet-cont'>
            <div id='keplr-logo' style={{zIndex: 99999999, cursor: 'pointer', display: walletInfo ? 'none' : 'inline' }} onClick={ connectAndGetBalance }>
                <img style={{width: 50, margin: 'auto'}} src="./img/keplr-logo.png" alt="" />
                <div style={{fontSize: 12, marginTop: 10, color: '#ffffff'}}>
                    Connect Keplr
                </div>
            </div>
            <div style={{ marginTop: -23, display: walletInfo ? 'inline' : 'none'}}  >
                <div style={{fontSize: 28, marginTop: -6, color: '#ffffff', fontWeight: 800}}>
                  {parseInt(walletInfo && walletInfo.balance)/10000}
                </div>
                <div style={{fontSize: 12, fontWeight: 800, color: '#ffffff'}}>
                    HOLE
                </div>
                <div style={{fontSize: 12, color: 'rgb(54,135,182)', marginTop: 10}}>
                    {walletInfo && displayAddress(walletInfo.address)}
                </div>
            </div>
        </div>
        </div>
    </div>
    
    
</div>
    )
};
export default ProfileWallet;