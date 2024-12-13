import './App.css'
import { Route, Routes } from 'react-router-dom'

import Inicio from './views/Inicio';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />}/>
      </Routes>
    </div>
  );
}

export default App
