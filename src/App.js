import Events from './Events/Components';
import FirstComponent from './components/FirstComponent';
import Props1 from './components/Props1';
import Meter from './useState_useEffect';
import ItemList from './useCallback--useMemo';
import {Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Components2/Home.js';
import About from './Components2/About.js';
import Contact from './Components2/Contact.js';
import Error from './Components2/Error.js';


function App() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {/* <FirstComponent/>
      <Props1 colorItem ='red'/>
      <Props1 /> */}

      {/* <Events/> */}

      {/* <Meter>{ Meter }</Meter> */}

      {/* <ItemList items={items} /> */}
      {/* <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
