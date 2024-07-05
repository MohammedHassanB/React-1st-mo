import Examples from './components/Examples.jsx';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts.jsx';
//////////////////////////////////
function App() {
  return (
    <>
     <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>It`s Me (Mo)!</h2>
      </main>
    </>
  );
}

export default App;
