import './App.css';
import BottomButtons from './components/BottomButtons';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* Tinder-Cards */}
     <TinderCards />
     {/* bottom-buttons */}
     <BottomButtons />
    </div>
  );
}

export default App;
