<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

  <div class="exampleWrapper">
    <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/default.html) -->
    <!-- AURO-GENERATED-CONTENT:END -->
  </div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/default.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Property Examples

#### `centerSelected`

Apply to the `auro-carousel` element to automatically center the selected node on UI render.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/centerSelected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/centerSelected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `displayArrows`

Using the `displayArrows` attribute will persistently show the left and right arrow buttons without consideration of scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/displayArrows.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/displayArrows.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `scrollDistance`

How many pixels to scroll the carousel when the shoulder buttons are triggered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scrollDistance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scrollDistance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Method Examples

#### `centerElement`

The following example illustrates the use of the `centerElement` method. This feature will attempt top center the selected pane element when clicked if there are enough surrounding nodes. This example DOES NOT center on load.

This method requires the user to invoke this feature based on a click event. See both a vanilla JS and React example below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/centerElement.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/centerElement.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/centerElement.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/centerElementReact.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Events

#### `scrollLeft`

When the guest clicks the 'left' carousel button.

#### `scrollRight`

When the guest clicks the 'right' carousel button.

</auro-accordion>

### Slot Example

#### default

Used for all elements inside the scrolling carousel.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### aria label slots

Use the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots to customize the accessible names for the carousel container and the left and right scroll buttons.

**Note:** Do not use the `aria-label` attribute on the `auro-carousel` element itself. This will be ignored in favor of the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/ariaLabelSlots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/ariaLabelSlots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
