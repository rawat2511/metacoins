import "./App.css";
import Pyramid from "./IMG/banner_right.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={Pyramid} className="pyramid" />
      <Footer />
    </div>
  );
}

export default App;
