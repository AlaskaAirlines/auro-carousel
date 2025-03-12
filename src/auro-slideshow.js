import { LitElement, html } from 'lit';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slideshowCss from './slideshow-css.js';

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = undefined;
    this.loop = false;
    this.slidesPerView = 1;
    this.spaceBetweenSlides = 30;
  }

  static get styles() {
    return [slideshowCss];
  }

  static get properties() {
    return {
      /**
       * The time in milliseconds between each slide change. Defaults to undefined.
       */
      autoplay: {
        type: Number,
        reflect: true
      },

      /**
       * If true, the slideshow will loop back to the first slide after reaching the last slide. Defaults to false.
       */
      loop: {
        type: Boolean,
        reflect: true
      },

      /**
       * The number of slides per view. Defaults to 1.
       */
      slidesPerView: {
        type: String,
        reflect: true
      },

      /**
       * The pixel distance between slides when multiple slides are in view.
       */
      spaceBetweenSlides: {
        type: Number
      }
    }
  }

  firstUpdated() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    const swiperElement = this.shadowRoot.querySelector('.swiper');
    const nextButton = this.shadowRoot.querySelector('.swiper-button-next');
    const prevButton = this.shadowRoot.querySelector('.swiper-button-prev');
    const paginationEl = this.shadowRoot.querySelector('.swiper-pagination');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');

    const swiperConfig = {
      modules: [Navigation, Pagination],
      loop: this.loop,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetweenSlides,
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      on: {
        slideChangeTransitionStart() {
          progressBar.style.width = '0%';
        },
        slideChangeTransitionEnd() {
          progressBar.style.width = '100%';
        }
      }
    };

    if (this.autoplay) {
      swiperConfig.modules.push(Autoplay);
      swiperConfig.autoplay = {
        delay: this.autoplay,
        disableOnInteraction: false,
      };

      swiperConfig.on.autoplayTimeLeft = (...args) => {
        const progress = args[args.length - 1];
        progressBar.style.width = `${(1 - progress) * 100}%`;
      };
    }

    this.swiper = new Swiper(swiperElement, swiperConfig);

    nextButton.addEventListener('click', () => {
      this.swiper.slideNext();
    });

    prevButton.addEventListener('click', () => {
      this.swiper.slidePrev();
    });

    if (this.autoplay) {
      swiperElement.addEventListener('mouseenter', () => {
        this.swiper.autoplay.stop();
      });

      swiperElement.addEventListener('mouseleave', () => {
        this.swiper.autoplay.start();
      });
    }
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('auro-slideshow', AuroSlideshow);
