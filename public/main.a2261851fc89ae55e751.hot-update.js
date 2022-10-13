"use strict";
self["webpackHotUpdateaveryano_com"]("main",{

/***/ "./app/pages/Home/sections/Hero.js":
/*!*****************************************!*\
  !*** ./app/pages/Home/sections/Hero.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Colors */ "./app/classes/Colors.js");



class Hero {
  constructor() {
    this.wrapper = document.querySelector('.home__hero__wrapper');
    this.heroArrow = document.querySelector('.home__hero__left__hide');
    this.arrowIcon = document.querySelector('.home__hero__hide__arrow');
    this.switchBtn = document.querySelector('.hero__switch__container');
    this.wrapperWidth = this.wrapper.getBoundingClientRect().width;
    this.arrowWidth = this.heroArrow.getBoundingClientRect().width;
    this.isVisible = true;
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline(this.wrapper, {
      x: '-100%'
    }, {
      x: '0%',
      duration: 1
    }, 1);
    this.addEventListeners();
  }

  create() {}

  show() {
    // if coming from resize, change instantly
    if (this.isVisible) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.wrapper, {
        x: `${this.wrapperWidth - this.wrapperWidth}px`
      });
      return;
    } // Animation


    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.wrapper, {
      x: `${0 - this.wrapperWidth + this.arrowWidth}px`
    }, {
      x: `${0}px`,
      duration: 0.7
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.arrowIcon, {
      rotate: '180deg'
    }, {
      rotate: '0deg',
      duration: 0.3
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.switchBtn, {
      rotate: '90deg',
      x: `${0 + this.wrapperWidth - this.arrowWidth * 1.58}`
    }, {
      rotate: '0deg',
      x: `${0}px`,
      duration: 0.7
    });
    this.isVisible = true;
  }

  hide() {
    // if coming from resize, change instantly
    if (!this.isVisible) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.wrapper, {
        x: `${0 - this.wrapperWidth + this.arrowWidth}px`
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.switchBtn, {
        x: `${this.wrapperWidth - convertRemToPixels(3) - this.arrowWidth - 4}`
      });
      return;
    }

    function convertRemToPixels(rem) {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    } // Animation


    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.wrapper, {
      x: `${0}px`
    }, {
      x: `${0 - this.wrapperWidth + this.arrowWidth}px`,
      duration: 0.7
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.arrowIcon, {
      rotate: '0deg'
    }, {
      rotate: '180deg',
      duration: 0.3
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.switchBtn, {
      rotate: '0deg',
      x: `${0}px`
    }, {
      rotate: '90deg',
      x: `${this.wrapperWidth - convertRemToPixels(3) - this.arrowWidth - 4}`,
      duration: 0.3
    });
    this.isVisible = false;
  }

  showHero(isMobile) {
    this.show(); // if (!isMobile) {
    //   this.timeline.fromTo(
    //     this.selectorChildren.heroBanner,
    //     { x: '-100%', autoAlpha: 0 },
    //     { x: '0%', autoAlpha: 1, duration: 1 }
    //   );
    // } else {
    //   this.timeline.fromTo(
    //     this.selectorChildren.heroBanner,
    //     { y: '100%', autoAlpha: 0 },
    //     { y: '0%', autoAlpha: 1, duration: 1 }
    //   );
    // }
  }

  changeColor(target, state) {
    return new Promise(resolve => {
      if (state === 'on') {
        // Dark mode
        classes_Colors__WEBPACK_IMPORTED_MODULE_1__.ColorsManager.change({
          color: target.getAttribute('data-color'),
          backgroundColor: target.getAttribute('data-background'),
          transparent: '1,1,1,0.9',
          brightnessOn: '1',
          brightnessOff: '0.8',
          linkColor: '196, 113, 237'
        });
      } else {
        // Light mode
        classes_Colors__WEBPACK_IMPORTED_MODULE_1__.ColorsManager.change({
          color: '0,0,0',
          backgroundColor: '255,255,255',
          transparent: '255,255,255,0.25',
          brightnessOn: '0.95',
          brightnessOff: '1',
          linkColor: '247, 121, 125'
        });
      }

      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        onComplete: resolve
      }); // when animations are complete

      this.animationIn.call(_ => {
        // this.addEventListeners();
        resolve();
      });
    });
  }

  addEventListeners() {
    this.heroArrow.addEventListener('click', e => {
      if (this.isVisible) this.hide();else this.show();
    });
    this.switchBtn.addEventListener('click', e => {
      if (e.target.value === 'on') {
        e.target.value = 'off';
      } else {
        e.target.value = 'on';
      }

      this.changeColor(e.target, e.target.value);
    });
  }

  removeEventListeners() {}

  onResize() {
    this.wrapperWidth = this.wrapper.getBoundingClientRect().width;
    this.arrowWidth = this.heroArrow.getBoundingClientRect().width;
    if (this.isVisible) this.show();else this.hide();
  }

  update() {}

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f043da059690a3e001f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQixNQUFGLENBQVNvQixLQUFULEdBQWlCLEtBQWpCO01BQ0QsQ0FGRCxNQUVPO1FBQ0xELENBQUMsQ0FBQ25CLE1BQUYsQ0FBU29CLEtBQVQsR0FBaUIsSUFBakI7TUFDRDs7TUFDRCxLQUFLckIsV0FBTCxDQUFpQm9CLENBQUMsQ0FBQ25CLE1BQW5CLEVBQTJCbUIsQ0FBQyxDQUFDbkIsTUFBRixDQUFTb0IsS0FBcEM7SUFDRCxDQVBEO0VBUUQ7O0VBRURDLG9CQUFvQixHQUFHLENBQUU7O0VBRXpCQyxRQUFRLEdBQUc7SUFDVCxLQUFLOUMsWUFBTCxHQUFvQixLQUFLTixPQUFMLENBQWFPLHFCQUFiLEdBQXFDQyxLQUF6RDtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsS0FBS04sU0FBTCxDQUFlSSxxQkFBZixHQUF1Q0MsS0FBekQ7SUFDQSxJQUFJLEtBQUtFLFNBQVQsRUFBb0IsS0FBS00sSUFBTCxHQUFwQixLQUNLLEtBQUtJLElBQUw7RUFDTjs7RUFDRGlDLE1BQU0sR0FBRyxDQUFFOztBQXJMYTs7Ozs7Ozs7VUNMMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmVyeWFuby5jb20vLi9hcHAvcGFnZXMvSG9tZS9zZWN0aW9ucy9IZXJvLmpzIiwid2VicGFjazovL2F2ZXJ5YW5vLmNvbS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XHJcbmltcG9ydCB7IENvbG9yc01hbmFnZXIgfSBmcm9tICdjbGFzc2VzL0NvbG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19oZXJvX193cmFwcGVyJyk7XHJcbiAgICB0aGlzLmhlcm9BcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19oZXJvX19sZWZ0X19oaWRlJyk7XHJcbiAgICB0aGlzLmFycm93SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19oZXJvX19oaWRlX19hcnJvdycpO1xyXG4gICAgdGhpcy5zd2l0Y2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc3dpdGNoX19jb250YWluZXInKTtcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgdGhpcy5hcnJvd1dpZHRoID0gdGhpcy5oZXJvQXJyb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZShcclxuICAgICAgdGhpcy53cmFwcGVyLFxyXG4gICAgICB7IHg6ICctMTAwJScgfSxcclxuICAgICAgeyB4OiAnMCUnLCBkdXJhdGlvbjogMSB9LFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuICBjcmVhdGUoKSB7fVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgLy8gaWYgY29taW5nIGZyb20gcmVzaXplLCBjaGFuZ2UgaW5zdGFudGx5XHJcbiAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcclxuICAgICAgR1NBUC5zZXQodGhpcy53cmFwcGVyLCB7XHJcbiAgICAgICAgeDogYCR7dGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLndyYXBwZXJXaWR0aH1weGAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuaW1hdGlvblxyXG4gICAgR1NBUC5mcm9tVG8oXHJcbiAgICAgIHRoaXMud3JhcHBlcixcclxuICAgICAgeyB4OiBgJHswIC0gdGhpcy53cmFwcGVyV2lkdGggKyB0aGlzLmFycm93V2lkdGh9cHhgIH0sXHJcbiAgICAgIHsgeDogYCR7MH1weGAsIGR1cmF0aW9uOiAwLjcgfVxyXG4gICAgKTtcclxuICAgIEdTQVAuZnJvbVRvKFxyXG4gICAgICB0aGlzLmFycm93SWNvbixcclxuICAgICAgeyByb3RhdGU6ICcxODBkZWcnIH0sXHJcbiAgICAgIHsgcm90YXRlOiAnMGRlZycsIGR1cmF0aW9uOiAwLjMgfVxyXG4gICAgKTtcclxuXHJcbiAgICBHU0FQLmZyb21UbyhcclxuICAgICAgdGhpcy5zd2l0Y2hCdG4sXHJcbiAgICAgIHtcclxuICAgICAgICByb3RhdGU6ICc5MGRlZycsXHJcbiAgICAgICAgeDogYCR7MCArIHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5hcnJvd1dpZHRoICogMS41OH1gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm90YXRlOiAnMGRlZycsXHJcbiAgICAgICAgeDogYCR7MH1weGAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcbiAgaGlkZSgpIHtcclxuICAgIC8vIGlmIGNvbWluZyBmcm9tIHJlc2l6ZSwgY2hhbmdlIGluc3RhbnRseVxyXG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZSkge1xyXG4gICAgICBHU0FQLnNldCh0aGlzLndyYXBwZXIsIHtcclxuICAgICAgICB4OiBgJHswIC0gdGhpcy53cmFwcGVyV2lkdGggKyB0aGlzLmFycm93V2lkdGh9cHhgLFxyXG4gICAgICB9KTtcclxuICAgICAgR1NBUC5zZXQodGhpcy5zd2l0Y2hCdG4sIHtcclxuICAgICAgICB4OiBgJHt0aGlzLndyYXBwZXJXaWR0aCAtIGNvbnZlcnRSZW1Ub1BpeGVscygzKSAtIHRoaXMuYXJyb3dXaWR0aCAtIDR9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0UmVtVG9QaXhlbHMocmVtKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgcmVtICogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBBbmltYXRpb25cclxuICAgIEdTQVAuZnJvbVRvKFxyXG4gICAgICB0aGlzLndyYXBwZXIsXHJcbiAgICAgIHsgeDogYCR7MH1weGAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IGAkezAgLSB0aGlzLndyYXBwZXJXaWR0aCArIHRoaXMuYXJyb3dXaWR0aH1weGAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIEdTQVAuZnJvbVRvKFxyXG4gICAgICB0aGlzLmFycm93SWNvbixcclxuICAgICAgeyByb3RhdGU6ICcwZGVnJyB9LFxyXG4gICAgICB7IHJvdGF0ZTogJzE4MGRlZycsIGR1cmF0aW9uOiAwLjMgfVxyXG4gICAgKTtcclxuXHJcbiAgICBHU0FQLmZyb21UbyhcclxuICAgICAgdGhpcy5zd2l0Y2hCdG4sXHJcbiAgICAgIHsgcm90YXRlOiAnMGRlZycsIHg6IGAkezB9cHhgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3RhdGU6ICc5MGRlZycsXHJcbiAgICAgICAgeDogYCR7dGhpcy53cmFwcGVyV2lkdGggLSBjb252ZXJ0UmVtVG9QaXhlbHMoMykgLSB0aGlzLmFycm93V2lkdGggLSA0fWAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG4gIHNob3dIZXJvKGlzTW9iaWxlKSB7XHJcbiAgICB0aGlzLnNob3coKTtcclxuICAgIC8vIGlmICghaXNNb2JpbGUpIHtcclxuXHJcbiAgICAvLyAgIHRoaXMudGltZWxpbmUuZnJvbVRvKFxyXG4gICAgLy8gICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5oZXJvQmFubmVyLFxyXG4gICAgLy8gICAgIHsgeDogJy0xMDAlJywgYXV0b0FscGhhOiAwIH0sXHJcbiAgICAvLyAgICAgeyB4OiAnMCUnLCBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxIH1cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMudGltZWxpbmUuZnJvbVRvKFxyXG4gICAgLy8gICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbi5oZXJvQmFubmVyLFxyXG4gICAgLy8gICAgIHsgeTogJzEwMCUnLCBhdXRvQWxwaGE6IDAgfSxcclxuICAgIC8vICAgICB7IHk6ICcwJScsIGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEgfVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBjaGFuZ2VDb2xvcih0YXJnZXQsIHN0YXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgaWYgKHN0YXRlID09PSAnb24nKSB7XHJcbiAgICAgICAgLy8gRGFyayBtb2RlXHJcbiAgICAgICAgQ29sb3JzTWFuYWdlci5jaGFuZ2Uoe1xyXG4gICAgICAgICAgY29sb3I6IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgICB0cmFuc3BhcmVudDogJzEsMSwxLDAuOScsXHJcbiAgICAgICAgICBicmlnaHRuZXNzT246ICcxJyxcclxuICAgICAgICAgIGJyaWdodG5lc3NPZmY6ICcwLjgnLFxyXG4gICAgICAgICAgbGlua0NvbG9yOiAnMTk2LCAxMTMsIDIzNycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTGlnaHQgbW9kZVxyXG4gICAgICAgIENvbG9yc01hbmFnZXIuY2hhbmdlKHtcclxuICAgICAgICAgIGNvbG9yOiAnMCwwLDAnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnMjU1LDI1NSwyNTUnLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbnQ6ICcyNTUsMjU1LDI1NSwwLjI1JyxcclxuICAgICAgICAgIGJyaWdodG5lc3NPbjogJzAuOTUnLFxyXG4gICAgICAgICAgYnJpZ2h0bmVzc09mZjogJzEnLFxyXG4gICAgICAgICAgbGlua0NvbG9yOiAnMjQ3LCAxMjEsIDEyNScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudCxcclxuICAgICAgICB7IGF1dG9BbHBoYTogMCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gd2hlbiBhbmltYXRpb25zIGFyZSBjb21wbGV0ZVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcclxuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmhlcm9BcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ29uJykge1xyXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ29mZic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnb24nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hhbmdlQ29sb3IoZS50YXJnZXQsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7fVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgdGhpcy5hcnJvd1dpZHRoID0gdGhpcy5oZXJvQXJyb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBpZiAodGhpcy5pc1Zpc2libGUpIHRoaXMuc2hvdygpO1xyXG4gICAgZWxzZSB0aGlzLmhpZGUoKTtcclxuICB9XHJcbiAgdXBkYXRlKCkge31cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMDQzZGEwNTk2OTBhM2UwMDFmMVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIkNvbG9yc01hbmFnZXIiLCJIZXJvIiwiY29uc3RydWN0b3IiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVyb0Fycm93IiwiYXJyb3dJY29uIiwic3dpdGNoQnRuIiwid3JhcHBlcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJhcnJvd1dpZHRoIiwiaXNWaXNpYmxlIiwidGltZWxpbmUiLCJ4IiwiZHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImNyZWF0ZSIsInNob3ciLCJzZXQiLCJmcm9tVG8iLCJyb3RhdGUiLCJoaWRlIiwiY29udmVydFJlbVRvUGl4ZWxzIiwicmVtIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsInNob3dIZXJvIiwiaXNNb2JpbGUiLCJjaGFuZ2VDb2xvciIsInRhcmdldCIsInN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGFuZ2UiLCJjb2xvciIsImdldEF0dHJpYnV0ZSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zcGFyZW50IiwiYnJpZ2h0bmVzc09uIiwiYnJpZ2h0bmVzc09mZiIsImxpbmtDb2xvciIsImFuaW1hdGlvbkluIiwiZWxlbWVudCIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIm9uUmVzaXplIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==