import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forget_Password from './Components/Forget_Password';
import Reset_Password from './Components/Reset_Password';

function App() {
  /*return (
    <div>
      <Signup/> 
      <Login/>
      <Forget_Password/>
      <Reset_Password/>
    </div>
  );*/
  return <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Forget_Password' element={<Forget_Password/>}/>
      <Route path='/Reset_Password' element={<Reset_Password/>}/>
  </Routes>
}

export default App;
