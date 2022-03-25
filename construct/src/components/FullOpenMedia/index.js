/* eslint-disable no-empty */
import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom';

import './style.scss';

export function ViewMedia(src, mediaType) {
  switch (mediaType) {
    case 'video':
      ReactDOM.render(
        <ReactPlayer url={src} muted playsinline controls width="100%" />,
        document.getElementById('FullOpenMedia-OpenMedia-img'),
      );

      screenOpen();

      break;

    case 'image':
      ReactDOM.render(<img src={src} />, document.getElementById('FullOpenMedia-OpenMedia-img'));

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

    ReactDOM.render(<div />, document.getElementById('FullOpenMedia-OpenMedia-img'));
  }
}

export const FullOpenMedia = () => {
  return (
    <div className="FullOpenMedia-fullscreen" onClick={screenClose}>
      <div className="FullOpenMedia-OpenMedia">
        <div className="FullOpenMedia-OpenMedia-media-wrap">
          <div id="FullOpenMedia-OpenMedia-img"></div>
          {/* ReactPlayer or Image will be rendered here */}
        </div>
      </div>
    </div>
  );
};
