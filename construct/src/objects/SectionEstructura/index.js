import React, { useState } from 'react';

import './style.scss';

import { content } from '../../databases/estructuraAcademia/data';

import BigTitle from '../../components/BigTitle';
import ReactPlayer from 'react-player';


const SectionEstructura = () => {

    const data = content[0];

    return ( 

    <section className="estructura-main">

        <div className="container estructura-title-wrapper">

            <div className="estructura-title">
                <BigTitle text="ESTRUCTURA DE LA ACADEMIA"/>
            </div>

            <div className="estructura-videos-wrapper">
                <div className="estructura-video-left">

                    <ReactPlayer
                        url={data[1].videoLink}
                        light={require('../../videos/StudioAcademia/Studio_Inauguracion_Thumbnail-1.png')}
                        className='react-player'
                        loop muted playsinline controls playing
                        width='100%'
                        height='100%'
                    />

                </div>

                <div className="estructura-video-right">

                    <ReactPlayer
                        url={data[2].videoLink}
                        light={require('../../videos/StudioAcademia/Studio_Inauguracion_Thumbnail-2.png')}
                        className='react-player'
                        loop muted playsinline controls playing
                        width='100%'
                        height='100%'
                    />

                </div>
            </div>

            <div className="estructura-content">
                <p> {data[0].content} </p>
            </div>

       
        </div>

    </section>

     );
}
 
export default SectionEstructura ;