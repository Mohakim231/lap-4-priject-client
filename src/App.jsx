import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./Signup"
import { NavBar } from './layout'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home/>}/>
          <Route path="/signup" component={<SignUp/>} />
          <Route path="/login" component={<Login/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
