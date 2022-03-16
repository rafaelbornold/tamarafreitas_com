import React, { useState } from 'react';

import './style.scss';

import { content } from '../../databases/stastisticalNumbers/data'

import StatisticalNumbers from '../../components/StatisticalNumbers';


const SectionStatisticalNumbers = () => {

    const data = content[0];

    return ( 

    <section className="section_statistical_numbers-main">

        <div className="container section_statistical_numbers-wrapper">
            
            {data.map((module, n) => {
                        
                return (

                    <StatisticalNumbers 
                        key={n}
                        number={data[n].number}
                        numberAdd={data[n].numberAdd}
                        unit={data[n].unit}
                        action={data[n].action}
                    />
    
                );

            })}


        </div>

    </section>

     );
}
 
export default SectionStatisticalNumbers ;