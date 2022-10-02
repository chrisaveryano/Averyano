import each from 'lodash/each';
import Prefix from 'prefix';

export default class {
  constructor({
    videoElement,
    videoProgress,
    videoWrapper,
    playBtn,
    pauseBtn,
    fullBtn,
  }) {
    this.videoElement = videoElement;
    this.videoProgress = videoProgress;
    this.videoWrapper = videoWrapper;

    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;
    this.fullBtn = fullBtn;

    this.isPlaying = false;
    this.isTimer = false;
    this.isBlinking = false;

    this.blinkCount = 0;

    this.addEventListeners();
    this.update();

    this.videoClickEvent = this.videoClick.bind(this);
  }

  blinkProgress() {
    this.isBlinking = true;
    const tempTimer = setInterval((_) => {
      this.blinkCount += 1;

      if (this.blinkCount % 2 === 0) {
        this.videoProgress.style.opacity = 1;
      } else {
        this.videoProgress.style.opacity = 0;
      }

      if (this.blinkCount === 3) {
        this.videoProgress.style.transitionDuration = `0s`;
        this.videoProgress.style.transform = `translateX(-${100}%)`;
      }

      if (this.blinkCount >= 4) {
        this.isBlinking = false;
        this.blinkCount = 0;
        this.videoProgress.style.transitionDuration = `0.3s`;
        this.videoProgress.style.opacity = 1;
        clearInterval(tempTimer);
      }
    }, 450);
  }

  fadePause() {
    clearInterval(this.timer);
    this.timer = setInterval((_) => {
      this.isTimer = false;
      this.pauseBtn.style.opacity = 0;
      this.videoWrapper.style.cursor = 'none';

      clearInterval(this.timer);
    }, 1500);
  }

  videoTogglePlay(video) {
    if (this.isPlaying) {
      video.pause();
      video.classList.add('paused');
      video.classList.remove('playing');

      // Update DOM
      this.playBtn.style.visibility = `inherit`;
      this.pauseBtn.style.visibility = `hidden`;
      this.isPlaying = false;

      this.pauseBtn.style.opacity = 1;
      clearInterval(this.timer);
      // update timer to show the pause icon
      // this.createTimer(videoControlsWrapper);
    } else {
      video.play();
      video.classList.remove('paused');
      video.classList.add('playing');

      // Update DOM
      this.playBtn.style.visibility = `hidden`;
      this.pauseBtn.style.visibility = `inherit`;
      this.isPlaying = true;

      this.timer = setInterval((_) => {
        this.fadePause();
      }, 1500);
    }
  }

  videoClick(e, fromKey = false) {
    let videoContainer = null;
    let videoControlsWrapper = null;

    if (fromKey) {
      // KEY
      videoContainer = e.closest('.home__gallery__video__container');

      // Find .video__controls__wrapper
      if (e.classList.contains('video__controls__wrapper')) {
        videoControlsWrapper = e;
      } else {
        videoControlsWrapper = e.closest('.video__controls__wrapper');
      }
    } else {
      // CLICK
      videoContainer = e.target.closest('.home__gallery__video__container');

      // Find .video__controls__wrapper
      if (e.target.classList.contains('video__controls__wrapper')) {
        videoControlsWrapper = e.target;
      } else {
        videoControlsWrapper = e.target.closest('.video__controls__wrapper');
      }
    }

    if (videoContainer === null) return;

    if (this.timer) {
      clearInterval(this.timer);
    }
    videoControlsWrapper.style.cursor = 'pointer';
    // Play Video
    each(videoContainer.children, (child) => {
      if (
        child.classList.contains('home__gallery__item__video') &&
        child.nodeName === 'VIDEO'
      ) {
        // Toggle Fullscreen
        if (
          !fromKey &&
          e.target.classList.contains('video__controls--fullscreen')
        ) {
          if (child.requestFullscreen) {
            child.requestFullscreen();
          } else if (child.mozRequestFullScreen) {
            child.mozRequestFullScreen();
          } else if (child.webkitRequestFullscreen) {
            child.webkitRequestFullscreen();
          } else if (child.msRequestFullscreen) {
            child.msRequestFullscreen();
          }
          // child.requestFullscreen();
          return;
        }
        this.videoTogglePlay(child);
      }
    });
  }

  addEventListeners() {
    this.videoWrapper.addEventListener('click', (e) => this.videoClick(e));

    this.videoWrapper.addEventListener('mousemove', (e) => {
      if (
        e.target.classList.contains('video__controls__wrapper') &&
        this.isPlaying
      ) {
        this.videoWrapper.style.cursor = 'pointer';
        this.pauseBtn.style.opacity = 1;

        if (!this.isTimer) {
          this.isTimer = true;
          this.fadePause();
        }
      }
    });

    this.videoWrapper.addEventListener('mouseenter', (e) => {
      if (e.target.classList.contains('video__controls__wrapper')) {
        this.videoWrapper.style.cursor = 'pointer';
      }
    });

    this.videoWrapper.addEventListener('mouseleave', (e) => {
      if (e.target.classList.contains('video__controls__wrapper')) {
        this.videoWrapper.style.cursor = 'pointer';
      }
    });
  }

  update() {
    this.frame = window.requestAnimationFrame(this.update.bind(this));

    if (!this.isBlinking && this.isPlaying) {
      const progress =
        100 -
        (
          (this.videoElement.currentTime / this.videoElement.duration) *
          100
        ).toFixed(2);

      if (progress > 99.5) {
        this.isBlinking = true;
        this.blinkProgress();
        this.videoProgress.style.transform = `translateX(${0}%)`;
        return;
      }

      this.videoProgress.style.transform = `translateX(-${progress}%)`;
    }
  }
}
