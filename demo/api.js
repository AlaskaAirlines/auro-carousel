import { centerElementExample } from '../apiExamples/centerElement';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    centerElementExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
