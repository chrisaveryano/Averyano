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
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);


 // import { split } from 'utils/text';

class Hero extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    heroBanner,
    heroImages
  }) {
    super({
      element: '.home__hero',
      elements: {
        heroBanner: heroBanner,
        heroImages: heroImages
      }
    });
    this.heroGrid = document.querySelector('.hero__grid');
    this.heroGridWrapper = document.querySelector('.hero__grid__wrapper');
  }

  create() {// We can add listeners here
  }

  showHero(isMobile) {
    return new Promise(resolve => {
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.selectorChildren.heroImages, (image, i) => {
        this.animationIn.fromTo(image, {
          scale: 0,
          autoAlpha: 0
        }, {
          scale: 1,
          autoAlpha: 1,
          duration: 2.2,
          delay: i * 0.15,
          ease: 'expo.out'
        }, 1);
      });

      if (!isMobile) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.selectorChildren.heroBanner, {
          x: '-100%',
          autoAlpha: 0
        }, {
          x: '0%',
          autoAlpha: 1,
          duration: 1
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.selectorChildren.heroBanner, {
          y: '100%',
          autoAlpha: 0
        }, {
          y: '0%',
          autoAlpha: 1,
          duration: 1
        });
      }

      this.animationIn.call(_ => {
        resolve();
      });
    });
  }

  onResize(e) {
    this.galleryBounds = this.heroGridWrapper.getBoundingClientRect(); // console.log(e);
    // console.log(e);
    // this.sizes = e.sizes;

    this.gallerySizes = {
      height: this.galleryBounds.height / window.innerHeight,
      width: this.galleryBounds.width / window.innerWidth
    }; // console.log(this.heroGridWrapper.getBoundingClientRect());
    // console.log(this.galleryBounds);
    // console.log(this.gallerySizes);
  }

  addEventListeners() {}

  removeEventListeners() {}

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d0cc6eddbbee26e1d5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MjVkZWY0ZmNkNTMyNTNjOTRkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBOztBQUVlLE1BQU1HLElBQU4sU0FBbUJGLDBEQUFuQixDQUE2QjtFQUMxQ0csV0FBVyxDQUFDO0lBQUVDLFVBQUY7SUFBY0M7RUFBZCxDQUFELEVBQTZCO0lBQ3RDLE1BQU07TUFDSkMsT0FBTyxFQUFFLGFBREw7TUFFSkMsUUFBUSxFQUFFO1FBQ1JILFVBQVUsRUFBRUEsVUFESjtRQUVSQyxVQUFVLEVBQUVBO01BRko7SUFGTixDQUFOO0lBUUEsS0FBS0csUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWhCO0lBQ0EsS0FBS0MsZUFBTCxHQUF1QkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUF2QjtFQUNEOztFQUNERSxNQUFNLEdBQUcsQ0FDUDtFQUNEOztFQUVEQyxRQUFRLENBQUNDLFFBQUQsRUFBVztJQUNqQixPQUFPLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhO01BQzlCLEtBQUtDLFdBQUwsR0FBbUJsQixxREFBQSxFQUFuQjtNQUVBRSxrREFBSSxDQUFDLEtBQUtrQixnQkFBTCxDQUFzQmQsVUFBdkIsRUFBbUMsQ0FBQ2UsS0FBRCxFQUFRQyxDQUFSLEtBQWM7UUFDbkQsS0FBS0osV0FBTCxDQUFpQkssTUFBakIsQ0FDRUYsS0FERixFQUVFO1VBQUVHLEtBQUssRUFBRSxDQUFUO1VBQVlDLFNBQVMsRUFBRTtRQUF2QixDQUZGLEVBR0U7VUFDRUQsS0FBSyxFQUFFLENBRFQ7VUFFRUMsU0FBUyxFQUFFLENBRmI7VUFHRUMsUUFBUSxFQUFFLEdBSFo7VUFJRUMsS0FBSyxFQUFFTCxDQUFDLEdBQUcsSUFKYjtVQUtFTSxJQUFJLEVBQUU7UUFMUixDQUhGLEVBVUUsQ0FWRjtNQVlELENBYkcsQ0FBSjs7TUFlQSxJQUFJLENBQUNiLFFBQUwsRUFBZTtRQUNiZixtREFBQSxDQUNFLEtBQUtvQixnQkFBTCxDQUFzQmYsVUFEeEIsRUFFRTtVQUFFd0IsQ0FBQyxFQUFFLE9BQUw7VUFBY0osU0FBUyxFQUFFO1FBQXpCLENBRkYsRUFHRTtVQUFFSSxDQUFDLEVBQUUsSUFBTDtVQUFXSixTQUFTLEVBQUUsQ0FBdEI7VUFBeUJDLFFBQVEsRUFBRTtRQUFuQyxDQUhGO01BS0QsQ0FORCxNQU1PO1FBQ0wxQixtREFBQSxDQUNFLEtBQUtvQixnQkFBTCxDQUFzQmYsVUFEeEIsRUFFRTtVQUFFeUIsQ0FBQyxFQUFFLE1BQUw7VUFBYUwsU0FBUyxFQUFFO1FBQXhCLENBRkYsRUFHRTtVQUFFSyxDQUFDLEVBQUUsSUFBTDtVQUFXTCxTQUFTLEVBQUUsQ0FBdEI7VUFBeUJDLFFBQVEsRUFBRTtRQUFuQyxDQUhGO01BS0Q7O01BRUQsS0FBS1IsV0FBTCxDQUFpQmEsSUFBakIsQ0FBdUJDLENBQUQsSUFBTztRQUMzQmYsT0FBTztNQUNSLENBRkQ7SUFHRCxDQW5DTSxDQUFQO0VBb0NEOztFQUVEZ0IsUUFBUSxDQUFDQyxDQUFELEVBQUk7SUFDVixLQUFLQyxhQUFMLEdBQXFCLEtBQUt2QixlQUFMLENBQXFCd0IscUJBQXJCLEVBQXJCLENBRFUsQ0FFVjtJQUNBO0lBQ0E7O0lBRUEsS0FBS0MsWUFBTCxHQUFvQjtNQUNsQkMsTUFBTSxFQUFFLEtBQUtILGFBQUwsQ0FBbUJHLE1BQW5CLEdBQTRCQyxNQUFNLENBQUNDLFdBRHpCO01BRWxCQyxLQUFLLEVBQUUsS0FBS04sYUFBTCxDQUFtQk0sS0FBbkIsR0FBMkJGLE1BQU0sQ0FBQ0c7SUFGdkIsQ0FBcEIsQ0FOVSxDQVVWO0lBQ0E7SUFDQTtFQUNEOztFQUNEQyxpQkFBaUIsR0FBRyxDQUFFOztFQUV0QkMsb0JBQW9CLEdBQUcsQ0FBRTs7QUF4RWlCOzs7Ozs7OztVQ1A1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2F2ZXJ5YW5vLmNvbS8uL2FwcC9wYWdlcy9Ib21lL3NlY3Rpb25zL0hlcm8uanMiLCJ3ZWJwYWNrOi8vYXZlcnlhbm8uY29tL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xyXG5cclxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xyXG4vLyBpbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoeyBoZXJvQmFubmVyLCBoZXJvSW1hZ2VzIH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgZWxlbWVudDogJy5ob21lX19oZXJvJyxcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICBoZXJvQmFubmVyOiBoZXJvQmFubmVyLFxyXG4gICAgICAgIGhlcm9JbWFnZXM6IGhlcm9JbWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmhlcm9HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2dyaWQnKTtcclxuICAgIHRoaXMuaGVyb0dyaWRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2dyaWRfX3dyYXBwZXInKTtcclxuICB9XHJcbiAgY3JlYXRlKCkge1xyXG4gICAgLy8gV2UgY2FuIGFkZCBsaXN0ZW5lcnMgaGVyZVxyXG4gIH1cclxuXHJcbiAgc2hvd0hlcm8oaXNNb2JpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xyXG5cclxuICAgICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4uaGVyb0ltYWdlcywgKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXHJcbiAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgIHsgc2NhbGU6IDAsIGF1dG9BbHBoYTogMCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMi4yLFxyXG4gICAgICAgICAgICBkZWxheTogaSAqIDAuMTUsXHJcbiAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICAgIEdTQVAuZnJvbVRvKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuLmhlcm9CYW5uZXIsXHJcbiAgICAgICAgICB7IHg6ICctMTAwJScsIGF1dG9BbHBoYTogMCB9LFxyXG4gICAgICAgICAgeyB4OiAnMCUnLCBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEdTQVAuZnJvbVRvKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuLmhlcm9CYW5uZXIsXHJcbiAgICAgICAgICB7IHk6ICcxMDAlJywgYXV0b0FscGhhOiAwIH0sXHJcbiAgICAgICAgICB7IHk6ICcwJScsIGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoXykgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplKGUpIHtcclxuICAgIHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuaGVyb0dyaWRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIC8vIHRoaXMuc2l6ZXMgPSBlLnNpemVzO1xyXG5cclxuICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xyXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIHdpZHRoOiB0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlcm9HcmlkV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdhbGxlcnlCb3VuZHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5nYWxsZXJ5U2l6ZXMpO1xyXG4gIH1cclxuICBhZGRFdmVudExpc3RlbmVycygpIHt9XHJcblxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge31cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZDBjYzZlZGRiYmVlMjZlMWQ1Y1wiKSJdLCJuYW1lcyI6WyJHU0FQIiwiQ29tcG9uZW50IiwiZWFjaCIsIkhlcm8iLCJjb25zdHJ1Y3RvciIsImhlcm9CYW5uZXIiLCJoZXJvSW1hZ2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaGVyb0dyaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZXJvR3JpZFdyYXBwZXIiLCJjcmVhdGUiLCJzaG93SGVybyIsImlzTW9iaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsInRpbWVsaW5lIiwic2VsZWN0b3JDaGlsZHJlbiIsImltYWdlIiwiaSIsImZyb21UbyIsInNjYWxlIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJkZWxheSIsImVhc2UiLCJ4IiwieSIsImNhbGwiLCJfIiwib25SZXNpemUiLCJlIiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=