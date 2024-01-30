import Player from './components/Player.jsx';
import TimerCh from './components/TimerCh.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerCh title="Easy" targetTime={+1} />
        <TimerCh title="Not easy" targetTime={5} />
        <TimerCh title="Getting tough" targetTime={10} />
        <TimerCh title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
