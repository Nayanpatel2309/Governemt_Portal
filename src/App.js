import './App.css';
import {Route  ,Routes} from "react-router-dom"
import Login from './Pages/Login/Login';
import DashboardLogin from './Pages/Dashboard/DashboardLogin/DashboardLogin';
import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/dashboard/login' element={<DashboardLogin /> }  />
        </Routes>
    </div>
  );
}

export default App;
