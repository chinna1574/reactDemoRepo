import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import Hero from './components/Person/Hero/Hero';
import ErrorBoundary from './components/Person/Hero/ErrorBoundary';


function App() {
  const logError = (errorDetails) => {
    console.log(errorDetails)
  }

  return (
    <div className="App">
      <Hero heroName={'Batman'} />
      <ErrorBoundary errorHandler={logError}>
      <Hero heroName={'Joker'} />
      </ErrorBoundary>
    </div>
  );
}

export default App;


/**
 * {
 *   heroName:undefined
 * }
 */

