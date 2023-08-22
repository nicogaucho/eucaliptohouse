import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Redgum from "./pages/Redgum";
import Rainbow from "./pages/Rainbow";
import Tasmanian from "./pages/Tasmanian";
import Cidergum from "./pages/Cidergum";
import Globulus from "./pages/Globulus";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/redgum' element={<Redgum />} />
      <Route path='/rainbow' element={<Rainbow />} />
      <Route path='/tasmanian' element={<Tasmanian />} />
      <Route path='/cidergum' element={<Cidergum />} />
      <Route path='/globulus' element={<Globulus />} />
    </Routes>
  )
}

export default App;