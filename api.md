<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-carousel

The `auro-carousel` element displays a group of elements in a scrollable container.

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default | Description                                                                                    |
| -------------- | -------------- | --------- | ------- | ------- | ---------------------------------------------------------------------------------------------- |
| centerSelected | centerSelected |           | string  |         | Automatically centers the selected node on UI render                                           |
| displayArrows  | displayArrows  |           | boolean |         | Always displays the left and right arrows, regardless of content width                         |
| label          | label          |           | string  |         | DEPRECATED - Use `ariaLabel` slot instead.                                                     |
| scrollDistance | scrollDistance |           | number  | `300`   | The number of pixels to scroll the carousel when the left or right buttons are interacted with |

### Methods

| Name             | Parameters                                                                                                                       | Return | Description                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| centerElement    | `el` (Element) - The element to center inside the carousel. Must be a descendant of the carousel.                                | void   | Centers the given element inside the carousel.                      |
| register         | `name` (string) - The name of the element that you want to register.                                                             | void   | This will register this element with the browser.                   |
| scrollCarousel   | `num` (number) - The number of pixels to scroll the carousel by. Positive scrolls to the<br>right, negative scrolls to the left. | void   | Scrolls the carousel by the given amount.                           |
| scrollToSelected | None                                                                                                                             | void   | Scroll to the first child component that have 'selected' attribute. |

### Events

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| scrollLeft  | Dispatched when the guest clicks the 'left' carousel button  |
| scrollRight | Dispatched when the guest clicks the 'right' carousel button |

### Slots

| Name                   | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| (default)              | Default slot for the elements in the carousel              |
| ariaLabel              | Text to give an accessible name to the carousel            |
| ariaLabel.scroll.left  | Text to give an accessible name to the left scroll button  |
| ariaLabel.scroll.right | Text to give an accessible name to the right scroll button |

### CSS Shadow Parts

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| wrapper | The primary root HTML element of the component. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-carousel>
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-carousel>
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

#### Center Selected

Set the `centerSelected` attribute to automatically center the selected node upon rendering the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-selected.html) -->
  <!-- The below content is automatically added from ./../apiExamples/center-selected.html -->
  <auro-carousel centerSelected>
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-selected.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-selected.html -->

```html
<auro-carousel centerSelected>
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Display Arrows

Using the `displayArrows` attribute will persistently show the left and right arrow buttons without consideration of scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/display-arrows.html) -->
  <!-- The below content is automatically added from ./../apiExamples/display-arrows.html -->
  <auro-carousel displayarrows>
    <auro-pane date="2021-10-01"></auro-pane>
    <auro-pane date="2021-10-02"></auro-pane>
    <auro-pane date="2021-10-03"></auro-pane>
    <auro-pane date="2021-10-04"></auro-pane>
    <auro-pane date="2021-10-05"></auro-pane>
    <auro-pane date="2021-10-06"></auro-pane>
    <auro-pane date="2021-10-07"></auro-pane>
    <auro-pane date="2021-10-08"></auro-pane>
    <auro-pane date="2021-10-09"></auro-pane>
    <auro-pane date="2021-10-10"></auro-pane>
    <auro-pane date="2021-10-11"></auro-pane>
    <auro-pane date="2021-10-12" selected></auro-pane>
    <auro-pane date="2021-10-13"></auro-pane>
    <auro-pane date="2021-10-14"></auro-pane>
    <auro-pane date="2021-10-15"></auro-pane>
    <auro-pane date="2021-10-16"></auro-pane>
    <auro-pane date="2021-10-17"></auro-pane>
    <auro-pane date="2021-10-18"></auro-pane>
    <auro-pane date="2021-10-19"></auro-pane>
    <auro-pane date="2021-10-20"></auro-pane>
    <auro-pane date="2021-10-21"></auro-pane>
    <auro-pane date="2021-10-22"></auro-pane>
    <auro-pane date="2021-10-23"></auro-pane>
    <auro-pane date="2021-10-24"></auro-pane>
    <auro-pane date="2021-10-25"></auro-pane>
    <auro-pane date="2021-10-26"></auro-pane>
    <auro-pane date="2021-10-27"></auro-pane>
    <auro-pane date="2021-10-28"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/display-arrows.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/display-arrows.html -->

```html
<auro-carousel displayarrows>
  <auro-pane date="2021-10-01"></auro-pane>
  <auro-pane date="2021-10-02"></auro-pane>
  <auro-pane date="2021-10-03"></auro-pane>
  <auro-pane date="2021-10-04"></auro-pane>
  <auro-pane date="2021-10-05"></auro-pane>
  <auro-pane date="2021-10-06"></auro-pane>
  <auro-pane date="2021-10-07"></auro-pane>
  <auro-pane date="2021-10-08"></auro-pane>
  <auro-pane date="2021-10-09"></auro-pane>
  <auro-pane date="2021-10-10"></auro-pane>
  <auro-pane date="2021-10-11"></auro-pane>
  <auro-pane date="2021-10-12" selected></auro-pane>
  <auro-pane date="2021-10-13"></auro-pane>
  <auro-pane date="2021-10-14"></auro-pane>
  <auro-pane date="2021-10-15"></auro-pane>
  <auro-pane date="2021-10-16"></auro-pane>
  <auro-pane date="2021-10-17"></auro-pane>
  <auro-pane date="2021-10-18"></auro-pane>
  <auro-pane date="2021-10-19"></auro-pane>
  <auro-pane date="2021-10-20"></auro-pane>
  <auro-pane date="2021-10-21"></auro-pane>
  <auro-pane date="2021-10-22"></auro-pane>
  <auro-pane date="2021-10-23"></auro-pane>
  <auro-pane date="2021-10-24"></auro-pane>
  <auro-pane date="2021-10-25"></auro-pane>
  <auro-pane date="2021-10-26"></auro-pane>
  <auro-pane date="2021-10-27"></auro-pane>
  <auro-pane date="2021-10-28"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Scroll Distance

