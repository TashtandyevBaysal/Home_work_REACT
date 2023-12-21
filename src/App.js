import Events from './Events/Components';
import FirstComponent from './components/FirstComponent';
import Props1 from './components/Props1';
import Meter from './useState_useEffect';
import ItemList from './useCallback--useMemo';


function App() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {/* <FirstComponent/>
      <Props1 colorItem ='red'/>
      <Props1 /> */}
      
      {/* <Events/> */}

      {/* <Meter>{ Meter }</Meter> */}
      
      <ItemList items={items} />
    </div>
  );
}

export default App;
