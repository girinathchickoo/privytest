// import logo from './logo.svg';
// import './App.css';

import { PrivyProvider } from "@privy-io/react-auth";
import PrivyComp from "./components/PrivyComp";
import Blockend from "blockend";
import "blockend/dist/main.css";
import "@dialectlabs/blinks/index.css";
import { useState, useEffect } from "react";
import { Action, Blink, ActionsRegistry } from "@dialectlabs/blinks";
import { useAction } from "@dialectlabs/blinks/react";

import { Buffer } from "buffer";
function App() {
  console.log(Blink, "blink");
  // console.log(Blockend, "blocken");

  const actionApiUrl = "https://actions.dialect.to/api/jupiter/swap/SOL-usdt";
  // useAction initiates registry, adapter and fetches the action.
  const { action } = useAction(actionApiUrl, {
    rpcUrlOrConnection: "https://tammi-n3hltb-fast-mainnet.helius-rpc.com",
  });
  console.log(action, "action");
  return (
    // <div
    //   style={{
    //     color: "white",
    //     width: "100px",
    //     display: "flex",
    //     justifyContent: "center",
    //     fontSize: "30px",
    //   }}
    // >
    //   <p style={{ fontSize: "4vw" }}>giri</p>
    // </div>
    <Blockend configuration={{ theme: "dark" }} />

    // needs to be wrapped with <WalletProvider /> and <WalletModalProvider />
    // <div style={{ width: "500px", height: "400px" }}>
    //   {action ? (
    //     <Blink action={action} websiteText={new URL(actionApiUrl).hostname} />
    //   ) : null}
    // </div>
    // <PrivyProvider
    //   appId="clwqavj8h01fraj6ue22vtxxw"
    //   config={{
    //     // Display email and wallet as login methods
    //     loginMethods: ["email", "wallet"],
    //     // Customize Privy's appearance in your app
    //     appearance: {
    //       theme: "light",
    //       accentColor: "#676FFF",
    //     },
    //     // Create embedded wallets for users who don't have a wallet
    //     embeddedWallets: {
    //       createOnLogin: "users-without-wallets",
    //     },
    //   }}
    // >
    //   <PrivyComp />
    // </PrivyProvider>
  );
}

export default App;
