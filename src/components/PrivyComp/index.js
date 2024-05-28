import React from "react";
import { usePrivy } from "@privy-io/react-auth";
function PrivyComp() {
  const { connectWallet } = usePrivy();
  return (
    <div>
      \<button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default PrivyComp;
