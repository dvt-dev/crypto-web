import "./App.css";
import Header from "./components/Header";
import General from "./components/General";
import CryptoPrices from "./components/CryptoPrices";
import CryptoPlatform from "./components/CryptoPlatform";

function App() {
    return (
        <div className="app">
            <div className="bgc">
                <Header />
                <General />
            </div>

            <CryptoPrices />
            <CryptoPlatform />
        </div>
    );
}

export default App;
