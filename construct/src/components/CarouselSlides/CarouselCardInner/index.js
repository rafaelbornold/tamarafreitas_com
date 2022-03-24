import React from 'react';
import { useNavigate } from 'react-router-dom';

import BigTitle from '../../BigTitle';

import './style.scss'

const CarouselCardInner = (props) => {
    
    var item = props.data;
    var style = props.style; // CSS className
    const navigate = useNavigate();

    switch (style){


        case 'carousel-card-style-00':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.add("image--hover");

                    var PlaySymbolWrap = e.target.querySelector(`.${style}-play_symbol-wrap`);
                    PlaySymbolWrap.classList.add(`${style}-play_symbol-wrap--hover`);

                    var PlaySymbol = e.target.querySelector(`.${style}-play_symbol`);
                    PlaySymbol.classList.add(`${style}-play_symbol--hover`);

                    var ContentElement = e.target.querySelector(`.${style}-content`);
                    ContentElement.classList.add(`${style}-content--bold_hover`);

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.remove("image--hover");

                    var PlaySymbolWrap = e.target.querySelector(`.${style}-play_symbol-wrap`);
                    PlaySymbolWrap.classList.remove(`${style}-play_symbol-wrap--hover`);

                    var PlaySymbol = e.target.querySelector(`.${style}-play_symbol`);
                    PlaySymbol.classList.remove(`${style}-play_symbol--hover`);

                    var ContentElement = e.target.querySelector(`.${style}-content`);
                    ContentElement.classList.remove(`${style}-content--bold_hover`);

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >

                        <div className={`${style}-background`}>
                        </div>

                        <div className={`${style}-image`} style={{ backgroundImage: `url(${item.background})`}}>
                        </div>
                        
                    </div>

                );
            }
        break;

        case 'carousel-card-style-01':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.add("image--hover");

                    var PlaySymbolWrap = e.target.querySelector(`.${style}-play_symbol-wrap`);
                    PlaySymbolWrap.classList.add(`${style}-play_symbol-wrap--hover`);

                    var PlaySymbol = e.target.querySelector(`.${style}-play_symbol`);
                    PlaySymbol.classList.add(`${style}-play_symbol--hover`);

                    var ContentElement = e.target.querySelector(`.${style}-content`);
                    ContentElement.classList.add(`${style}-content--bold_hover`);

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.remove("image--hover");

                    var PlaySymbolWrap = e.target.querySelector(`.${style}-play_symbol-wrap`);
                    PlaySymbolWrap.classList.remove(`${style}-play_symbol-wrap--hover`);

                    var PlaySymbol = e.target.querySelector(`.${style}-play_symbol`);
                    PlaySymbol.classList.remove(`${style}-play_symbol--hover`);

                    var ContentElement = e.target.querySelector(`.${style}-content`);
                    ContentElement.classList.remove(`${style}-content--bold_hover`);

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >

                        <div className={`${style}-background`}>
                        </div>

                        <div className={`${style}-image`} style={{ backgroundImage: `url(${item.background})`}}>
                        </div>
                        

                        <div className={`${style}-play_symbol-wrap`}>
                            <div className={`${style}-play_symbol`}></div>   
                        </div>

                        <div className={`${style}-content`}>

                            <h6>{item.textSummary}</h6>
                            <p>{item.textContent}</p>

                        </div>

                    </div>

                );
            }
        break;

        case 'carousel-card-style-02':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                    navigate(item.viewSrc);

                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.add("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.add("title--hover");
                    TitleElement.style.backgroundColor = "rgba(0, 0, 0, 0.0)";


                    var bigtitle = TitleElement.querySelector(`.bigtitle`);
                    bigtitle.style.transition = "color 0.7s, font-size 0.2s"
                    bigtitle.style.color = "var(--rosa-escuro)";
                    bigtitle.style.fontSize = "26px";

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.remove("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.remove("title--hover");
                    TitleElement.style.backgroundColor = "var(--rosa-escuro)";

                    var bigtitle = TitleElement.querySelector(`.bigtitle`);
                    bigtitle.style.color = "white";
                    bigtitle.style.fontSize = "20px";

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >

                        <div className={`${style}-background`}>
                        </div>

                        <div className={`${style}-image`} style={{ backgroundImage: `url(${item.background})`}}>
                        </div>

                        <div className={`${style}-title`}>
                            <BigTitle text={item.title} fontSize="20px" fontColor="white"/>
                        </div>
                        
                        <div className={`${style}-content`}>

                            <h6>{item.textSummary}</h6>
                            <div className="barra"></div>
                            <p>{item.textContent}</p>

                        </div>

                        <div className={`${style}-button`}>

                            <div className="vermas"><span>Ver Mas</span></div>

                        </div>

                    </div>

                );
            }
        break;

        case 'carousel-card-style-02a':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                    navigate(item.viewSrc);

                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.add("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.add("title--hover");
                    TitleElement.style.backgroundColor = "rgba(0, 0, 0, 0.0)";


                    var bigtitle = TitleElement.querySelector(`.bigtitle`);
                    bigtitle.style.transition = "color 0.7s, font-size 0.2s"
                    bigtitle.style.color = "var(--rosa-escuro)";
                    bigtitle.style.fontSize = "26px";

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.remove("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.remove("title--hover");
                    TitleElement.style.backgroundColor = "var(--rosa-escuro)";

                    var bigtitle = TitleElement.querySelector(`.bigtitle`);
                    bigtitle.style.color = "white";
                    bigtitle.style.fontSize = "20px";

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >

                        <div className={`${style}-background`}>
                        </div>

                        <div className={`${style}-image`} style={{ backgroundImage: `url(${item.background})`}}>
                        </div>

                        <div className={`${style}-title`}>
                            <BigTitle text={item.title} fontSize="20px" fontColor="white"/>
                        </div>
                        
                        <div className={`${style}-content`}>

                            <h6>{item.textSummary}</h6>
                            <div className="barra"></div>
                            <p>{item.textContent}</p>

                        </div>

                        {/* <div className={`${style}-button`}>

                            <div className="vermas"><span>Ver Mas</span></div>

                        </div> */}

                    </div>

                );
            }
        break;

        case 'carousel-card-style-03':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >
   
                        <div className={`${style}-content`}>

                            <h6>{item.title}</h6>
                            <p>{item.textContent}</p>
                            <div className={`${style}-sticker_image`}>
                                <img src={item.sticker} />
                            </div>

                        </div>
      
                    </div>

                );
            }
        break;

        case 'carousel-card-style-04':
            {    

                function handleClick(e){

                    document.body.classList.remove("noselect");
                    
                    navigate(item.viewSrc);

                    
                }
                
                function handleOver(e){

                    document.body.classList.add("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.add("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.add("title--hover");
                    // TitleElement.style.backgroundColor = "rgba(0, 0, 0, 0.0)";

                }  
                
                function handleLeave(e){

                    document.body.classList.remove("noselect");

                    var ImageElement = e.target.querySelector(`.${style}-image`);
                    ImageElement.classList.remove("image--hover");

                    var TitleElement = e.target.querySelector(`.${style}-title`);
                    TitleElement.classList.remove("title--hover");
                    // TitleElement.style.backgroundColor = "var(--rosa-escuro)";

                }            

                return (  

                    <div className={"carousel-card-inner-content-wrap " + style} 
                        onMouseOver={handleOver} 
                        onMouseLeave={handleLeave}
                        onTouchStart={handleOver} 
                        onTouchEnd={handleLeave}
                        onClick={handleClick}
                    >

                        <div className={`${style}-background`}>
                        </div>

                        <div className={`${style}-image`} style={{ backgroundImage: `url(${item.background})`}}>
                        </div>

                        <div className={`${style}-title`}>
                            
                            <h6 className={`${style}-item_title`}>{item.title}</h6>

                        </div>
                        
                        <div className={`${style}-content`}>

                            <h4>{item.title}</h4>
                            <p>{item.textContent}</p>

                        </div>

                    </div>

                );
            }
        break;


    }

}
 
export default CarouselCardInner ;