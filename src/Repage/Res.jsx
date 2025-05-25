import '../App.css';


export function Res() {

    const Open = () => {
        window.open("https://www.stakerspro.com", "_blank");
      };
      

    return (
        <div>

       <h1 className="Rtx">
        Your wallet address has been identified on the KAI presale list. you has been added to the whitelist and KAI will be airdropped to your wallet address on the mainnet finishing.
        Kindly wait for the airdrop to be completed.
        <br />
        As a whitelist investor, you are eligible for KAI USDT stakers Guru on BNB mainnet, seize the opportunity to earn upto 1000 USDT in rewards by building a community of stakers. click the button below to start.
       </h1>

         <button className="Pbt" onClick={Open}>Start Now</button>

        </div>
    )
}