import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addBird,incrementBird } from './store/birds/birds';
import './App.css';

function App() {
  const [birdName, setBird] = useState('');
  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addBird(birdName));
    setBird('');
  };

  return (
    <div className="App">
      <h1>Birds views list</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Add Bird</p>
          <input type="text" placeholder='bird type' onChange={e => setBird(e.target.value)} value={birdName} />
        </label>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <ul>
        {birds.map(bird => (  
          <li key={bird.name}>
            <h3>
              {bird.name}
            </h3>
            <div>
              views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}><span role='img' aria-label='add'>+</span></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
