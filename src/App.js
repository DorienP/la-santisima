import './App.css';
import AboutUs from '../src/components/aboutUs.jsx';

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <h3 className="App-Title">La Santisima
        <h5 style={{margin: "0"}}>Gourmet Taco Shop</h5>
        </h3>
        <div className="information">
        <AboutUs />
        </div>
      </div>
      <header className="App-header">
      <div className="App-image"></div>
      </header>
      
    </div>
  );
}

export default App;
