// import logo from "./logo.svg";
import "./App.css";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

function App() {
  const apiUrl =  process.env.REACT_APP_COVALENT_API;
  console.log("I got here", apiUrl)
  return (
    <div className="App">
      <GoldRushProvider
        apikey={process.env.REACT_APP_COVALENT_API}
        mode="dark"
        color="emerald"
      >
        <TokenBalancesListView
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
          hide_small_balances
          address="0xb881f5b61ae6ffc1c2031c4b5c8f13f03b81f1f8"
        />
        <TokenTransfersListView
          chain_name="eth-mainnet"
          address="0xb881f5b61ae6ffc1c2031c4b5c8f13f03b81f1f8"
          contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        />
        <AddressActivityListView address="0xb881f5b61ae6ffc1c2031c4b5c8f13f03b81f1f8" />
        <NFTWalletTokenListView
          address="0xb881f5b61ae6ffc1c2031c4b5c8f13f03b81f1f8"
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
        />
      </GoldRushProvider>
    </div>
  );
}

export default App;
