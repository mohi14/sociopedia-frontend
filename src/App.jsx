import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"
import ProfilePage from "./pages/Profile"
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { themeSettings } from "./theme"


function App() {

  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
