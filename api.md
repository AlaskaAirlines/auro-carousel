<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-carousel

Displays a group of elements, such as flight date options or images, in a horizontally scrollable container with buttons to scroll left and right.

**Key capabilities:**
- **Scroll buttons**: Shows left and right buttons on screens at least 576 pixels wide when the carousel can scroll that way, or at all times when you add `displayArrows`.
- **Centered selection**: Scrolls the first element with the `selected` attribute to the center when you add `centerSelected`.
- **Custom scroll distance**: Sets how far each button press scrolls, in pixels, with `scrollDistance`.
- **Accessible names**: Names the carousel and its scroll buttons through the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots.

### Properties and attributes

| Properties     | Attributes     | Modifiers | Type    | Default | Description                                                                                                                                                                          |
| -------------- | -------------- | --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayArrows  | displayarrows  |           | boolean |         | Shows the left and right scroll buttons at all times, instead of hiding each one when the carousel can't scroll further in that direction. The buttons stay hidden on small screens. |
| scrollDistance | scrolldistance |           | number  | `300`   | Sets how many pixels the carousel scrolls when someone selects the left or right button.                                                                                             |
| label          | label          |           | string  |         | Deprecated: Use the `ariaLabel` slot instead.<br>Sets the text that screen readers announce as the carousel's name.                                                                  |
|                | centerselected |           | boolean |         | Centers the carousel on the first element that has the `selected` attribute when the carousel first renders.                                                                         |

### Methods

| Name             | Parameters                                                                                                                       | Return | Description                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| centerElement    | `el` (Element) - The element to center inside the carousel. Must be a descendant of the carousel.                                | void   | Centers the given element inside the carousel.                                             |
| register         | `name` (string) - The tag name to register the element under.                                                                    | void   | Registers the element with the browser under a tag name.                                   |
| scrollCarousel   | `num` (number) - The number of pixels to scroll the carousel by. Positive scrolls to the<br>right, negative scrolls to the left. | void   | Scrolls the carousel by the given amount.                                                  |
| scrollToSelected | None                                                                                                                             | void   | Scrolls the first element that has the `selected` attribute to the center of the carousel. |

### Events

| Name        | Description                                              |
| ----------- | -------------------------------------------------------- |
| scrollLeft  | Dispatched when someone selects the left scroll button.  |
| scrollRight | Dispatched when someone selects the right scroll button. |

### Slots

| Name                   | Description                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default)              | The elements to scroll through, such as `auro-pane` elements or images.                                                                                                                              |
| ariaLabel.scroll.left  | Text that screen readers announce for the left scroll button, for example "Show earlier dates". Defaults to "Scroll left".                                                                           |
| ariaLabel.scroll.right | Text that screen readers announce for the right scroll button, for example "Show later dates". Defaults to "Scroll right".                                                                           |
| ariaLabel              | Text that screen readers announce as the carousel's name, for example "Flight date options". Required unless you set the deprecated `label` attribute, and takes priority over it when both are set. |

### CSS shadow parts

| Name    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| wrapper | The scrollable `<div>` that wraps the scroll buttons and the slotted elements. |

### CSS custom properties

| Name                                  | Description                                                          |
| ------------------------------------- | -------------------------------------------------------------------- |
| --ds-auro-carousel-gradient-color-one | Color at the outer edge of the fade shown beside each scroll button. |
| --ds-auro-carousel-gradient-color-two | Color at the inner edge of the fade shown beside each scroll button. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-carousel>
<span slot="ariaLabel">Flight date options</span>
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
</auro-carousel>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-carousel&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2020-10-10" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-11" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-12" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-13" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-14" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-15" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-16" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-17" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-18" selected price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-19" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-20" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-21" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-22" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-23" price="$435"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

#### Center selected

Add the `centerSelected` attribute to scroll the first element with the `selected` attribute to the center when the carousel first renders.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-selected.html) -->
<!-- The below content is automatically added from ./../apiExamples/center-selected.html -->
<auro-carousel centerSelected>
<span slot="ariaLabel">Flight date options</span>
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
</auro-carousel>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-selected.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-selected.html -->

<pre class="language-html"><code class="language-html">&lt;auro-carousel centerSelected&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2020-10-10" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-11" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-12" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-13" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-14" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-15" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-16" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-17" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-18" selected price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-19" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-20" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-21" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-22" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-23" price="$435"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Display arrows

Add the `displayArrows` attribute to always show the left and right scroll buttons, whatever the scroll position. The buttons stay hidden on small screens.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/display-arrows.html) -->
<!-- The below content is automatically added from ./../apiExamples/display-arrows.html -->
<auro-carousel displayArrows>
<span slot="ariaLabel">Flight date options</span>
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

