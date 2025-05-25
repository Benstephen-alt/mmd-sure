import { useState, useEffect } from "react";
import { MyComponent } from "./Component.jsx";

export function App() {
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  // Time of Day greeting logic
  const hr = new Date().getHours();
  let ToD = hr < 12 ? "Morning" : hr < 17 ? "Afternoon" : hr < 21 ? "Evening" : "Night";

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const ClickTo = () => {
    setShowSearch(true);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Starting Kaiver Dapp...</h2>
        {/* You can add a spinner or animation here */}
      </div>
    );
  }

  return (
    <>
      <h1 className='headTx'>Good {ToD} Kaiver</h1>
      <p className='Ptx'>Did you buy KAI presale?</p>

      {!showSearch && (
        <button className='Pbt' onClick={ClickTo}>Yes</button>
      )}

      {showSearch && (
        <>
          <input type="text" placeholder="paste your wallet address..." className='Pbt' />
          <MyComponent />
        </>
      )}

      <button className='Pbt'>No</button>
    </>
  );
}
