import "./App.css";
import Header from "./components/Header";
import General from "./components/General";
import CryptoPrices from "./components/CryptoPrices";

function App() {
    return (
        <div className="app">
            <div className="bgc">
                <Header />
                <General />
            </div>

            <CryptoPrices />
        </div>
    );
}

export default App;
