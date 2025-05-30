import React from 'react'
import Checkboxes from './Components/Checkboxes'
import Radiobtn from './Components/Radiobtn'
import useToggle from './Components/useToggle';
import SearchText from './Components/SearchText';
import Button from './Components/button';

function App() {

  let[val,toggleval]=useToggle(true);
  return (
    <div>

      <Checkboxes/>
      <Radiobtn/>
      <SearchText/>
      <Button></Button>
     

      <hr />


<button onClick={toggleval}>toggle</button>
<button onClick={()=>toggleval(true)}>Show toggle</button>
<button onClick={()=>toggleval(false)}> hide toggle</button>

{val &&
      <h1>Toggle heading</h1>
}
    </div>
  )
}

export default App