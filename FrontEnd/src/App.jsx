import Login from './pages/Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>} >
     <Route index element={<Home/>} />
     </Route>
     <Route path='/login' element={<Login/>} />

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App