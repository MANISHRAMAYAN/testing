import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Menu from "./Compoments/Layout/Menu";
import Middes from "./Compoments/Layout/Middle/Middes";
import Home from "./Compoments/Layout/Home";

export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
    </>
  )
}
