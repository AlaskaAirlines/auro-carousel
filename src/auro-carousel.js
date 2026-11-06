// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines, lit/no-invalid-html, lit/binding-positions */

import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import buttonVersion from "./buttonVersion.js";

import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import iconVersion from "./iconVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Displays a group of elements, such as flight date options or images, in a horizontally scrollable container with buttons to scroll left and right.
 *
 * **Key capabilities:**
 * - **Scroll buttons**: Shows left and right buttons on screens at least 576 pixels wide when the carousel can scroll that way, or at all times when you add `displayArrows`.
 * - **Centered selection**: Scrolls the first element with the `selected` attribute to the center when you add `centerSelected`.
 * - **Custom scroll distance**: Sets how far each button press scrolls, in pixels, with `scrollDistance`.
 * - **Accessible names**: Names the carousel and its scroll buttons through the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots.
 *
 * @example
 * ```html
 * <auro-carousel>
 *   <span slot="ariaLabel">Flight date options</span>
 *   <auro-pane date="2020-10-10" price="$435"></auro-pane>
 *   <auro-pane date="2020-10-11" price="$435"></auro-pane>
 * </auro-carousel>
 * ```
 *
 * @summary A horizontally scrollable container with left and right scroll buttons and optional centering of a selected element.
 * @customElement auro-carousel
 *
 * @attr {boolean} centerselected - Centers the carousel on the first element that has the `selected` attribute when the carousel first renders.
 *
 * @slot - The elements to scroll through, such as `auro-pane` elements or images.
 * @slot ariaLabel - Text that screen readers announce as the carousel's name, for example "Flight date options". Required unless you set the deprecated `label` attribute, and takes priority over it when both are set.
 * @slot ariaLabel.scroll.left - Text that screen readers announce for the left scroll button, for example "Show earlier dates". Defaults to "Scroll Left".
 * @slot ariaLabel.scroll.right - Text that screen readers announce for the right scroll button, for example "Show later dates". Defaults to "Scroll Right".
 *
 * @csspart wrapper - The scrollable `<div>` that wraps the scroll buttons and the slotted elements.
 *
 * @cssprop --ds-auro-carousel-gradient-color-one - Color at the outer edge of the fade shown beside each scroll button.
 * @cssprop --ds-auro-carousel-gradient-color-two - Color at the inner edge of the fade shown beside each scroll button.
 *
 * @event scrollRight - Dispatched when someone selects the right scroll button.
 * @event scrollLeft - Dispatched when someone selects the left scroll button.
 */

