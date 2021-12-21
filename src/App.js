import { Routes, Route} from 'react-router-dom';
import Callback from './hookExamples/Callback';
import Context from './hookExamples/Context';
import Effect from './hookExamples/Effect';
import Reducer from './hookExamples/Reducer';
import Ref from './hookExamples/Ref';
import Memo from './hookExamples/Memo';
import State from './hookExamples/State';
import Custom from './hookExamples/Custom';
import Intro from './Intro';

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
        <Route path="/callback" element={<Callback />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </div>
  );
}

export default App;
