import GSAP from 'gsap';
import Component from '../../classes/Component';
import each from 'lodash/each';
import Media from './Media';
// @todo make a separate component for each video
// store the following data inside this component:
// 1. progress
// 2. associated playBtn, pauseBtn, fullBtn
// 3. this.shouldFire for each video separately
// I think you can keep videoWrapper component theoretically,

// The problem right now is that the shouldFire is global, and also you have to calculate this videoIndex in a weird way. All these calcualtions can be ignored I think, since each video will get an index assigned on birth, so you can always refer to a particular file.

// so I think you create video.js component for each video,
// and then store them in an array at the videoWrapper.js component
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
    // Inside video container
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
    window.addEventListener('keyup', (e) => {
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
