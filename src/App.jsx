import "./App.css";
import DynamicNavBar from "./components/dynamicNavBar/DynamicNavBar";
import PriceList from "./components/pricelist/PriceList";

function App() {
  return (
    <div className="App">
      <DynamicNavBar />
      <PriceList />
    </div>
  );
}

export default App;
