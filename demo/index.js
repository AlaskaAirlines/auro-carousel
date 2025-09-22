import { AuroCarousel } from "../src/auro-carousel.js";

AuroCarousel.register();
AuroCarousel.register("custom-carousel");

export function initExamples(initCount) {
  //biome-ignore lint: going to refactor this file later
  initCount = initCount || 0;

  try {
  } catch {
    //biome-ignore lint: going to refactor this file later
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
