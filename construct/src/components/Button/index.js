import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const Button = (props) => {
    
    switch (props.type){

        case "route" :
            
            return (  
            
                <NavLink className={"button " + props.name} to={props.link} style={{width: props.width}}><span>{props.text}</span></NavLink>    
        
            );
            
        case "redirect" :

            return (  
         
                <a className={"button " + props.name} href={props.link} target={props.target} style={{width: props.width}}><span>{props.text}</span></a>
                    
            );


        default :
        
            return (  
           
                <NavLink className={"button " + props.name} to={props.link} style={{width: props.width}}><span>{props.text}</span></NavLink>    
              
            );
    

    }




}
 
export default Button ;