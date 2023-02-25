import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[state,setstate] = useState(data)
  function func(){
    setstate([]);
  }
  return (
      <main>
        <section>
          <div className='container'>
            <h3>{state.length} Birthday's today</h3>
            <List props={state}/>
            <button onClick={func}>Clear All</button>
          </div>
        </section>
      </main>
  );
}

export default App;
