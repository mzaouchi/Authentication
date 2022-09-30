import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorComp from './Components/ErrorComp';
import Home from './Components/Home';
import Loggin from './Components/Loggin';
import NavUser from './Components/NavUser';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Register from './Components/Register';

function App() {
  return (
      <div>
        <NavUser/>
        <ErrorComp/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Loggin' element={<Loggin/>}/>
          <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        </Routes>
      </div>
  );
}

export default App;
