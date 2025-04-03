
import { AuroCarousel } from '../../src/auro-carousel.js';

/**
 * The auro-carousel component displays a group of elements in a scrollable container.
 */
class AuroCarouselWCA extends AuroCarousel {}

if (!customElements.get("auro-carousel")) {
  customElements.define("auro-carousel", AuroCarouselWCA);
}