Use the `scrollDistance` attribute to specify how many pixels to scroll the carousel when the shoulder buttons are interacted with.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scroll-distance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/scroll-distance.html -->
  <auro-carousel scrollDistance="200">
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scroll-distance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/scroll-distance.html -->

```html
<auro-carousel scrollDistance="200">
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Method Examples

#### Center Element

The following example illustrates the use of the `centerElement` method. This feature will center the selected pane element when clicked if there are enough surrounding nodes. This example **DOES NOT** center on load, as shown by the `centerSelected` attribute.

This method requires the user to invoke this feature based on a click event. See both a vanilla JS and React example below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-element.html) -->
  <!-- The below content is automatically added from ./../apiExamples/center-element.html -->
  <auro-carousel label="Flight options" id="centerElement">
    <auro-pane date="2021-10-01"></auro-pane>
    <auro-pane date="2021-10-02"></auro-pane>
    <auro-pane date="2021-10-03"></auro-pane>
    <auro-pane date="2021-10-04"></auro-pane>
    <auro-pane date="2021-10-05"></auro-pane>
    <auro-pane date="2021-10-06"></auro-pane>
    <auro-pane date="2021-10-07"></auro-pane>
    <auro-pane date="2021-10-08"></auro-pane>
    <auro-pane date="2021-10-09"></auro-pane>
    <auro-pane date="2021-10-10"></auro-pane>
    <auro-pane date="2021-10-11"></auro-pane>
    <auro-pane date="2021-10-12" selected></auro-pane>
    <auro-pane date="2021-10-13"></auro-pane>
    <auro-pane date="2021-10-14"></auro-pane>
    <auro-pane date="2021-10-15"></auro-pane>
    <auro-pane date="2021-10-16"></auro-pane>
    <auro-pane date="2021-10-17"></auro-pane>
    <auro-pane date="2021-10-18"></auro-pane>
    <auro-pane date="2021-10-19"></auro-pane>
    <auro-pane date="2021-10-20"></auro-pane>
    <auro-pane date="2021-10-21"></auro-pane>
    <auro-pane date="2021-10-22"></auro-pane>
    <auro-pane date="2021-10-23"></auro-pane>
    <auro-pane date="2021-10-24"></auro-pane>
    <auro-pane date="2021-10-25"></auro-pane>
    <auro-pane date="2021-10-26"></auro-pane>
    <auro-pane date="2021-10-27"></auro-pane>
    <auro-pane date="2021-10-28"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-element.html -->

```html
<auro-carousel label="Flight options" id="centerElement">
  <auro-pane date="2021-10-01"></auro-pane>
  <auro-pane date="2021-10-02"></auro-pane>
  <auro-pane date="2021-10-03"></auro-pane>
  <auro-pane date="2021-10-04"></auro-pane>
  <auro-pane date="2021-10-05"></auro-pane>
  <auro-pane date="2021-10-06"></auro-pane>
  <auro-pane date="2021-10-07"></auro-pane>
  <auro-pane date="2021-10-08"></auro-pane>
  <auro-pane date="2021-10-09"></auro-pane>
  <auro-pane date="2021-10-10"></auro-pane>
  <auro-pane date="2021-10-11"></auro-pane>
  <auro-pane date="2021-10-12" selected></auro-pane>
  <auro-pane date="2021-10-13"></auro-pane>
  <auro-pane date="2021-10-14"></auro-pane>
  <auro-pane date="2021-10-15"></auro-pane>
  <auro-pane date="2021-10-16"></auro-pane>
  <auro-pane date="2021-10-17"></auro-pane>
  <auro-pane date="2021-10-18"></auro-pane>
  <auro-pane date="2021-10-19"></auro-pane>
  <auro-pane date="2021-10-20"></auro-pane>
  <auro-pane date="2021-10-21"></auro-pane>
  <auro-pane date="2021-10-22"></auro-pane>
  <auro-pane date="2021-10-23"></auro-pane>
  <auro-pane date="2021-10-24"></auro-pane>
  <auro-pane date="2021-10-25"></auro-pane>
  <auro-pane date="2021-10-26"></auro-pane>
  <auro-pane date="2021-10-27"></auro-pane>
  <auro-pane date="2021-10-28"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-element.js -->

