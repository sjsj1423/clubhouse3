import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/get_username" element={<PhoneConfirmation />} />
      <Route  path="/" element={<Welcome />} />
      <Route  path="/invite" element={<PhoneConfirmation />} />
      <Route  path="/code_confirm" element={<CodeConfirm/>} />
      <Route  path="/allow_notification" element={<AllowNotification/>}/>


      <Route  path="/home" element={<Home/>} />
      <Route  path="/upcoming" element={<Upcoming/>} />
       
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
