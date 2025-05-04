
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/login';
import PrivateRoute from './Pages/AuthenticatedRoute';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route element={<PrivateRoute>
      <Navbar/>
      <HomePage/>
    
    </PrivateRoute>} path='/homepage' ></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
