import React, { useState } from 'react';

import { content } from "./data";


import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';


import './style.scss';

const SectionFAQ_citasReservas = () => {

    var data = content[0];

    return ( 

    <section className="section-FAQ_citasReservas-main">

        <div className="container section-FAQ_citasReservas-wrap">

            <div className="section-FAQ_citasReservas-title">
                <BigTitle text="PREGUNTAS FRECUENTES"/>
            </div>

            <div className="section-FAQ_citasReservas-list-wrap">
                <div className="section-FAQ_citasReservas-list-content">

                {data.map((module, n) => {
                return (
                    <ListShowHide 
                        key={n+1}
                        number={n+1}
                        title={data[n].title}
                        description={data[n].description}
                    />
                    );
                    })}

                </div>
            </div>

        </div>

    </section>

     );
}
 
export default SectionFAQ_citasReservas ;