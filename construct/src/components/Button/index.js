import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss'

const Button = (props) => {
    
    const type     = props.type;
    const name     = props.name;
    const link     = props.link;
    const target   = props.target; // only for redirect type
    const width    = props.width;
    const text     = props.text
    const fontSize = props.fontSize;

    switch (type){

        case "route" :
            
            return (  
            
                <NavLink className={"button " + name} to={link} style={{width: width}}>
                    <span style={{fontSize: fontSize}}>
                        {text}
                     </span>
                </NavLink>    
        
            );
            
        case "redirect" :

            return (  
         
                <a className={"button " + name} href={link} target={target} style={{width: width}}>
                    <span style={{fontSize: fontSize}}>
                        {text}
                    </span>
                </a>
                    
            );


        default :
        
            return (  
           
                <NavLink className={"button " + name} to={link} style={{width: width}}>
                    <span style={{fontSize: fontSize}}>
                        {text}
                    </span>
                </NavLink>    
              
            );
    

    }




}
 
export default Button ;