```js
// Vanilla JS example
// -------------------------

export function centerElementExample() {
  const carousel = document.querySelector("auro-carousel#centerElement");
  const panes = carousel.querySelectorAll("auro-pane");
  let selectedPane = carousel.querySelector("auro-pane[selected]");

  panes.forEach((pane) =>
    pane.addEventListener("click", () => {
      selectedPane.selected = false;
      pane.selected = true;
      selectedPane = pane;
      carousel.centerElement(selectedPane);
    }),
  );
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element-react.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-element-react.js -->

```js
// React example
// -------------------------

const days = [...Array(28).keys()];

<auro-carousel label="Flight options" ref={this.centerCarouselRef}>
  {days.map((day, idx) => (
    //biome-ignore lint: not going to change the onclick event
    <auro-pane
      key={day}
      date={`2021-10-${(day + 1).toString().padStart(2, 0)}`}
      selected={this.state.centerSelectedDay === idx ? true : undefined}
      onClick={({ target }) => {
        this.setState({ centerSelectedDay: idx });
        this.centerCarouselRef.current.centerElement(target);
      }}
    />
  ))}
</auro-carousel>;
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Aria Label Slots

Use the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots to customize the accessible names for the carousel container and the left and right scroll buttons.

**Note:** Do not use the `aria-label` attribute on the `auro-carousel` element itself. This will be ignored in favor of the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slots.html) -->
  <!-- The below content is automatically added from ./../apiExamples/aria-label-slots.html -->
  <auro-carousel centerSelected>
    <span slot="ariaLabel">My Carousel</span>
    <span slot="ariaLabel.scroll.left">My custom scroll left text</span>
    <span slot="ariaLabel.scroll.right">My custom scroll right text</span>
    <auro-pane date="2020-10-10" price="$435"></auro-pane>
    <auro-pane date="2020-10-11" price="$435"></auro-pane>
    <auro-pane date="2020-10-12" price="$435"></auro-pane>
    <auro-pane date="2020-10-13" price="$435"></auro-pane>
    <auro-pane date="2020-10-14" price="$435"></auro-pane>
    <auro-pane date="2020-10-15" price="$435"></auro-pane>
    <auro-pane date="2020-10-16" price="$435"></auro-pane>
    <auro-pane date="2020-10-17" price="$435"></auro-pane>
    <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
    <auro-pane date="2020-10-19" price="$435"></auro-pane>
    <auro-pane date="2020-10-20" price="$435"></auro-pane>
    <auro-pane date="2020-10-21" price="$435"></auro-pane>
    <auro-pane date="2020-10-22" price="$435"></auro-pane>
    <auro-pane date="2020-10-23" price="$435"></auro-pane>
    <auro-pane date="2020-10-24" price="$435"></auro-pane>
    <auro-pane date="2020-10-25" price="$435"></auro-pane>
    <auro-pane date="2020-10-26" price="$435"></auro-pane>
    <auro-pane date="2020-10-27" price="$435"></auro-pane>
  </auro-carousel>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slots.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label-slots.html -->

```html
<auro-carousel centerSelected>
  <span slot="ariaLabel">My Carousel</span>
  <span slot="ariaLabel.scroll.left">My custom scroll left text</span>
  <span slot="ariaLabel.scroll.right">My custom scroll right text</span>
  <auro-pane date="2020-10-10" price="$435"></auro-pane>
  <auro-pane date="2020-10-11" price="$435"></auro-pane>
  <auro-pane date="2020-10-12" price="$435"></auro-pane>
  <auro-pane date="2020-10-13" price="$435"></auro-pane>
  <auro-pane date="2020-10-14" price="$435"></auro-pane>
  <auro-pane date="2020-10-15" price="$435"></auro-pane>
  <auro-pane date="2020-10-16" price="$435"></auro-pane>
  <auro-pane date="2020-10-17" price="$435"></auro-pane>
  <auro-pane date="2020-10-18" selected price="$435"></auro-pane>
  <auro-pane date="2020-10-19" price="$435"></auro-pane>
  <auro-pane date="2020-10-20" price="$435"></auro-pane>
  <auro-pane date="2020-10-21" price="$435"></auro-pane>
  <auro-pane date="2020-10-22" price="$435"></auro-pane>
  <auro-pane date="2020-10-23" price="$435"></auro-pane>
  <auro-pane date="2020-10-24" price="$435"></auro-pane>
  <auro-pane date="2020-10-25" price="$435"></auro-pane>
  <auro-pane date="2020-10-26" price="$435"></auro-pane>
  <auro-pane date="2020-10-27" price="$435"></auro-pane>
</auro-carousel>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "./../node_modules/@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-carousel-gradient-color-one: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-carousel-gradient-color-two: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
