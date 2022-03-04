import React, { useState } from 'react';

import { content } from "./data";

import BigTitle from '../../components/BigTitle';

import './style.scss';
import './mediascreen.scss';


const SectionMission = () => {
    
    var data = content[0];
    
    return ( 

    <section className="section-mission-main">
               
               <div className="section-mission-bigtitle-01-wrap">
                <BigTitle text={data[0].title} />
                </div>

        <div className="container section-mission-wrapper">
            
            <div className="section-mission-content">
                <div className="section-mission-bigtitle-02-wrap">
                    <BigTitle text={data[0].title} />
                </div>
                <article className="article-mission-wrap">
                    
                    {data[0].description.map((module, n) => {
                          return (
                              <p key={n}>{data[0].description[n]}</p>
                          );
                      })}

                </article>
            </div>

            <div className="section-mission-img">
                <div className="image-section-mission-wrapper">
                  <div className="image-section-mission-picture" style={{backgroundImage: 'url(' + data[0].image + ')'}}></div>
                </div>
            </div>


        </div>
    </section>

     );
}
 
export default SectionMission ;