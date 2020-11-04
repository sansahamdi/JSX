import React from 'react';
import freinds from './freinds.png';
import night from './night.mp4';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Netflix Production</h1>
        <div class="form">
          <img class="image" src="/dark.png" />
          <img class="image" src={freinds} />
        </div>
      </div>
      
      <video class="myvideo" width="320" height="240" controls>
        <source src={night} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
