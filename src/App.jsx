
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./Signup"
import { NavBar } from './layout'
import Services from "./Services"
import { PetProfile } from "./Pages/PetProfile";
import CardProfile from "./Components/PetProfileForm";
import { AuthProvider } from "./context"

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/pet-profile" element={<PrivateRoute><CardProfile/></PrivateRoute>} />
          </Route>
        </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
