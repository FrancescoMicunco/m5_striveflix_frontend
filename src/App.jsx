
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import Backoffice from "./Components/Backoffice";
import Home from "./Components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

    return ( <BrowserRouter>
        <MyNavBar />
        <Routes >
        <Route path = "/backoffice" element = { < Backoffice /> }/> 
        <Route path = "/" element = { < Home /> }
        /> 
        <Route path = "*" element = { < h2 > page not found </h2>} />
            </Routes>  
            <MyFooter />
            </BrowserRouter>
        );
    }


    export default App;