import Header from "./modules/Header";
import Footer from "./modules/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route ></Route>
          <Route ></Route>
          <Route ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
