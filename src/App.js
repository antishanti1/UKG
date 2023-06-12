import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Employees from "./pages/Employees/Employees";
import SurveyPage from "../src/pages/SurveyPage/SurveyPage";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  return (

 <div className="main">
    <Nav />


   <Routes>
   <Route path="/" element={<Dashboard />} />
   <Route path="/employees" element={<Employees />} />
   <Route path="/survey" element={<SurveyPage />} />
   <Route path="/schedule" element={<Schedule />} />
   </Routes>
 </div> 
  );
}

export default App;
