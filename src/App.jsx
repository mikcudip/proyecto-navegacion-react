import { Navigate, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import HomeScreen from "./assets/routes/HomeScreen";
import AboutScreen from "./assets/routes/AboutScreen";
import ContactScreen from "./assets/routes/ContactScreen";

const App = () => {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

export default App;
