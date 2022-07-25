
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nutrition from './components/nutrition';
import { Workout } from './components/workout';
import { TrainerDashboard } from './pages/trainer-dashboard';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<TrainerDashboard />} />
        <Route path="*/workout" element={<Workout />}></Route>
        <Route path="*/nutrition" element={<Nutrition />}></Route>



      </Routes>





    </>
  );
}

export default App;
