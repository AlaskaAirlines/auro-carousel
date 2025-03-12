import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right.mjs';
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left.mjs';

import slideshowCss from './slideshow-css.js';

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = undefined;
    this.loop = false;
    this.slidesPerView = 1;
    this.spaceBetweenSlides = 30;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);
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
    const slot = this.shadowRoot.querySelector('slot');
  
    // Listen for the slotchange event to handle updates to slot content
    this.slotChangeListener = () => {
      this.initializeSwiper();
    };
    
    slot.addEventListener('slotchange', this.slotChangeListener);
  }
  
  initializeSwiper() {
    const swiperElement = this.shadowRoot.querySelector('.swiper');
    const swiperWrapper = this.shadowRoot.querySelector('.swiper-wrapper');
    const prevButton = this.shadowRoot.querySelector('.scroll-prev');
    const nextButton = this.shadowRoot.querySelector('.scroll-next');
    const paginationEl = this.shadowRoot.querySelector('.swiper-pagination');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');
    const slot = this.shadowRoot.querySelector('slot');

    if (!slot) {
      return;
    }
  
    // Get the assigned slides from the slot
    const assignedSlides = slot.assignedElements().filter(el => el.classList.contains('swiper-slide'));
    
    // Avoid reinitializing Swiper if there are no slides or if the Swiper is already initialized
    if (assignedSlides.length === 0) {
      console.warn("No slides found inside slot.");
      return; // Avoid initializing if no slides are present
    }
  
    // Detach the slotchange listener to prevent it from firing while manipulating the slot content
    slot.removeEventListener('slotchange', this.slotChangeListener);
  
    // Ensure we don't clear the swiper-wrapper content if the slides are updated dynamically
    if (!this.swiper) {
      // If no swiper instance exists, clear the swiper-wrapper and add the new slides
      swiperWrapper.innerHTML = ''; // Clear the wrapper, only if needed
      assignedSlides.forEach(slide => {
        swiperWrapper.appendChild(slide);
      });
    }
  
    const swiperConfig = {
      modules: [Navigation, Pagination],
      loop: this.loop, // Enable loop only if there are enough slides
      slidesPerView: "auto", // Ensure slidesPerView does not exceed total slides
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
  
    // Add autoplay if defined
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
  
    // If the Swiper instance exists, just update it with the new slides
    if (this.swiper) {
      this.swiper.update(); // Update Swiper to handle the new slides
    }

    this.swiper = new Swiper(swiperElement, swiperConfig);
  
    // Event listeners for navigation buttons
    nextButton.addEventListener('click', () => {
      this.swiper.slideNext();
    });
  
    prevButton.addEventListener('click', () => {
      this.swiper.slidePrev();
    });
  
    // Autoplay controls for mouse hover
    if (this.autoplay) {
      swiperElement.addEventListener('mouseenter', () => {
        this.swiper.autoplay.stop();
      });
  
      swiperElement.addEventListener('mouseleave', () => {
        this.swiper.autoplay.start();
      });
    }
  
    // Reattach the slotchange event listener after the swiper is initialized
    slot.addEventListener('slotchange', this.slotChangeListener);
  }  
  
  /**
   * Internal function to generate the HTML for the icon to use.
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @returns {Element} The HTML element containing the SVG icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html');
    const svg = dom.body.firstChild;

    svg.setAttribute('slot', 'svg');

    const iconHtml = html`<${this.iconTag} customColor customSvg slot="icon">${svg}</${this.iconTag}>`;

    return iconHtml;
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        <${this.buttonTag} arialabel="chevron-left" iconOnly rounded variant="secondary" class="scroll-prev">
          ${this.generateIconHtml(chevronLeft.svg)}<span class="util_displayHiddenVisually">Scroll Left</span>
        </${this.buttonTag}>

        <${this.buttonTag} arialabel="chevron-right" iconOnly rounded variant="secondary" class="scroll-next">
          ${this.generateIconHtml(chevronRight.svg)}<span class="util_displayHiddenVisually">Scroll Right</span>
        </${this.buttonTag}>
  
        <div class="swiper-pagination"></div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('auro-slideshow', AuroSlideshow);
