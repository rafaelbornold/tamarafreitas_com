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
                        className='react-player'
                        loop muted playsinline controls
                        width='100%'
                        height='100%'
                    />

                </div>

                <div className="estructura-video-right">

                    <ReactPlayer
                        url={data[2].videoLink}
                        className='react-player'
                        loop muted playsinline controls
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