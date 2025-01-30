import './App.css';
import Header from './components/Header';
import About from './components/About';
import Value from './components/Value';
import Talent from './components/Talent'
import Vagas from './components/Vagas'

function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Value/>
    <Talent/>
    <Vagas/>
    </div>
  );
}

export default App;
