import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons';
import { EXAMPLES } from './data';
//////////////////////////////////
function App() {
  const [selectedTopic,setSelectedTopic]=useState();
  function handelClick(selectedButton)
  {
    setSelectedTopic(selectedButton);
  }

  let tabContent=<p>Please select a topic!</p>;
  if(selectedTopic)
  {
tabContent=<div id='tab-content'>
<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
 <code>
 {EXAMPLES[selectedTopic].code}
 </code>
</pre>
</div>;
  }
  return (
    <div>
     <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map(item=><CoreConcept key={item.title}{...item}/>)}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButtons isSelected={selectedTopic==='components'} onClick={()=>handelClick('components')} >Components</TabButtons>
          <TabButtons  isSelected={selectedTopic==='jsx'} onClick={()=>handelClick('jsx')}>JSX</TabButtons>
          <TabButtons  isSelected={selectedTopic==='props'} onClick={()=>handelClick('props')}>Props</TabButtons>
          <TabButtons  isSelected={selectedTopic==='state'} onClick={()=>handelClick('state')}>State</TabButtons>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
