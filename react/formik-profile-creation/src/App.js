import './App.css';
import Navibar from './components/Navibar';
import SoxProfileCreate from './components/SoxProfileCreate';
import SoxHome from './components/SoxHome';
import JobCreate from './components/JobCreate';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navibar />
      <div className="content">
        {/* <Router basename="/static">
          <Routes>
            <Route exact path="/home" element={<SoxProfileCreate />} />
            <Route exact path="/create-profile" element={<SoxHome />} />
          </Routes>
        </Router> */}

        {/* <SoxHome /> */}
        <SoxProfileCreate />
        {/* <JobCreate /> */}

      </div>
    </div>



  );
}

export default App;
