import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../index.js';

describe('auro-carousel', () => {
  it('auro-carousel is accessible', async () => {
    const el = await getDefaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-carousel custom element is defined', async () => {
    const el = await !!customElements.get("auro-carousel");

    await expect(el).to.be.true;
  });

  it('uses scroll distance attribute when set', async () => {
    const el = await getDefaultFixture(200);
    rightButton(el).click();
    expect(el.carousel.scrollLeft).to.equal(200);
  });

  it('sets label on the carousel', async () => {
    const el = await getDefaultFixture();
    expect(el.carousel.getAttribute('aria-label')).to.equal('buttons');
  });

  it('sticks the navigation arrows properly', async () => {
    const el = await getDefaultFixture();
    el.carousel.setAttribute('displayArrows', true);
    expect(el.carousel.querySelector('.carousel--scrolledToStart')).to.equal(null);
    expect(el.carousel.querySelector('.carousel--scrolledToEnd')).to.equal(null);
  })

  it('scrolls the container right when right button clicked', async () => {
    const el = await getDefaultFixture();
    rightButton(el).click();
    expect(el.carousel.scrollLeft).to.equal(300);
  });

  it('scrolls the container left when left button clicked', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    const startScrollPosition = el.carousel.scrollLeft;
    leftButton(el).click();
    expect(el.carousel.scrollLeft).to.equal(startScrollPosition - 300);
  });

  it('hides left button and focuses first element when scrolled to start', async () => {
    const el = await getDefaultFixture();
    // scroll position begins at 0, so scroll right and then back to trigger update
    rightButton(el).click();
    leftButton(el).click();
    await waitFor(() => expect(isHidden(leftButton(el))).to.be.true);
    await waitFor(() => expect(document.activeElement).to.equal(el.children[0]));
  });

  it('hides right button and focuses last element when scrolled to start', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    await waitFor(() => expect(isHidden(rightButton(el))).to.be.true)
    await waitFor(() => expect(document.activeElement).to.equal(el.children[el.children.length - 1]));
  });

  it('shows both buttons when in the middle', async () => {
    const el = await getDefaultFixture();
    rightButton(el).click();
    await waitFor(() => expect(isHidden(leftButton(el))).to.be.false);
    expect(isHidden(rightButton(el))).to.be.false;
  });

  it('sets tabindex and aria-hidden when child scrolled out of view', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    await expectA11yPropertiesToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  });

  it('re-observes on slot change', async () => {
    const el = await getDefaultFixture();
    el.innerHTML = `
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
      <button>Button 5</button>
      <button>Button 6</button>
      <button>Button 7</button>
      <button>Button 8</button>
      <button>Button 9</button>
      <button>Button 10</button>
    `;

    scrollToEnd(el);
    await expectA11yPropertiesToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  })

  it('does not manage focus on small screen', async () => {
    const el = await getDefaultFixture();
    // since we can't simulate a small browser window, we need to stub out
    // the internal method and re-initialize the observer
    el.isSmallScreen = () => true;
    el.intersectionObserver.disconnect();
    el.setUpIntersectionObserver();

    scrollToEnd(el);
    await expectA11yPropertiesNotToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  })

  describe('centerElement', () => {
    it('centers child element', async () => {
      const el = await getDefaultFixture();
      const elementToCenter = el.querySelectorAll('button')[5];
      el.centerElement(elementToCenter);
      expect(el.carousel.scrollLeft).to.equal(341);
    })

    it('throws an error when element is not a descendant', async () => {
      const el = await getDefaultFixture();
      const div = document.createElement('div');
      expect(() => el.centerElement(div)).to.throw();
    })
  })

  describe('centerSelected feature', () => {
    it('centers selected element on render with centerSelected property', async () => {
      const el = await getCenterSelectedFixture();
      const targetElement = [...el.children].find((child) => child.hasAttribute('selected'));
      await waitUntil(() => isInViewport(targetElement), 'Element should become visible', { interval: 10, timeout: 2000 });
      expect(isInViewport(targetElement)).to.be.true;
    })
  })

  async function getCenterSelectedFixture() {
    return fixture(html`
      <auro-carousel label="buttons" centerSelected>
        <button style="width: 200px">Button 1</button>
        <button style="width: 200px">Button 2</button>
        <button style="width: 200px">Button 3</button>
        <button style="width: 200px">Button 4</button>
        <button style="width: 200px">Button 5</button>
        <button style="width: 200px" selected>Button 6</button>
        <button style="width: 200px">Button 7</button>
        <button style="width: 200px">Button 8</button>
        <button style="width: 200px">Button 9</button>
        <button style="width: 200px">Button 10</button>
      </auro-carousel>
    `)
  }

  async function getDefaultFixture(scrollDistance, noLabel = false) {
    // set width on component to force it to overflow
    const el = await fixture(html`
      <auro-carousel label=${noLabel ? '' : 'buttons'} scrollDistance=${ifDefined(scrollDistance)} style="width: 200px;">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
        <button>Button 9</button>
        <button>Button 10</button>
      </auro-carousel>
    `);
    // disable smooth scrolling so we don't have to wait for scrolling to finish
    el.carousel.style = "scroll-behavior: auto;"
    return el;
  }

  async function expectA11yPropertiesToBeSet(el) {
    // We set tryImmediately to false here to prevent false positives
    // The element needs a chance to change state
    await waitFor(() => expect(el.tabIndex).to.equal(-1), false);
    expect(el.getAttribute('aria-hidden')).to.equal('true');
  }

  async function expectA11yPropertiesNotToBeSet(el) {
    await waitFor(() => expect(el.tabIndex).to.equal(0), false);
    expect(el.hasAttribute('aria-hidden')).to.be.false;
  }

  function scrollToEnd(el) {
    el.carousel.scrollLeft = el.carousel.scrollWidth - el.carousel.clientWidth;
  }

  function rightButton(el) {
    return el.shadowRoot.querySelector('.button--right');
  }

  function leftButton(el) {
    return el.shadowRoot.querySelector('.button--left');
  }

  /**
   * Helper function that retries an assertion until it passes.
   * It will throw the assertion exception after 500ms if it has not passed
   * @param {boolean} tryImmediately - whether or not to attempt the assertion immediately.
   */
  function waitFor(assertion, tryImmediately = true) {
    return new Promise(resolve => {
      const startTime = Date.now();
      const tryAssertion = () => {
        try {
          assertion();
          clearInterval(intervalId);
          resolve();
        } catch (err) {
          if (Date.now() - startTime > 500) {
            throw err;
          }
        }
      }
      const intervalId = setInterval(tryAssertion, 50)
      if (tryImmediately) {
        tryAssertion();
      }
    })
  }

  function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none');
  }

  function isInViewport(targetElement) {
    const rect = targetElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
});
