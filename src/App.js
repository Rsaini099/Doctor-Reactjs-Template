import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Award from './pages/Award';
import Team from './pages/Team';
import Contect from './pages/Contect';
import Doctor from './pages/Doctor';
import DoctorSingle from './pages/DoctorSingle';
import Appointment from './pages/Appointment';
import Signup from './pages/Signup';
import SignupPatients from './pages/SignupPatients';
import SignupDoctor from './pages/SignupDoctor';
import Signin from './pages/Signin';
import Confirmation from './pages/Confirmation';
import SimpleSlider from './pages/SimpleSlider';
import TestPage from './pages/TestPage';
import DoctorRegister from './pages/DoctorRegister';
import PatientsRegister from './pages/PatientsRegister';

function App() {
  return (
    <>
          <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/award" element={<Award />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorsingle" element={<DoctorSingle />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signuppatients" element={<SignupPatients />} />
          <Route path="/signupdoctor" element={<SignupDoctor />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/simpleslider" element={<SimpleSlider />} />
          <Route path="/patientsregister" element={<PatientsRegister />} />
          <Route path="/doctoregister" element={<DoctorRegister />} />



          <Route path="/test" element={<TestPage />} />

         </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
