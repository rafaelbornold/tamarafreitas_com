/* eslint-disable no-empty */
import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom';

import './style.scss';
import './closeButton.scss';

export function ViewMedia(src, mediaType) {
  switch (mediaType) {
    case 'video':
      ReactDOM.render(
        <ReactPlayer
          url={src}
          volume={0.2}
          playsinline
          controls
          width="100%"
        />,
        document.getElementById('FullOpenMedia-OpenMedia-media'),
      );

      screenOpen();

      break;

    case 'image':
      ReactDOM.render(<img src={src} />, document.getElementById('FullOpenMedia-OpenMedia-media'));

      screenOpen();

      break;

    case 'link':
      {
        // the navigate link will be handled inside the CarouselCardInner.js component
      }

      break;

    case 'none':
      {
        // do nothing
      }

      break;

    default:
      {
        // do nothing
      }

      break;
  }
}

function screenOpen() {
  document.querySelector('.FullOpenMedia-fullscreen').style.display = 'block';

  setTimeout(function () {
    document.querySelector('.FullOpenMedia-fullscreen').style.opacity = 1;
  }, 100);
}

function screenClose(e) {
  if (e.target.className != '') {
    document.querySelector('.FullOpenMedia-fullscreen').style.opacity = 0;

    setTimeout(function () {
      document.querySelector('.FullOpenMedia-fullscreen').style.display = 'none';
    }, 500);

    ReactDOM.render(<div />, document.getElementById('FullOpenMedia-OpenMedia-media'));
  }
}

function handleTouch(action) {
  action == 'move' ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
}

export const FullOpenMedia = () => {
  return (
    <>
      <div
        className="FullOpenMedia-fullscreen"
        onClick={screenClose}
        onTouchStart={() => handleTouch('move')}
        onTouchEnd={() => handleTouch('end')}
      >
        <div
          className="FullOpenMedia-closeButton-box"
          onClick={screenClose}
        >
          <div className="FullOpenMedia-closeButton-btn FullOpenMedia-closeButton-active">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
          </div>
        </div>

        <div
          className="FullOpenMedia-OpenMedia"
          onTouchStart={() => handleTouch('move')}
          onTouchEnd={() => handleTouch('end')}
        >
          <div className="FullOpenMedia-OpenMedia-media-wrap">
            <div id="FullOpenMedia-OpenMedia-media"></div>
            {/* ReactPlayer or Image will be rendered here */}
          </div>
        </div>
      </div>
    </>
  );
};
