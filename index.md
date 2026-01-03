<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Carousel

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-carousel>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a group of elements in a scrollable container.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-carousel>` element should be used in situations where users may:

* Scroll through multiple flight date options or shoulder dates
* Scroll through multiple images
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

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
