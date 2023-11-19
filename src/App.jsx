import { useState } from 'react';
import Player from './components/Player';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player name='Player 1' symbol='X' />
          <Player name='Player 2' symbol='O' />
        </ol>
      </div>
    </main>
  );
}

export default App;
