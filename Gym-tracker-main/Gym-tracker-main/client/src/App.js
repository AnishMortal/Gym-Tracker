import './index.css';
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Reviews from "./pages/Reviews";
import FirstPage from "./components/FirstPage";
import BMICalculator from './pages/BMI_calculator';
import Contact from './pages/Contact';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Content currentUser={currentUser} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function Content({ currentUser }) {
  const location = useLocation(); 
  return (
    <Container>
      {currentUser ? (
        <>
          {location.pathname !== '/' && <Navbar currentUser={currentUser} />}
          <Routes>
            <Route path="/" exact element={<FirstPage />} />
            <Route path="/auth" exact element={<Authentication />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/workouts" exact element={<Workouts />} />
            <Route path="/contact" exact element={<Reviews />} />
            <Route path="/bmi" exact element={<BMICalculator />} />
            <Route path="/contacts" exact element={<Contact />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path='/signup' exact element={<Authentication/>}/>
          <Route path='/login' exact element={<Authentication/>}/>
          <Route path="/" exact element={<FirstPage />} />
          <Route path="/auth" exact element={<Authentication />} />
        </Routes>
      )}
    </Container>
  );
}

export default App;
