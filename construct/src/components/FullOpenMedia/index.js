import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom';


import './style.scss';

export function ViewMedia(src, mediaType){


    switch (mediaType){

        case "video":

            ReactDOM.render(
        
                <ReactPlayer
                    url={src}
                    muted playsinline controls
                    width='100%'
                /> 
                ,
                document.getElementById('FullOpenMedia-OpenMedia-img')
                ); 

            screenOpen() 

        break;
        
        case "image":

            ReactDOM.render(

                <img src={src}/>
                ,
                document.getElementById('FullOpenMedia-OpenMedia-img')
                ); 

            screenOpen() 

        break;

        default:
            {}
        break;

        
    }

}


function screenOpen() {

    document.querySelector('.FullOpenMedia-fullscreen').style.display = "block";

    setTimeout(function () {
      document.querySelector('.FullOpenMedia-fullscreen').style.opacity = 1; 
    }, 100);

}


function screenClose(e){
        
    if (e.target.className != ""){
        
        document.querySelector('.FullOpenMedia-fullscreen').style.opacity = 0; 
        
        setTimeout(function () {
            document.querySelector('.FullOpenMedia-fullscreen').style.display = "none";
          }, 500);

    }

}


export const FullOpenMedia = (props) => {

    var mediaType = props.mediaType;

    return (  
        <div className="FullOpenMedia-fullscreen" onClick={screenClose}>

            <div className="FullOpenMedia-OpenMedia">
                
                <div className="FullOpenMedia-OpenMedia-media-wrap">
                   
                   <div id="FullOpenMedia-OpenMedia-img"></div>
                    
                    {/* <img id="FullOpenMedia-OpenMedia-img" className=""/> */}

                </div>
            </div>

        </div>
        );
}