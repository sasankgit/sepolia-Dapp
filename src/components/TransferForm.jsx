import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/contract";

export default function TransferForm({
  account,
  setStatus,
}) {
  const sendTransaction = async (e) => {
    e.preventDefault();

    const receiver = e.target.receiver.value;
    const amount = e.target.amount.value;
    const message = e.target.message.value;

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      setStatus("Sending transaction...");

      const tx = await contract.addTransaction(receiver, message, {
        value: ethers.parseEther(amount),
      });

      await tx.wait();

      await fetch("http://127.0.0.1:8000/api/transactions/save/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tx_hash: tx.hash,
          sender: account,
          receiver,
          amount,
          message,
        }),
      });

      setStatus(`Success! Tx Hash: ${tx.hash}`);
      e.target.reset();
    } catch (err) {
      setStatus(err.message);
    }
  };

  return (
    <form onSubmit={sendTransaction} className="space-y-3">
      <input
        name="receiver"
        placeholder="Receiver Address"
        className="w-full p-2 rounded text-black"
        required
      />
      <input
        name="amount"
        placeholder="Amount (ETH)"
        className="w-full p-2 rounded text-black"
        required
      />
      <input
        name="message"
        placeholder="Message"
        className="w-full p-2 rounded text-black"
      />
      <button className="w-full bg-green-600 py-2 rounded">
        Send ETH
      </button>
    </form>
  );
}
