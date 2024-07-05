import { useState } from 'react';
import { EXAMPLES } from "../data";
import TabButtons from './TabButtons.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples ()
{
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
  return ( <Section title='Examples' id='examples'>
   <Tabs
  
    buttons={
    <>
    <TabButtons isSelected={selectedTopic==='components'} onClick={()=>handelClick('components')} >Components</TabButtons>
    <TabButtons  isSelected={selectedTopic==='jsx'} onClick={()=>handelClick('jsx')}>JSX</TabButtons>
    <TabButtons  isSelected={selectedTopic==='props'} onClick={()=>handelClick('props')}>Props</TabButtons>
    <TabButtons  isSelected={selectedTopic==='state'} onClick={()=>handelClick('state')}>State</TabButtons>
    </>
   }>
   {tabContent}
   </Tabs>
  </Section>);
}