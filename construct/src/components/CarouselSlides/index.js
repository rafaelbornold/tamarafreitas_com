// Adapted from: https://github.com/xiaody/react-touch-carousel/tree/master/examples/boring
// docs: https://www.npmjs.com/package/react-touch-carousel

import React, { Component } from "react";
import cx from "classnames";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";

import  { FullOpenMedia, ViewMedia }  from '../FullOpenMedia';

import "./styles.scss";
import CarouselCardInner from "./CarouselCardInner";


///////////////////////////////
///////////////////////////////
///////////////////////////////

const CarouselSlides = (props) => {

  var data = props.data;
  var maxWidthSlide = !props.maxWidthSlide ? 852 : props.maxWidthSlide;
  var cardWidth = parseInt(props.cardWidth);
  var cardHeight = parseInt(props.cardHeight);
  var cardGap = parseInt(props.cardGap);
  var cardStyle = props.carsStyle;

  const enableLoop = true;
  const enableAutoplay = false;
  const cardSize = cardWidth + cardGap;
  const cardPadCount = enableLoop ? 4 : 0;
  var carousel_maxWidth = maxWidthSlide;
  var carouselWidth = clamp(window.innerWidth, 0, carousel_maxWidth);
  

  function log(text) {
    // document.getElementById("console").innerText = text;
  }
  
  function CarouselContainer(props) {
    
    React.useEffect(() => {
      function handleResize() {
  
        if (window.innerWidth <= carousel_maxWidth){
  
          carouselWidth = clamp(window.innerWidth, 0, window.innerWidth);
  
        }else{
  
          carouselWidth = clamp(window.innerWidth, 0, carousel_maxWidth);
  
        }
      
    }
    
      window.addEventListener('resize', handleResize)
    })
  
  
    const {
      cursor,
      carouselState: { active, dragging },
      ...rest
    } = props;
    let current = -Math.round(cursor) % data.length;
    while (current < 0) {
      current += data.length;
    }
    // Put current card at center
    const translateX =
      (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
    return (
      <>
      <NonPassiveTouchTarget
        className={cx("carousel-container", {
          "is-active": active,
          "is-dragging": dragging,
        })}
        style={{ maxWidth: carousel_maxWidth }}
      >
        <NonPassiveTouchTarget
          className="carousel-track"
          style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          {...rest}
        />
      </NonPassiveTouchTarget>
        
      <div className="carousel-pagination-wrapper">

        <button className="carousel-pagination-button--left" onClick={() => {myRef.current.prev();}}>
          <i className="carousel-pagination-button-arrow carousel-pagination-button-arrow--left" />
        </button>

        <ol className="carousel-pagination">
          {data.map((_, index) => (
              <li key={index} className={current === index ? "current " + (index) : ""} />
          ))}
        </ol>

        <button className="carousel-pagination-button--right" onClick={() => {myRef.current.next();}}>
          <i className="carousel-pagination-button-arrow carousel-pagination-button-arrow--right" />
        </button>

      </div>



      </>
    );
  }
  
  const Container = touchWithMouseHOC(CarouselContainer);
  
  const myRef = React.useRef();

  function renderCard(index, modIndex) {
    const item = data[modIndex];
    return (
      <div
        key={index}
        className="carousel-card"
        style={{ margin: `10px ${(cardGap/2)}px` }}
        onClick={() => {
          //log(`clicked card ${1 + modIndex} - Media: ${item.mediaType} / src: ${item.viewSrc}`);
          ViewMedia(item.viewSrc, item.mediaType);
          }
        }      
      >
        <div className="carousel-card-inner-wrap" style={{ width: cardWidth , height: cardHeight }}>
          
          <CarouselCardInner 
            data={item}
            style={cardStyle}
          />
          
        </div>
        
      </div>
      
    );
  }


  return (  

    <div>
    <FullOpenMedia />
    <TouchCarousel
      ref={myRef}
      component={Container}
      cardSize={cardSize}
      cardCount={data.length}
      cardPadCount={cardPadCount}
      loop={enableLoop}
      autoplay={enableAutoplay ? 2e3 : false}
      renderCard={renderCard}
      onRest={(index) => log(`rest at index ${index}`)}
      onDragStart={() => log("dragStart")}
      onDragEnd={() => log("dragEnd")}
      onDragCancel={() => log("dragCancel")}
    />
    <div id="console" />
    </div>

    );
}

export default CarouselSlides;


///////////////////////////////
///////////////////////////////
///////////////////////////////