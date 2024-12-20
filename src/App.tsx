import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme"
import { BrowserRouter } from "react-router-dom"
import { Box } from "@mui/material" 
import Navbar  from "@/scenes/navbar"
import {Routes, Route} from "react-router-dom"
import Dashboard from "./scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <>
      <div className="app">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/predictions" element={<div>Prediction page</div>} />
                </Routes>
              </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
 