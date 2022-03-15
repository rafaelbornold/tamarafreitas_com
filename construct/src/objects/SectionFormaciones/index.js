import React, { useState } from 'react';

import { content } from "../../databases/formaciones/data";

import './style.scss';

import FormacionModule from '../../components/FormacionModule';


const SectionFormaciones = () => {

    const data = content["FormacionModule"];

    return ( 

    <section className="section_formaciones-main">

        <div className="container section_formaciones-wrap">

            <div className="section_formaciones-text-up">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
            </div>

            <div className="section_formaciones-article-wrap">

            {data.map((module, n) => {
                return (
                    <FormacionModule
                        key={n}
                        title = {data[n].title}
                        sticker = {data[n].sticker}
                        image = {data[n].image}
                        description = {data[n].description}
                        availability = {data[n].availability}
                        linkVerMas = {data[n].linkVerMas}
                        linkComprar = {data[n].linkComprar}
                    />
                );
            })}
            </div>

        </div>

    </section>

     );
}
 
export default SectionFormaciones ;