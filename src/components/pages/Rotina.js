import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../views/Nav';
import Countdown from '../views/countdown';
import Esquemaestudos from '../views/esquemaestudos';
const Usuario = () => {
    return (
        <div>
            <Navbar />
            <Countdown />
            <Esquemaestudos />
            
        </div>
    );
}

export default Usuario;