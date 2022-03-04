import React, { useState } from 'react';
import StatisticalNumbers from '../../components/StatisticalNumbers';

import './style.scss';

const SectionStatisticalNumbers = () => {
    return ( 

    <section className="section_statistical_numbers-main">

        <div className="container section_statistical_numbers-wrapper">
            
            <StatisticalNumbers 
                number="2021"  
                unit="Procedimientos"
                action="realizados"
            />

            
            <StatisticalNumbers 
                number="35,2"  
                numberAdd="mil"  
                unit="Seguidores"
                action="no instagram"
            />
        
            
            <StatisticalNumbers 
                number="2021"  
                unit="Cursos"
                action="impartidos"
            />
        
            
            <StatisticalNumbers 
                number="2021"  
                unit="certificados"
                action="de especialización"
            />
        
                    
            <StatisticalNumbers 
                number="2021"  
                unit="Horas"
                action="de classe"
            />
        



        </div>

    </section>

     );
}
 
export default SectionStatisticalNumbers ;