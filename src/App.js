import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import Hero from './components/Person/Hero/Hero';


function App() {
  return (
    <div className="App">
      <Hero heroName={'Batman'} />
      <Hero heroName={'Joker'} />
    </div>
  );
}

export default App;


/**
 * {
 *   heroName:undefined
 * }
 */

