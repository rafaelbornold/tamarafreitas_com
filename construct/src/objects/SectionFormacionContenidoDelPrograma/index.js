import React, { useState } from 'react';

import { content } from "../../databases/formaciones/contenidoDelPrograma/data";


import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';


import './style.scss';

const SectionFormacionContenidoDelPrograma = (props) => {

    var formacion = props.formacion;
    
    var data = content[formacion];

    return ( 

    <section className="section-contenido_del_programa-main">

        <div className="container section-contenido_del_programa-wrap">

            <div className="section-contenido_del_programa-title">
                <BigTitle text="CONTENIDO DEL PROGRAMA"/>
            </div>

            <div className="section-contenido_del_programa-list-wrap">
                <div className="section-contenido_del_programa-list-content">

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
 
export default SectionFormacionContenidoDelPrograma ;