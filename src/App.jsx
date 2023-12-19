import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"
import ProfilePage from "./pages/Profile"


function App() {


  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
