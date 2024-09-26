import { AuroCarousel } from './src/auro-carousel.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-carousel', AuroCarousel);
