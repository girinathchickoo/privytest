import {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { useEffect } from "react";
export default function SolanaComp() {
  return (
    <>
      <iframe
        src="https://beta.blockend.com/?fromChain=1&fromAddress=0xbf2179859fc6d5bee9bf9158632dc51678a4100e&toChain=1&toAddress=0xc00e94cb662c3520282e6f5717214004a7f26888"
        title="blockend-widget"
        id="blockend_frame"
        style={{
          width: "443px",
          height: "500px",
          // transform: "scale(0.85)",
          // transformOrigin: "top right",
          background: "transparent",
          border: "none",
          padding: "0px",
          marginRight: "0px",
        }}
      />
      {/* <iframe
        src="https://www.solstation.xyz/"
        title="swap-widget"
        style={{
          minWidth: "500px",
          height: "592px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
        }}
      /> */}
      {/* <iframe
        src="https://squadswap.com/swap-widget?inputCurrency=BNB&outputCurrency=0x2d2567DeC25c9795117228aDC7FD58116D2E310C&backgroundColor=%23413d4d&inputColor=%233A3544&highlightColor=%23b39ddb&textColor=%23A6A0BB&darktheme=true&height=800px"
        title="swap-widget"
        style={{
          width: "443px",
          height: "592px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
          background: "white",
          border: "0px",
        }}
      /> */}
    </>
  );
}
