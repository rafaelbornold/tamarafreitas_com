import React, { useState } from 'react';
import  { FullOpenMedia, ViewMedia }  from '../FullOpenMedia';

import './style.scss';

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 290;

const _items = [
    {
        player: {
            title: 'INTENCIVE MICROBLADING',
            desc: '',
            image: require('../../images/bgpadrao.png'),
            mediaType: "video",
            viewSrc: require('../../videos/Tamara_videoInicial_01_original_sierra.mp4'),
        },
    },
    {
        player: {
            title: "ADVANCED MICROBLADING",
            desc: "",
            image: require('../../images/bgpadrao.png'),
            mediaType: "video",
            viewSrc: require('../../videos/Tamara_videoInicial_01_original.mp4'),
        },
    },
    {
        player: {
            title: 'ACQUARELL LIPS MICROBLADING',
            desc: '',
            image: require('../../images/bgpadrao.png'),
            mediaType: "video",
            viewSrc: require('../../videos/Tamara_videoInicial_01_original_sunset.mp4'),
        },
    },
    {
        player: {
            title: 'LASH LIFTING',
            desc: '',
            image: require('../../images/bgpadrao.png'),
            mediaType: "video",
            viewSrc: require('../../videos/Tamara_videoInicial_01_vintage.mp4'),
        },
    },
    {
        player: {
            title: 'DEPILACIÓN CON HILO',
            desc: '',
            image: require('../../images/bgpadrao.png'),
            mediaType: "image",
            viewSrc: require('../../images/landscape/IMG-20200812-WA0021.JPG')
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}px)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};


const CarouselSlideItem = ({handleMouseDown, pos, idx, activeIdx}) => {

    const item = createItem(pos, idx, activeIdx);

    return (
        <article className="videos_carousel__slide-item" style={item.styles} onMouseDown={handleMouseDown}>
            <div className="videos_carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} onClick={() => {ViewMedia(item.player.viewSrc, item.player.mediaType)}} />
                <div className="videos_carousel-slide-item__body">
                    <h4>{item.player.title}</h4>
                    <p>{item.player.desc}</p>
                </div>
            </div>
        </article>
    );
};

const keys = Array.from(Array(_items.length).keys());

//////////////////////////////////////////
//////// MOUSE & TOUCH EFECT /////////////
//////////////////////////////////////////

const handleMouseDown = (e) => {
    
    // e.preventDefault();
    /* this is our card we will move */
    let card = e.target.parentElement.parentElement;
    console.log(card);
    /* to keep track of the value to offset the card left */
    let offset = 0;
    /* keeps the initial mouse click x value */
    let initialX = e.clientX;
    /* set the documents onmousemove event to use this function*/
    document.onmousemove = onMouseMove;
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onMouseUp;

    /* when the mouse moves we handle the event here */
    function onMouseMove(e) {
      /* set offset to the current position of the cursor,
      minus the initial starting position  */
      offset = e.clientX - initialX;

      /* set the left style property of the card to the offset 
      value */
      console.log("move "+offset);
      card.style.left = offset + "px";
    }

    function onMouseUp(e) {
      /* remove functions from event listeners
      (stop tracking mouse movements) */
      console.log('up');
      document.onmousemove = null;
      document.onmouseup = null;
    }
};


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <>
        <FullOpenMedia />
        <div className="videos_carousel__wrap">
            <div className="videos_carousel__inner">
                <button className="videos_carousel__btn videos_carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="videos_carousel__btn-arrow videos_carousel__btn-arrow--left" />
                </button>
                <div className="videos_carousel__container">
                    <div className="videos_carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                handleMouseDown={handleMouseDown}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </div>
                </div>
                <button className="videos_carousel__btn videos_carousel__btn--next" onClick={() => nextClick()}>
                    <i className="videos_carousel__btn-arrow videos_carousel__btn-arrow--right" />
                </button>
                <div className="videos_carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Carousel;