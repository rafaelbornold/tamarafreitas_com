import react from "react";
import {Routes, Route, BrowserRouter as Router, Navigate} from "react-router-dom";
import ScrollToTop from './services/ScrollToTop.js';


import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Links from "./pages/links";
import Formaciones from "./pages/formaciones";
import FormacionDetails from "./pages/formacionDetails";
import Procedimientos from "./pages/procedimientos";
import ProcedimientoDetails from "./pages/procedimientoDetails";
import CitasReservas from "./pages/citasReservas";
import Faq from "./pages/faq";

const MainRoutes = () => {
    
    return (  
        <>
        <Router>
        <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />

                    <Route path="/formaciones" element={<Formaciones />} />
                    <Route path="/formaciones/LashLiftingPro" element={<FormacionDetails formacion="LashLiftingPro" />} />
                    <Route path="/formaciones/IntensiveMicroblading" element={<FormacionDetails formacion="IntensiveMicroblading" />} />
                    <Route path="/formaciones/AdvancedMicroblading" element={<FormacionDetails formacion="AdvancedMicroblading" />} />
                    
                    <Route path="/procedimientos" element={<Procedimientos />} />
                    <Route path="/procedimientos/DepilacionConHilo" element={<ProcedimientoDetails procedimiento="DepilacionConHilo" />} />
                    <Route path="/procedimientos/DisenoDeCejas" element={<ProcedimientoDetails procedimiento="DisenoDeCejas" />} />
                    <Route path="/procedimientos/Pestanas" element={<ProcedimientoDetails procedimiento="Pestanas" />} />
                    <Route path="/procedimientos/Micropigmentacion" element={<ProcedimientoDetails procedimiento="Micropigmentacion" />} />
                    <Route path="/procedimientos/Microblading" element={<ProcedimientoDetails procedimiento="Microblading" />} />

                    <Route path="/faq" element={<Faq />} />
                    <Route path="/citasReservas" element={<CitasReservas />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
        </Router>
        </>

    );
}
 
export default MainRoutes ;

