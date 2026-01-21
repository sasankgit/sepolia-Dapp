export default function WalletConnect({ account, setAccount }) {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  return (
    <>
      {!account && (
        <button
          onClick={connectWallet}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Connect MetaMask
        </button>
      )}
    </>
  );
}
