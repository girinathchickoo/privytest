// import logo from './logo.svg';
// import './App.css';
// import Blockend from "blockend";
// import "blockend/dist/main.css";
import SolanaComp from "./components/Home";
import { Buffer } from "buffer";
window.Buffer = Buffer;
function App() {
  return (
    <div className="App">
      <SolanaComp />
      {/* <Blockend
        configuration={{
          gradientStyle: {
            background: "linear-gradient(#e66465, #9198e5)",
            spinnerColor: "#e66465",
            stopColor: "#9198e5",
          },
          shouldPersistTxn: true,
          containerStyle: {},
          customTheme: {
            text: {
              primary: "",
              secondary: "",
              selected: "",
              button: "",
              success: "",
              error: "",
            },
            background: {
              container: "",
              secondary: "",
              networkCard: "",
              disable: "",
              loaderbar: "",
            },
            border: {
              primary: "",
              secondary: "",
              inputHighlight: "",
            },
            fontFamily: '"Jacquard 24"',
            shadow: {
              boxShadow: "1px 1px 7px 5px rgb(255,255,255,0.1)",
            },
          },
          defaultChains: {
            from: { chainId: "137" },
            to: { chainId: "56" },
          },
          defaultTokens: {
            from: {
              tokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            },
            to: { tokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" },
          },
        }}
      /> */}
    </div>
  );
}

export default App;
