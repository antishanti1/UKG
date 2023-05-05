// import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import calculatePsychSafetyScore from "../src/components/ChartInfo/ChartInfo";

function App() {
  return (
   <>
    <Nav />
    <Dashboard />

   {/* <Routes>
    
   </Routes> */}
   </>
  );
}

export default App;
