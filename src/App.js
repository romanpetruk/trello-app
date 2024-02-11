import './App.css'
import AppBar from './components/AppBar/AppBar';
import BoardBar from './components/BoardBar/BoardBar';
import BoardContent from './components/BoardContent/BoardContent';
function App() {
  return (
    <div className="App">
      <div className="trello-master">
        <AppBar/>
        <BoardBar/>
        <BoardContent/>
      </div>
    </div>
  );
}

export default App;
