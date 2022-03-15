import React, { useState } from 'react';

import { content } from "../../databases/formaciones/beneficios/data";


import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';


import './style.scss';

const SectionFormacionBeneficios = (props) => {

    var formacion = props.formacion;
    var data = content[formacion];

    return ( 

    <section className="section-formacion_benefits-main">

        <div className="container section-formacion_benefits-wrap">

            <div className="section-formacion_benefits-title">
                <BigTitle text="BENEFÍCIOS"/>
            </div>

            <div className="section-formacion_benefits-list-wrap">
                <div className="section-formacion_benefits-list-content">

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
 
export default SectionFormacionBeneficios ;