import Events from './Events/Components';
import FirstComponent from './components/FirstComponent';
import Props1 from './components/Props1';
import Meter from './useState_useEffect';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent/>
      <Props1 colorItem ='red'/>
      <Props1 /> */}
      
      {/* <Events/> */}

      <Meter>{ Meter }</Meter>

    </div>
  );
}

export default App;
