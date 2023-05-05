// import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import calculatePsychSafetyScore from "../src/components/ChartInfo/ChartInfo";
import { Routes, Route } from "react-router-dom";
import Employees from "./components/Employees/Employees";

function App() {
  return (
   <>
    <Nav />
    <Dashboard />
    

   </>
  );
}

export default App;
