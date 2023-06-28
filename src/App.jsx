import "./App.css";
import MenuAppBar from "./components/AppBar/MenuAppBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Reports from "./components/Reports/Reports";
import Expenses from "./components/Expenses/Expenses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./components/Reports/Reports";
import { ThemeProvider } from "@mui/material";
import LogOut from "./components/LogOut/LogOut";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <MenuAppBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logOut" element={<LogOut />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
