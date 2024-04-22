
import './App.css';
import CryptoRanking from './Components/CryptoRanking';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import PopupCard from './Components/PopupCard';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <CryptoRanking/>
      {/* <PopupCard/> */}
    </div>
  );
}

export default App;
