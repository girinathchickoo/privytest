// import logo from './logo.svg';
// import './App.css';

import { PrivyProvider } from "@privy-io/react-auth";
import PrivyComp from "./components/PrivyComp";
import { Buffer } from "buffer";
function App() {
  window.Buffer = Buffer;
  return (
    <PrivyProvider
      appId="clwqavj8h01fraj6ue22vtxxw"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <PrivyComp />
    </PrivyProvider>
  );
}

export default App;
