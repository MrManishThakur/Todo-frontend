import './App.css';
import FormData from './components/FormData';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <FormData/>
      <Todos/>
    </div>
  );
}

export default App;
