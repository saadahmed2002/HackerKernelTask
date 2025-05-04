
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/login';
import PrivateRoute from './Pages/PrivateRoute';
import HomePage from './Pages/HomePage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route element={<PrivateRoute>
      <HomePage/>
    </PrivateRoute>} path='/homepage' ></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
