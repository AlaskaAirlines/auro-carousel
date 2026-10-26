<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

#### Center selected

Add the `centerSelected` attribute to scroll the first element with the `selected` attribute to the center when the carousel first renders.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-selected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-selected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Display arrows

Add the `displayArrows` attribute to always show the left and right scroll buttons, whatever the scroll position. The buttons stay hidden on small screens.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/display-arrows.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/display-arrows.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Scroll distance

Use the `scrollDistance` attribute to set how many pixels the carousel scrolls when someone selects the left or right button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scroll-distance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scroll-distance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Method Examples

#### Center element

Use the `centerElement` method to center an element inside the carousel, such as a pane when someone selects it. The element must be a descendant of the carousel, or the method throws an error. The carousel can only center the element when there's enough content on both sides of it.

This example doesn't use `centerSelected`, so it doesn't center the selected pane on load. The method doesn't run on its own, so call it from an event handler, such as a click listener. The code below shows a vanilla JS example and a React example.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-element.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-element-react.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Slot Examples

### Aria label slots

Use the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots to customize the accessible names for the carousel and its left and right scroll buttons.

**Note:** Don't add the `aria-label` attribute to the `auro-carousel` element itself. The carousel takes its accessible name from the `ariaLabel` slot, not from that attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Change the values of the following CSS custom properties to restyle the component.

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
