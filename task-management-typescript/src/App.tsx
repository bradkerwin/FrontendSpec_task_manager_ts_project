import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import AddNewTask from "./components/AddNewTask";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/addnewtask" element={<AddNewTask />}/>
          <Route path="/profile" element={<AuthenticationGuard component={ProfilePage}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