export class AuroCarousel extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.scrollDistance = 300;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * Whether the carousel is scrolled to the start.
     * @private
     */
    this.scrolledToStart = false;

    /**
     * Whether the carousel is scrolled to the end.
     * @private
     */
    this.scrolledToEnd = false;
  }

  static get properties() {
    return {
      /**
       * Shows the left and right scroll buttons at all times, instead of hiding each one when the carousel can't scroll further in that direction. The buttons stay hidden on small screens.
       */
      displayArrows: { type: Boolean, attribute: "displayarrows" },

      /**
       * Deprecated: Use the `ariaLabel` slot instead.
       * Sets the text that screen readers announce as the carousel's name.
       * @deprecated Use the `ariaLabel` slot instead.
       */
      label: { type: String },

      /**
       * Sets how many pixels the carousel scrolls when someone selects the left or right button.
       * @default 300
       */
      scrollDistance: {
        type: Number,
        reflect: true,
        attribute: "scrolldistance"
      }
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-carousel"] - The tag name to register the element under.
   *
   * @example
   * AuroCarousel.register("custom-carousel") // Registers the element as <custom-carousel>
   * @returns {void}
   */
  static register(name = "auro-carousel") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroCarousel);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-carousel");

    this.carousel = this.renderRoot.querySelector(".carousel");

    if (!this.label && !this.runtimeUtils.getSlotText(this, "ariaLabel")) {
      // eslint-disable-next-line no-console
      console.warn(
        "A label or an ariaLabel slot should be provided to auro-carousel for the carousel to be accessible",
      );
    }

    this.setScrollFlags(false);
    this.setUpIntersectionObserver();
    this.setUpResizeObserver();

    if (this.hasAttribute("centerSelected")) {
      /**
       * This function is called here so that the tests will pass.
       * It's called again on DOMContentLoaded so that it will work when carousel
       * content doesn't load until after the carousel component.
       * Example is loading auro-pane after auro-carousel.
       */
      this.actionOnChildrenReady();

      document.addEventListener("DOMContentLoaded", () => {
        this.actionOnChildrenReady();
      });
    }
  }

  /**
   * Waits for the slotted elements to finish updating, then scrolls to the selected one.
   * @private
   * @return {void}
   */
  actionOnChildrenReady() {
    const promises = [];

    [...this.children].forEach((child) => {
      // Here is the check the 'updateComplete' property of its child. Only works on lit-element.
      // This only works if this component is imported AFTER its child component.
      // Otherwise child.updateComplete would be undefined.
      promises.push(child.updateComplete);
    });

    Promise.all(promises).then(() => {
      // nything to do here on resolve
      this.scrollToSelected();
    });
  }

  /**
   * Scrolls the first element that has the `selected` attribute to the center of the carousel.
   * @return {void}
   */
  scrollToSelected() {
    const selectedChildren = [...this.children].find((child) =>
      child.hasAttribute("selected"),
    );

    if (selectedChildren) {
      this.centerElement(selectedChildren);
    }
  }

  /**
   * Checks whether the screen is narrower than the `sm` breakpoint.
   * @private
   * @returns {boolean} True if the screen is small; false otherwise.
   */
  isSmallScreen() {
    const breakpointDetector = this.renderRoot.querySelector(
      ".breakpointDetector",
    );
    // CSS sets content of pseudoelement based on media query
    // This prevents duplicating the breakpoints in CSS and JS
    const currentBreakpoint = window
      .getComputedStyle(breakpointDetector, ":before")
      .getPropertyValue("content")
      .replace(/"/gu, "");

    return currentBreakpoint !== "sm";
  }

  /**
   * Scrolls the carousel by the given amount.
   * @param {number} num - The number of pixels to scroll the carousel by. Positive scrolls to the
   * right, negative scrolls to the left.
   * @return {void}
   */
  scrollCarousel(num) {
    this.carousel.scrollLeft += num;
  }

  /**
   * Centers the given element inside the carousel.
   * @param {Element} el - The element to center inside the carousel. Must be a descendant of the carousel.
   * @throws {Error} If the element isn't a descendant of the carousel.
   * @return {void}
   */
  centerElement(el) {
    if (!this.contains(el)) {
      throw new Error("Element is not a descendant of this carousel");
    }

    const middleX =
      el.getBoundingClientRect().x - this.getBoundingClientRect().left;
    const carouselMiddle = this.offsetWidth / 2; // eslint-disable-line no-magic-numbers
    const elCenter = el.offsetWidth / 2; // eslint-disable-line no-magic-numbers
    const scrollTotal = middleX - carouselMiddle + elCenter;

    this.scrollCarousel(scrollTotal);
  }

  /**
   * Sets whether the carousel is scrolled to the start or to the end.
   * @private
   * @param {boolean} autofocus - If true, focuses the first element when the carousel is scrolled to the
   * start, or the last element when it's scrolled to the end. If false, doesn't change focus.
   * @return {void}
   */
  setScrollFlags(autofocus) {
    const { scrollLeft, scrollWidth, clientWidth } = this.carousel;

    this.scrolledToStart = scrollLeft <= 0;
    this.scrolledToEnd = scrollLeft >= scrollWidth - clientWidth;

    // scrolling to the start or end makes the left/right buttons disappear
    // when this happens, focus the first or last slotted element, respectively
    if (autofocus && (this.scrolledToStart || this.scrolledToEnd)) {
      if (this.scrolledToStart) {
        this.firstElementChild.focus();
      } else {
        this.lastElementChild.focus();
      }
    }

    this.requestUpdate();
  }

  /**
   * Sets up the intersection observer. Elements scrolled out of view are removed from the tab order
   * and hidden from screen readers, and elements scrolled into view are restored. On small screens,
   * the observer isn't set up.
   * @private
   * @return {void}
   */
  setUpIntersectionObserver() {
    const options = {
      root: this.carousel,
      threshold: 0.8,
    };

    // We only manage tabIndex/aria-hidden in browsers that support IntersectionObserver (excludes IE)
    // and medium or larger screen sizes. The left/right buttons do not show on small screens so there
    // is not a way for screen reader users to scroll the carousel.
    if ("IntersectionObserver" in window && !this.isSmallScreen()) {
      const callback = (entries) => {
        // when the slotted element becomes visible, we want it to be tabbable and visible to assistive tech
        // otherwise, we remove it from the tab order and set aria-hidden
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("tabindex");
            entry.target.removeAttribute("aria-hidden");
          } else {
            entry.target.setAttribute("tabindex", "-1");
            entry.target.setAttribute("aria-hidden", true);
          }
        });
      };

      this.intersectionObserver = new IntersectionObserver(callback, options);
      this.observeChildren();
    }
  }

  /**
   * Sets up the resize observer. When a slotted element is resized, updates the scroll flags
   * so the buttons show or hide as needed.
   * @private
   * @return {void}
   */
  setUpResizeObserver() {
    if ("ResizeObserver" in window) {
      // Update scrollflags when a child's size changes (e.g., a custom element becomes
      // defined or an image is loaded)
      this.resizeObserver = new ResizeObserver(() => this.setScrollFlags());
      Array.from(this.children).forEach((element) => {
        this.resizeObserver.observe(element);
      });
    }
  }

  /**
   * Starts observing each slotted element with the intersection observer.
   * @private
   * @return {void}
   */
  observeChildren() {
    Array.from(this.children).forEach((element) => {
      this.intersectionObserver.observe(element);
    });
  }

  /**
   * Called when the slotted content changes. Updates the scroll flags and restarts observing the
   * slotted elements.
   * @private
   * @return {void}
   */
  handleSlotChange() {
    this.setScrollFlags(false);
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.observeChildren();
    }
  }

  /**
   * Scrolls the carousel by `scrollDistance` and dispatches a `scrollRight` or `scrollLeft` event.
   * @private
   * @param {boolean} scrollRight - If true, scrolls the carousel right. If false, scrolls it left.
   * @return {void}
   */
  handleClick(scrollRight) {
    let click = null;

    if (scrollRight) {
      this.scrollCarousel(this.scrollDistance);
      click = new CustomEvent("scrollRight", {
        bubbles: true,
        composed: true,
      });
    } else {
      this.scrollCarousel(-1 * this.scrollDistance); // eslint-disable-line no-magic-numbers
      click = new CustomEvent("scrollLeft", {
        bubbles: true,
        composed: true,
      });
    }
    this.dispatchEvent(click);
  }

  render() {
    const carouselClassMap = {
      wrapper: true,
      carousel: true,
      "carousel--scrolledToStart": this.scrolledToStart && !this.displayArrows,
      "carousel--scrolledToEnd": this.scrolledToEnd && !this.displayArrows,
    };

    return html`
      <!-- Hidden slots for aria labels -->
      <slot name="ariaLabel" hidden @slotchange="${this.requestUpdate}"></slot>
      <slot name="ariaLabel.scroll.left" hidden @slotchange="${this.requestUpdate}"></slot>
      <slot name="ariaLabel.scroll.right" hidden @slotchange="${this.requestUpdate}"></slot>

      <div class="breakpointDetector"></div>
      <div role="group"
        aria-label="${ifDefined(this.runtimeUtils.getSlotText(this, 'ariaLabel') || this.label)}"
        aria-roledescription="carousel"
        class="${classMap(carouselClassMap)}"
        part="wrapper"
        @scroll=${() => this.setScrollFlags(true)} >
        
        <!-- Left button -->
        <${this.buttonTag} 
          aria-label="${ifDefined(this.runtimeUtils.getSlotText(this, 'ariaLabel.scroll.left') || 'Scroll Left')}"
          shape="circle"
          variant="secondary" 
          @click=${() => this.handleClick(false)} 
          class="button button--left">
          <${this.iconTag} customColor category="interface" name="chevron-left"></${this.iconTag}>
        </${this.buttonTag}>
        
        <div class="container">
          <div class="gradient--left"></div>
          <slot @slotchange=${this.handleSlotChange}></slot>
          <div class="gradient--right"></div>
        </div>
        
        <!-- Right button -->
        <${this.buttonTag} 
          aria-label="${ifDefined(this.runtimeUtils.getSlotText(this, 'ariaLabel.scroll.right') || 'Scroll Right')}"
          shape="circle"
          variant="secondary" 
          @click=${() => this.handleClick(true)} 
          class="button button--right">
          <${this.iconTag} customColor category="interface" name="chevron-right"></${this.iconTag}>
        </${this.buttonTag}>
      </div>
    `;
  }
}
