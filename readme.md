<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Carousel

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-carousel>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that displays a group of elements in a scrollable container.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `<auro-carousel>` when people need to:

* Scroll through flight date options, such as dates just before and after a chosen date
* Scroll through images
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-carousel/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-carousel/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-carousel?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-carousel)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-carousel?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-carousel</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-carousel>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-carousel";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-carousel@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroCarousel } from '@aurodesignsystem/auro-carousel/class';
&#10;// Register with a custom name if desired
AuroCarousel.register('custom-carousel');</code></pre>

This creates a new custom element `<custom-carousel>` that behaves like `<auro-carousel>`, so both can be on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-carousel scrollDistance="420" id="demo1">
<span slot="ariaLabel">Flight date options</span>
<auro-pane date="2020-10-10" price="$435"></auro-pane>
<auro-pane date="2020-10-11" price="$435"></auro-pane>
<auro-pane date="2020-10-12" price="$435"></auro-pane>
<auro-pane date="2020-10-13" selected price="$435"></auro-pane>
<auro-pane date="2020-10-14" price="$435" disabled></auro-pane>
<auro-pane date="2020-10-15" price="$435"></auro-pane>
<auro-pane date="2020-10-16" price="$435"></auro-pane>
<auro-pane date="2020-10-17" price="$435"></auro-pane>
<auro-pane date="2020-10-18" price="$435"></auro-pane>
<auro-pane date="2020-10-19" price="$435"></auro-pane>
<auro-pane date="2020-10-20" price="$435"></auro-pane>
<auro-pane date="2020-10-21" price="$435"></auro-pane>
<auro-pane date="2020-10-22" price="$435"></auro-pane>
<auro-pane date="2020-10-23" price="$435"></auro-pane>
</custom-carousel>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-carousel scrollDistance="420" id="demo1"&gt;
  &lt;span slot="ariaLabel"&gt;Flight date options&lt;/span&gt;
  &lt;auro-pane date="2020-10-10" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-11" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-12" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-13" selected price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-14" price="$435" disabled&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-15" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-16" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-17" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-18" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-19" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-20" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-21" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-22" price="$435"&gt;&lt;/auro-pane&gt;
  &lt;auro-pane date="2020-10-23" price="$435"&gt;&lt;/auro-pane&gt;
&lt;/custom-carousel&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
