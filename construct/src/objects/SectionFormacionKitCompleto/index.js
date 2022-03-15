import React, { useState } from 'react';

import { content } from "../../databases/formaciones/kitCompleto/data";


import BigTitle from '../../components/BigTitle';


import './style.scss';
import './mediascreen.scss'
import ImageModule from '../../components/ImageModules';

const SectionFormacionKitCompleto = (props) => {
    
    var formacion = props.formacion;

    var image = content[formacion][0].image;
    var descriptionRight = content[formacion][0].descriptionRight;
    var descriptionBottom = content[formacion][0].descriptionBottom;

    return ( 

    <section className="section-kit_completo-main">

        <div className="container section-kit_completo-wrap">

            <div className="section-kit_completo-title">
                <BigTitle text="KIT COMPLETO" fontSize="40px"/>
            </div>

            <div className="section-kit_completo-content-wrap">

                <div className="section-kit_completo-content-img-wrap">
                   <ImageModule src={image} />
                </div>

                <div className="section-kit_completo-content-description-right">
                
                   <p>
                   {descriptionRight}
                   </p>

                </div>


            </div>

            <div className="section-kit_completo-content-description-bottom">
                
                <p>
                {descriptionBottom}
                </p>

             </div>


        </div>

    </section>

     );
}
 
export default SectionFormacionKitCompleto ;