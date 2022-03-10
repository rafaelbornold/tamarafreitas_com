import React, { Component } from "react";
import data from "./data";
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

import "./styles.css";

const cardSize = 310;

function CarouselContainer(props) {
  const { cursor, ...rest } = props;
  console.log("render");
  const translateX = cursor.toFixed(5) * cardSize;
  return (
    <div className={"carousel-container"}>
      <div
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </div>
  );
}

const Container = touchWithMouseHOC(CarouselContainer);

class CarouselCards extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  renderCard(index, modIndex) {
    return (
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${modIndex}`)}
      >
        <div>{index}</div>
      </div>
    );
  }

  render() {
    return (
      <>
        <TouchCarousel
          ref={this.myRef}
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          loop={true}
          renderCard={this.renderCard}
          onRest={(index) => console.log(`rest at index ${index}`)}
        />
        <button
          onClick={() => {
            console.log(this.myRef.current.state.cursor);
            this.myRef.current.go(-2);
          }}
        >
          {" "}
          go to card 2
        </button>
        <button
          onClick={() => {
            this.myRef.current.prev();
          }}
        >
          previous card
        </button>
        <button
          onClick={() => {
            this.myRef.current.next();
          }}
        >
          next card
        </button>
      </>
    );
  }
}

export default CarouselCards;
