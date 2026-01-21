import { useState } from "react";
import WalletConnect from "./components/WalletConnect.jsx";
import TransferForm from "./components/TransferForm.jsx";
import Status from "./components/Status.jsx";

export default function App() {
  const [account, setAccount] = useState(null);
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Web3 Transaction DApp
        </h1>

        {account && (
          <p className="text-xs mb-2 text-center">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        )}

        <WalletConnect account={account} setAccount={setAccount} />

        {account && (
          <TransferForm account={account} setStatus={setStatus} />
        )}

        <Status status={status} />
      </div>
    </div>
  );
}
