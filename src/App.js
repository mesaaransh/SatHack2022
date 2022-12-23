import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login.js";
import Dash from "./pages/Dash.js";
import Register from "./pages/Register";
import RegComplain from "./pages/RegComplain.js";
import Complaints from "./pages/Complaints.js";
import Gta from "./pages/Gta.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element = {<Register/>}></Route>
          <Route path="/dash" element = {<Dash/>}></Route>
          <Route path="/complain" element = {<RegComplain/>}></Route>
          <Route path="/allcomplaints" element = {<Complaints/>}></Route>

          <Route path="/gta" element = {<Gta/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
