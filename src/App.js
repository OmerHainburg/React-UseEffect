import './App.css';
import Counter from './Counter';
import CleanUp from './CleanUp';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React UseAffect</h1>
       <h2>Function Component Effects</h2>
       <Counter />
       <h2>Clean Up Effects</h2>
       <CleanUp />
       <h2>Control When Effects Are Called</h2>
       <Timer />
       <br></br>
      </header>
    </div>
  );
}

export default App;
