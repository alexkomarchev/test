import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/header/Header";
import Slider from "./pages/slider/Slider";
import Pagination from "./pages/pagination/Pagination";
import Pagesinfo from "./pages/pagesinfo/Pagesinfo";


function App() {
  return (

     <BrowserRouter>
       <Header/>

       <Routes>
         <Route path={"/"} element={<Slider/>}/>
         <Route path={"/pagination"} element={<Pagination/>}/>
         <Route path={"/:id"} element={<Pagesinfo/>}/>
       </Routes>

     </BrowserRouter>
  );
}

export default App;
