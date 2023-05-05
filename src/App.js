import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Header from "./components/Header/Header";
import Employees from "./components/Employees/Employees";
// import calculatePsychSafetyScore from "../src/components/ChartInfo/ChartInfo";
import SurveyPage from "../src/pages/SurveyPage/SurveyPage";

function App() {
  return (

 <div className="main">
    <Nav />
    {/* <Dashboard /> */}

   <Routes>
   <Route path="/" element={<Dashboard />} />
   <Route path="/employees" element={<Employees />} />
   </Routes>
 </div> 
  );
}

export default App;
