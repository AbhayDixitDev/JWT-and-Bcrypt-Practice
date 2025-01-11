import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import DashBoard from "./Dahsboard";


const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="registration" element={<Registration/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;