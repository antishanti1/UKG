import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Header from "./components/Header/Header";
<<<<<<< HEAD
=======
// import calculatePsychSafetyScore from "../src/components/ChartInfo/ChartInfo";
>>>>>>> origin/develop

function App() {
  return (

 <div className="main">
    <Nav />
<<<<<<< HEAD
    <Header />
=======
    {/* <Dashboard /> */}
>>>>>>> origin/develop

   <Routes>
   <Route path="/" element={<Dashboard />} />
   </Routes>
 </div> 
  );
}

export default App;
