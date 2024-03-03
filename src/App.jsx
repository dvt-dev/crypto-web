import "./App.css";
import Header from "./components/Header";
import General from "./components/General";
import CryptoPrices from "./components/CryptoPrices";
import CryptoPlatform from "./components/CryptoPlatform";
import Download from "./components/Downloads";
import Blog from "./components/Blogs";

function App() {
    return (
        <div className="app">
            <div className="bgc">
                <Header />
                <General />
            </div>

            <CryptoPrices />
            <CryptoPlatform />
            <Download />
            <Blog />
        </div>
    );
}

export default App;
