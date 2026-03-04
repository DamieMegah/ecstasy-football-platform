import { useEffect, useState } from "react";
import * as walletAPI from "../api/wallet.api";
import Loader from "../components/common/Loader";

export default function Wallet() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    walletAPI.getWallet().then(setWallet);
  }, []);

  if (!wallet) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Wallet</h2>
      <p>Balance: ₦{wallet.balance}</p>
    </div>
  );
}
