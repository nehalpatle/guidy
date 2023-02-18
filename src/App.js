import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Userdashboard from './components/Userdashboard';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/userdashboard/*' element={<Userdashboard/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