<pre class="language-html"><code class="language-html">&lt;auro-carousel displayArrows&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2021-10-01"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-02"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-03"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-04"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-05"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-06"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-07"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-08"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-09"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-10"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-11"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-12" selected&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-13"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-14"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-15"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-16"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-17"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-18"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-19"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-20"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-21"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-22"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-23"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-24"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-25"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-26"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-27"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-28"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Scroll distance

Use the `scrollDistance` attribute to set how many pixels the carousel scrolls when someone selects the left or right button.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scroll-distance.html) -->
<!-- The below content is automatically added from ./../apiExamples/scroll-distance.html -->
<auro-carousel scrollDistance="200">
<span slot="ariaLabel">Flight date options</span>
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
<auro-pane date="2020-10-20" price="$435"></auro-pane>
<auro-pane date="2020-10-21" price="$435"></auro-pane>
<auro-pane date="2020-10-22" price="$435"></auro-pane>
<auro-pane date="2020-10-23" price="$435"></auro-pane>
</auro-carousel>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scroll-distance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/scroll-distance.html -->

<pre class="language-html"><code class="language-html">&lt;auro-carousel scrollDistance="200"&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2020-10-10" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-11" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-12" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-13" selected price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-14" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-15" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-16" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-17" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-18" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-19" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-20" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-21" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-22" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-23" price="$435"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Method examples

#### Center element

Use the `centerElement` method to center an element inside the carousel, such as a pane when someone selects it. The element must be a descendant of the carousel, or the method throws an error. The carousel can only center an element that has enough content on both sides of it.

This example doesn't use `centerSelected`, so it doesn't center the selected pane on load. The method doesn't run on its own, so call it from an event handler, such as a click listener. The code below shows a vanilla JS example and a React example.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-element.html) -->
<!-- The below content is automatically added from ./../apiExamples/center-element.html -->
<auro-carousel id="centerElement">
<span slot="ariaLabel">Flight date options</span>
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

<pre class="language-html"><code class="language-html">&lt;auro-carousel id="centerElement"&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2021-10-01"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-02"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-03"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-04"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-05"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-06"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-07"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-08"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-09"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-10"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-11"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-12" selected&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-13"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-14"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-15"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-16"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-17"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-18"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-19"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-20"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-21"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-22"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-23"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-24"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-25"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-26"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-27"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2021-10-28"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-element.js -->

<pre class="language-js"><code class="language-js">// Vanilla JS example
// -------------------------
&#10;export function centerElementExample() {
  const carousel = document.querySelector("auro-carousel#centerElement");
  const panes = carousel.querySelectorAll("auro-pane");
  let selectedPane = carousel.querySelector("auro-pane[selected]");
&#10;  panes.forEach((pane) =&gt;
    pane.addEventListener("click", () =&gt; {
      selectedPane.selected = false;
      pane.selected = true;
      selectedPane = pane;
      carousel.centerElement(selectedPane);
    }),
  );
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element-react.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/center-element-react.js -->

<pre class="language-js"><code class="language-js">// React example
// -------------------------
&#10;const days = [...Array(28).keys()];
&#10;&lt;auro-carousel ref={this.centerCarouselRef}&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  {days.map((day, idx) =&gt; (
    //biome-ignore lint: not going to change the onclick event
    &lt;auro-pane
      key={day}
      date={`2021-10-${(day + 1).toString().padStart(2, 0)}`}
      selected={this.state.centerSelectedDay === idx ? true : undefined}
      onClick={({ target }) =&gt; {
        this.setState({ centerSelectedDay: idx });
        this.centerCarouselRef.current.centerElement(target);
      }}
    /&gt;
  ))}
&lt;/auro-carousel&gt;;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Aria label slots

Use the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots to customize the accessible names for the carousel and its left and right scroll buttons.

**Note:** Don't add the `aria-label` attribute to the `auro-carousel` element itself. The carousel takes its accessible name from the `ariaLabel` slot, not from that attribute.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slots.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label-slots.html -->
<auro-carousel centerSelected>
<span slot="ariaLabel">Flight date options</span>
<span slot="ariaLabel.scroll.left">Show earlier dates</span>
<span slot="ariaLabel.scroll.right">Show later dates</span>
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

<pre class="language-html"><code class="language-html">&lt;auro-carousel centerSelected&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;span slot="ariaLabel.scroll.left"&gt;Show earlier dates&lt;/span&gt;
  &lt;span slot="ariaLabel.scroll.right"&gt;Show later dates&lt;/span&gt;
  &lt;auro-pane date="2020-10-10" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-11" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-12" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-13" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-14" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-15" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-16" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-17" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-18" selected price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-19" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-20" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-21" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-22" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-23" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-24" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-25" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-26" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-27" price="$435"&gt;&lt;/auro-pane&gt;
&lt;/auro-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Change the values of the following CSS custom properties to restyle the component.

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "./../node_modules/@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-carousel-gradient-color-one: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-carousel-gradient-color-two: transparent;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
