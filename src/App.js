import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import TodoList from './Components/TodoList22';

function App() {
  // const x = (1}===1) ? "x1" :"x...";
  // return (
  //   <div id = "App">
  //   <Welcome name = "Film" weight = "50"/>
  //   <Welcome name = "Phu" weight = "60"/>
  //   </div>
  // );

  return (
    <div className='container'>
    <TodoList></TodoList>
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}
    </div>
  )
}

export default App;
