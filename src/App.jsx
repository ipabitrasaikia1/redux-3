
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Todos } from './Components/Jobs';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from './Components/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/jobs" element={<Todos />}></Route>
      </Routes>

    </div>
  );
}

export default App;
