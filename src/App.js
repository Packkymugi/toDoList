import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  const x = (1===1) ? "x1" :"x...";
  return (
    <div id = "App">
    <Welcome name = "Film" weight = "50"/>
    <Welcome name = "Phu" weight = "60"/>
    </div>
  );
}

export default App;
