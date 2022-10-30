import Component from '../../classes/Component';

import each from 'lodash/each';

import Media from './Media';

/*
.home__gallery__item__content

width: 100%;
height: 100%;

position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;

*/

export default class Video extends Component {
  constructor() {
    super({
      element: '.home__gallery__wrapper',
      elements: {
        // videos: '.home__gallery__item',
        playingVideos: [],
        videoWrapper: '.video__controls__wrapper',
        videoWrapperArr: [],
        playBtn: [],
        pauseBtn: [],
        fullBtn: [],
        videoProgress: [],
        videoProgressAndVideos: [],
      },
    });
    this.targetMedia = null;
    this.medias = [];
    this.initMedias();
  }

  initMedias() {
    each(this.elements.videoWrapper, (vid, i) => {
      vid.addEventListener('click', (e) => {
        let videoContainer = e.target.closest(
          '.home__gallery__video__container'
        );
        // Play Video
        each(videoContainer.children, (child) => {
          if (
            child.classList.contains('home__gallery__item__video') &&
            child.nodeName === 'VIDEO'
          ) {
            this.targetMedia = child;
          }
        });
      });
      this.elements.videoWrapperArr.push(vid);
      // Parse buttons
      each(vid.children, (child) => {
        if (child.classList.contains('video__controls--play')) {
          this.elements.playBtn.push(child);
        }

        if (child.classList.contains('video__controls--pause')) {
          this.elements.pauseBtn.push(child);
        }

        if (child.classList.contains('video__controls--fullscreen')) {
          this.elements.fullBtn.push(child);
        }

        if (child.classList.contains('video__controls--progressbar')) {
          this.elements.videoProgress.push(child);

          // An extra array that contains both <video> and the progressbar
          // Used in update() to draw the progress
          each(child.parentElement.parentElement.children, (el) => {
            if (el.classList.contains('home__gallery__item__video')) {
              this.elements.videoProgressAndVideos.push([el, child]);
            }
          });
        }
      });

      // Now we add new media

      const media = new Media({
        videoElement: this.elements.videoProgressAndVideos[i][0],
        videoProgress: this.elements.videoProgressAndVideos[i][1],
        videoWrapper: this.elements.videoWrapper[i],

        playBtn: this.elements.playBtn[i],
        pauseBtn: this.elements.pauseBtn[i],
        fullBtn: this.elements.fullBtn[i],
      });

      this.medias.push(media);
    });
  }

  addEventListeners() {
    // prevents spacebar scrolling
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target == document.body) {
        e.preventDefault();
      }
    });

    // pauses/plays last video on spacebar
    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.code === 'Space') {
        // search for a match
        each(this.elements.videoWrapper, (wrapper, i) => {
          if (wrapper.nextSibling === this.targetMedia) {
            // call video click on match
            this.medias[i].videoClickEvent(this.medias[i].videoWrapper, true);
          }
        });
      }
    });
  }
}
