/* eslint-disable no-unused-vars */
import P from 'prop-types';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import BigTitle from '../../BigTitle';

import './style.scss';

const CarouselCardInner = (props) => {
  var item = props.data;
  var style = props.style; // CSS className
  const navigate = useNavigate();

  const ImageElement = useRef(null);
  const PlaySymbolWrap = useRef(null);
  const PlaySymbol = useRef(null);
  const ContentElement = useRef(null);
  const TitleElement = useRef(null);

  switch (style) {
    case 'carousel-card-style-00': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');

        ImageElement.current.classList.add('image--hover');
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');

        ImageElement.current.classList.remove('image--hover');
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div className={`${style}-background`}></div>

          <div
            className={`${style}-image`}
            ref={ImageElement}
            style={{ backgroundImage: `url(${item.background})` }}
          ></div>
        </div>
      );
    }

    case 'carousel-card-style-01': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');
        console.log();

        ImageElement.current.classList.add('image--hover');

        PlaySymbolWrap.current.classList.add(`${style}-play_symbol-wrap--hover`);

        PlaySymbol.current.classList.add(`${style}-play_symbol--hover`);

        ContentElement.current.classList.add(`${style}-content--bold_hover`);
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');

        ImageElement.current.classList.remove('image--hover');

        PlaySymbolWrap.current.classList.remove(`${style}-play_symbol-wrap--hover`);

        PlaySymbol.current.classList.remove(`${style}-play_symbol--hover`);

        ContentElement.current.classList.remove(`${style}-content--bold_hover`);
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div className={`${style}-background`}></div>

          <div
            className={`${style}-image`}
            ref={ImageElement}
            style={{ backgroundImage: `url(${item.background})` }}
          ></div>

          <div
            className={`${style}-play_symbol-wrap`}
            ref={PlaySymbolWrap}
          >
            <div
              className={`${style}-play_symbol`}
              ref={PlaySymbol}
            ></div>
          </div>

          <div
            className={`${style}-content`}
            ref={ContentElement}
          >
            <h6>{item.textSummary}</h6>
            <p>{item.textContent}</p>
          </div>
        </div>
      );
    }

    case 'carousel-card-style-02': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');

        navigate(item.viewSrc);
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');

        ImageElement.current.classList.add('image--hover');

        TitleElement.current.classList.add('title--hover');
        TitleElement.current.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';

        const bigtitle = TitleElement.current.querySelector(`.bigtitle`);
        bigtitle.style.transition = 'color 0.7s, font-size 0.2s';
        bigtitle.style.color = 'var(--rosa-escuro)';
        bigtitle.style.fontSize = '26px';
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');

        ImageElement.current.classList.remove('image--hover');

        TitleElement.current.classList.remove('title--hover');
        TitleElement.current.style.backgroundColor = 'var(--rosa-escuro)';

        const bigtitle = TitleElement.current.querySelector(`.bigtitle`);
        bigtitle.style.color = 'white';
        bigtitle.style.fontSize = '20px';
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div className={`${style}-background`}></div>

          <div
            className={`${style}-image`}
            ref={ImageElement}
            style={{ backgroundImage: `url(${item.background})` }}
          ></div>

          <div
            className={`${style}-title`}
            ref={TitleElement}
          >
            <BigTitle
              text={item.title}
              fontSize="20px"
              fontColor="white"
            />
          </div>

          <div
            className={`${style}-content`}
            ref={ContentElement}
          >
            <h6>{item.textSummary}</h6>
            <div className="barra"></div>
            <p>{item.textContent}</p>
          </div>

          <div className={`${style}-button`}>
            <div className="vermas">
              <span>Ver Mas</span>
            </div>
          </div>
        </div>
      );
    }

    case 'carousel-card-style-02a': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');

        navigate(item.viewSrc);
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');

        ImageElement.current.classList.add('image--hover');

        TitleElement.current.classList.add('title--hover');
        TitleElement.current.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';

        const bigtitle = TitleElement.current.querySelector(`.bigtitle`);
        bigtitle.style.transition = 'color 0.7s, font-size 0.2s';
        bigtitle.style.color = 'var(--rosa-escuro)';
        bigtitle.style.fontSize = '26px';
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');

        ImageElement.current.classList.remove('image--hover');

        TitleElement.current.classList.remove('title--hover');
        TitleElement.current.style.backgroundColor = 'var(--rosa-escuro)';

        const bigtitle = TitleElement.current.querySelector(`.bigtitle`);
        bigtitle.style.color = 'white';
        bigtitle.style.fontSize = '20px';
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div className={`${style}-background`}></div>

          <div
            className={`${style}-image`}
            ref={ImageElement}
            style={{ backgroundImage: `url(${item.background})` }}
          ></div>

          <div
            className={`${style}-title`}
            ref={TitleElement}
          >
            <BigTitle
              text={item.title}
              fontSize="20px"
              fontColor="white"
            />
          </div>

          <div
            className={`${style}-content`}
            ref={ContentElement}
          >
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

    case 'carousel-card-style-03': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div
            className={`${style}-content`}
            ref={ContentElement}
          >
            <h6>{item.title}</h6>
            <p>{item.textContent}</p>
            <div className={`${style}-sticker_image`}>
              <img src={item.sticker} />
            </div>
          </div>
        </div>
      );
    }

    case 'carousel-card-style-04': {
      const handleClick = (e) => {
        document.body.classList.remove('noselect');

        navigate(item.viewSrc);
      };

      const handleOver = (e) => {
        document.body.classList.add('noselect');

        ImageElement.current.classList.add('image--hover');

        TitleElement.current.classList.add('title--hover');
      };

      const handleLeave = (e) => {
        document.body.classList.remove('noselect');

        ImageElement.current.classList.remove('image--hover');

        TitleElement.current.classList.remove('title--hover');
      };

      return (
        <div
          className={'carousel-card-inner-content-wrap ' + style}
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          onTouchStart={handleOver}
          onTouchEnd={handleLeave}
          onClick={handleClick}
        >
          <div className={`${style}-background`}></div>

          <div
            className={`${style}-image`}
            ref={ImageElement}
            style={{ backgroundImage: `url(${item.background})` }}
          ></div>

          <div
            className={`${style}-title`}
            ref={TitleElement}
          >
            <h6 className={`${style}-item_title`}>{item.title}</h6>
          </div>

          <div
            className={`${style}-content`}
            ref={ContentElement}
          >
            <h4>{item.title}</h4>
            <p>{item.textContent}</p>
          </div>
        </div>
      );
    }
  }
};

CarouselCardInner.propTypes = {
  data: P.object,
  style: P.string,
};

export default CarouselCardInner;
