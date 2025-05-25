import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  './App.css'

export function MyComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Wait 3 seconds, then navigate
    setTimeout(() => {
      navigate("/Repage");
    }, 9000); // 3000ms = 3 seconds
  };

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <h2>Indentifying your wallet address...</h2>
          {/* You can replace this with a spinner or animation */}
        </div>
      ) : (
        <button className="Pbt" onClick={handleClick}>
          Proceed
        </button>
      )}
    </>
  );
}
