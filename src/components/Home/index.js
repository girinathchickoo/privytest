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
  const keypair = Keypair.generate();
  console.log("keypair", keypair, keypair.publicKey.toBase58());
  console.log("keypair secret", keypair.secretKey.toString());
  async function getBalance() {
    const publicKey = new PublicKey(
      "13TxmfA1kFwUsRq9Bg1yRFg4n8xfvqZqC5QBp8JsT1Ex"
    );
    const connection = new Connection(clusterApiUrl("devnet"));
    console.log(connection, "connection");
    const bal = await connection.getBalance(publicKey);
    console.log(bal / Math.pow(10, 9), "balance");
  }
  async function createTxn() {
    const toPubkey = new PublicKey(
      "8it2FSXgVFyLNnz4HbXThEsJf7mQUz3iXkHWAR8AM99C"
    );
    const connection = new Connection(clusterApiUrl("devnet"));
    console.log(connection, "connection ");
    const transaction = new Transaction();
    const LAMPORTS_TO_SEND = 1000000000;

    const senderKeypair = {
      publicKey: new PublicKey("13TxmfA1kFwUsRq9Bg1yRFg4n8xfvqZqC5QBp8JsT1Ex"),
      secretKey: new Uint8Array([
        109, 46, 37, 87, 98, 79, 208, 165, 243, 105, 122, 20, 183, 243, 16, 0,
        167, 119, 193, 236, 80, 72, 240, 54, 78, 17, 69, 96, 171, 37, 3, 121, 0,
        161, 165, 171, 10, 227, 72, 211, 70, 171, 200, 253, 135, 118, 44, 156,
        96, 3, 122, 166, 243, 74, 109, 30, 223, 212, 40, 164, 157, 186, 41, 57,
      ]),
    };
    const bal = await connection.getBalance(senderKeypair.publicKey);
    const keypair1 = Keypair.generate(senderKeypair);
    console.log(keypair1, toPubkey, senderKeypair.publicKey, "keypair1");
    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey,
      lamports: LAMPORTS_TO_SEND,
    });
    transaction.add(sendSolInstruction);
    console.log(JSON.stringify(transaction, "txnnnnn"));
    try {
      const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [senderKeypair]
      );
    } catch (err) {
      console.log(err, "sign123");
    }
  }
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <>
      {/* <button
        onClick={() => {
          createTxn();
        }}
      >
        Send Sol
      </button> */}
      <iframe
        src="https://beta.blockend.com"
        style={{
          minWidth: "500px",
          minHeight: "592px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
        }}
      />
      {/* <iframe
        src="https://squadswap.com/swap-widget?inputCurrency=BNB&outputCurrency=0x2d2567DeC25c9795117228aDC7FD58116D2E310C&backgroundColor=%23413d4d&inputColor=%233A3544&highlightColor=%23b39ddb&textColor=%23A6A0BB&darktheme=true&height=800px"
        title="swap-widget"
        style={{
          minWidth: "500px",
          height: "592px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
        }}
      /> */}
    </>
  );
}
