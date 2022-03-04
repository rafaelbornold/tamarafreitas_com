import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Button';
import IconLink from '../IconLink';


import './style.scss'

const CursosList = (props) => {

      if (props.view == "table"){

            return ( 
              <div className="cursos_list-table">  
                <div className="cursos_list-table-content">
                    <div className="cursos_list-table-tr">  
                        <div className="cursos_list-table-th fecha"> 
                              <div className="cursos_list-table-th-title-wrap">
                                    <IconLink link="" target="" src="mini-calendar"/>
                                    <span>Fecha</span>
                              </div>
                        </div>  
                        
                        <div className="cursos_list-table-th hora">
                              <div className="cursos_list-table-th-title-wrap"> 
                                    <IconLink link="" target="" src="mini-time"/>
                                    <span>Hora</span>
                              </div>
                        </div>  
                        <div className="cursos_list-table-th maestro">
                              <div className="cursos_list-table-th-title-wrap">
                                    <IconLink link="" target="" src="mini-person"/>
                                    <span>Maestro</span>
                              </div>  
                        </div>  
                        <div className="cursos_list-table-th curso">
                              <div className="cursos_list-table-th-title-wrap">                          
                                    <IconLink link="" target="" src="mini-star"/>
                                    <span>Curso</span>
                              </div>  
                        </div>  
                        <div className="cursos_list-table-th ubicacion">
                              <div className="cursos_list-table-th-title-wrap">
                                    <IconLink link="" target="" src="mini-location"/>
                                    <span>Ubicación</span>
                              </div>  
                        </div>
                        <div className="cursos_list-table-th vermais">
                              <span></span>
                        </div>
                    </div>
                    <div className="cursos_list-table-tr">   
                          <div className="cursos_list-table-td fecha"><p><span>10/set</span><span>11/set</span><span>12/set</span><span>13/set</span></p></div>  
                          <div className="cursos_list-table-td hora"><p><span>8:00 - 17:00</span></p></div>  
                          <div className="cursos_list-table-td maestro"><p><span>Tamara Freitas</span></p></div>  
                          <div className="cursos_list-table-td curso"><p><span>Intensive Microblading</span></p></div>  
                          <div className="cursos_list-table-td ubicacion"><p><span>Valencia/ESP</span></p></div>
                          <div className="cursos_list-table-td vermais"><p> <Button name="btn-01" width="130px" type="route" text="VER MAIS" link="/formaciones" target="_self" /></p></div>
                    </div> 
                    <div className="cursos_list-table-tr">   
                          <div className="cursos_list-table-td fecha"><p><span>10/set</span></p></div>  
                          <div className="cursos_list-table-td hora"><p><span>8:00 - 17:00</span></p></div>  
                          <div className="cursos_list-table-td maestro"><p><span>Tamara Freitas</span></p></div>  
                          <div className="cursos_list-table-td curso"><p><span>Lash Lifting</span></p></div>  
                          <div className="cursos_list-table-td ubicacion"><p><span>Valencia/ESP</span></p></div>
                          <div className="cursos_list-table-td vermais"><p> <Button name="btn-01" width="130px" type="route" text="VER MAIS" link="/formaciones" target="_self" /></p></div>
                    </div> 
                    <div className="cursos_list-table-tr">   
                          <div className="cursos_list-table-td fecha"><p><span>10/set</span></p></div>  
                          <div className="cursos_list-table-td hora"><p><span>8:00 - 17:00</span></p></div>  
                          <div className="cursos_list-table-td maestro"><p><span>Tamara Freitas</span></p></div>  
                          <div className="cursos_list-table-td curso"><p><span>Depilación con hilo</span></p></div>  
                          <div className="cursos_list-table-td ubicacion"><p><span>Valencia/ESP</span></p></div>
                          <div className="cursos_list-table-td vermais"><p> <Button name="btn-01" width="130px" type="route" text="VER MAIS" link="/formaciones" target="_self" /></p></div>
                    </div> 
                    <div className="cursos_list-table-tr">   
                          <div className="cursos_list-table-td fecha"><p><span>10/set</span><span>11/set</span><span>12/set</span><span>13/set</span></p></div>  
                          <div className="cursos_list-table-td hora"><p><span>8:00 - 17:00</span></p></div>  
                          <div className="cursos_list-table-td maestro"><p><span>Tamara Freitas</span></p></div>  
                          <div className="cursos_list-table-td curso"><p><span>Advanced Microblading</span></p></div>  
                          <div className="cursos_list-table-td ubicacion"><p><span>Valencia/ESP</span></p></div>
                          <div className="cursos_list-table-td vermas">
                            <p> 
                              <Button name="btn-01" width="130px" type="route" text="VER MÁS" link="/formaciones" target="_self" />
                            </p>
                          </div>
                    </div> 
                </div>
                {/* <div className="cursos_list-table-wrapper-button">
                  <Button name="btn-03" width="160px" type="route" text="VER TODO" link="/something"/>
                </div> */}
              </div>  
      
            );
      }


      if (props.view == "block"){

            return ( 

              <div className="cursos_list-block"> 
    
                  <article className="cursos_list-block-content">
                        <div className="cursos_list-block-th-wrap">
                              <div className="cursos_list-block-th th-curso">                          
                                    <IconLink link="" target="" src="mini-star"/>
                                    <span>Intensive Microblading</span>
                              </div>  

                              <div className="cursos_list-block-th th-maestro">                          
                                    <IconLink link="" target="" src="mini-person"/>
                                    <span>Tamara Freitas</span>
                              </div>  

                              <div className="cursos_list-block-th th-location">                          
                                    <IconLink link="" target="" src="mini-location"/>
                                    <span>Valencia/ES</span>
                              </div>  

                              <div className="cursos_list-block-th th-date">                          
                                    <IconLink link="" target="" src="mini-calendar"/>
                                    <span>10/set - 13/set</span>
                              </div>  

                              <div className="cursos_list-block-th th-time">                          
                                    <IconLink link="" target="" src="mini-time"/>
                                    <span>8:00 - 17:00</span>
                              </div>  

                              <div className="cursos_list-block-wrapper-button">
                                    <Button name="btn-01" width="85%" type="route" text="VER MÁS" link="formaciones"/>
                              </div>
                        </div>
                  </article>

                  <article className="cursos_list-block-content">
                        <div className="cursos_list-block-th-wrap">
                              <div className="cursos_list-block-th th-curso">                          
                                    <IconLink link="" target="" src="mini-star"/>
                                    <span>Intensive Microblading</span>
                              </div>  

                              <div className="cursos_list-block-th th-maestro">                          
                                    <IconLink link="" target="" src="mini-person"/>
                                    <span>Tamara Freitas</span>
                              </div>  

                              <div className="cursos_list-block-th th-location">                          
                                    <IconLink link="" target="" src="mini-location"/>
                                    <span>Valencia/ES</span>
                              </div>  

                              <div className="cursos_list-block-th th-date">                          
                                    <IconLink link="" target="" src="mini-calendar"/>
                                    <span>10/set - 13/set</span>
                              </div>  

                              <div className="cursos_list-block-th th-time">                          
                                    <IconLink link="" target="" src="mini-time"/>
                                    <span>8:00 - 17:00</span>
                              </div>  

                              <div className="cursos_list-block-wrapper-button">
                                    <Button name="btn-01" width="85%" type="route" text="VER MÁS" link="formaciones"/>
                              </div>
                        </div>
                  </article>


              </div>  
      
            );
      }
        
    

}

 
export default CursosList ;