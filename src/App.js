import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from '../src/components/Nav/Nav';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Header from "./components/Header/Header";

function App() {
  return (
   <>
    <Nav />
    <Header />

   <Routes>
   <Route path="/" element={<Dashboard />} />
   </Routes>
   </>
  );
}

export default App;
