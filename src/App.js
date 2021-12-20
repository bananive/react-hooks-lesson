import './App.css';
import { Routes, Route} from 'react-router-dom';
import State from './State';
import Effect from './Effect';
import Intro from './Intro';
import Context from './Context';
import Ref from './Ref';
import Reducer from './Reducer';
import Memo from './Memo';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/context" element={<Context />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
}

export default App;
