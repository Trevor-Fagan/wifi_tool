import './App.css';
import MainMenu from './Components/MainMenu/MainMenu';
import Canvas from './Components/Canvas/Canvas';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <div id="content_container">
        <Canvas />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;