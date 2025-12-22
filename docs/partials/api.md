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

#### Center Selected

Set the `centerSelected` attribute to automatically center the selected node upon rendering the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/center-selected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/center-selected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Display Arrows

Using the `displayArrows` attribute will persistently show the left and right arrow buttons without consideration of scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/display-arrows.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/display-arrows.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Scroll Distance

Use the `scrollDistance` attribute to specify how many pixels to scroll the carousel when the shoulder buttons are interacted with.

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

#### Center Element

The following example illustrates the use of the `centerElement` method. This feature will center the selected pane element when clicked if there are enough surrounding nodes. This example **DOES NOT** center on load, as shown by the `centerSelected` attribute.

This method requires the user to invoke this feature based on a click event. See both a vanilla JS and React example below.

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

### Aria Label Slots

Use the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots to customize the accessible names for the carousel container and the left and right scroll buttons.

**Note:** Do not use the `aria-label` attribute on the `auro-carousel` element itself. This will be ignored in favor of the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
