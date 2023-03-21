import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./Signup";
import { NavBar } from "./layout";
import { PetProfile } from "./Pages/PetProfile";
import CardProfile from "./Components/PetProfileForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pet-profile" element={<CardProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
