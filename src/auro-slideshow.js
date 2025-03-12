import { LitElement, html } from 'lit';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slideshowCss from './slideshow-css.js';

export class AuroSlideshow extends LitElement {
  static get styles() {
    return [slideshowCss];
  }

  firstUpdated() {
    const swiperElement = this.shadowRoot.querySelector('.swiper');
    const nextButton = this.shadowRoot.querySelector('.swiper-button-next');
    const prevButton = this.shadowRoot.querySelector('.swiper-button-prev');
    const paginationEl = this.shadowRoot.querySelector('.swiper-pagination');
  
    if (swiperElement) {
      const swiper = new Swiper(swiperElement, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: paginationEl,
          clickable: true,
        },
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        }
      });
  
      // Add custom event listeners if necessary
      nextButton.addEventListener('click', () => {
        swiper.slideNext();
      });
  
      prevButton.addEventListener('click', () => {
        swiper.slidePrev();
      });
    } else {
      console.error("Swiper container not found!");
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
      </div>
    `;
  }
}

customElements.define('auro-slideshow', AuroSlideshow);
