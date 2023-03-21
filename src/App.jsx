import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./Signup"


function App() {

  return (
    <div className="App">
      <Routes>
        <PrivateRoute path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Routes>
    </div>
  )
}

export default App
