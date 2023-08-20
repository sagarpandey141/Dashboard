import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <>
       <Routes>
             <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>
    </>
  );
}

export default App;
