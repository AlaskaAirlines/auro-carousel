<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Carousel

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-carousel>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that displays a group of elements in a scrollable container.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-carousel>` when people need to:

* Scroll through flight date options or shoulder dates
* Scroll through images
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

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
