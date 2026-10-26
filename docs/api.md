# auro-carousel

Displays a group of elements, such as flight date options or images, in a horizontally scrollable container with buttons to scroll left and right.

**Key capabilities:**
- **Scroll buttons**: Shows left and right buttons on medium and larger screens when there's more content to scroll to. Add `displayArrows` to always show them.
- **Centered selection**: Scrolls the first element with the `selected` attribute to the center when you add `centerSelected`.
- **Custom scroll distance**: Sets how far each button press scrolls, in pixels, with `scrollDistance`.
- **Accessible names**: Names the carousel and its scroll buttons through the `ariaLabel`, `ariaLabel.scroll.left`, and `ariaLabel.scroll.right` slots.

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default | Description                                                                                                                                                               |
| -------------- | -------------- | --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| displayArrows  | displayarrows  |           | boolean |         | Shows the left and right scroll buttons at all times, instead of only when there's more content to scroll to in that direction. The buttons stay hidden on small screens. |
| scrollDistance | scrolldistance |           | number  | `300`   | Sets how many pixels the carousel scrolls when someone selects the left or right button.                                                                                  |
| label          | label          |           | string  |         | Deprecated: Use the `ariaLabel` slot instead.<br>Sets the text that screen readers announce as the carousel's name.                                                       |
|                | centerselected |           | boolean |         | Centers the carousel on the first element that has the `selected` attribute when the carousel first renders.                                                              |

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

| Name                   | Description                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| (default)              | The elements to scroll through, such as `auro-pane` elements or images.                                                                 |
| ariaLabel              | Text that screen readers announce as the carousel's name, for example "Flight date options". Takes priority over the `label` attribute. |
| ariaLabel.scroll.left  | Text that screen readers announce for the left scroll button, for example "Show earlier dates". Defaults to "Scroll Left".              |
| ariaLabel.scroll.right | Text that screen readers announce for the right scroll button, for example "Show later dates". Defaults to "Scroll Right".              |

### CSS Shadow Parts

| Name    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| wrapper | The scrollable `<div>` that wraps the scroll buttons and the slotted elements. |

### CSS Custom Properties

| Name                                  | Description                                                          |
| ------------------------------------- | -------------------------------------------------------------------- |
| --ds-auro-carousel-gradient-color-one | Color at the outer edge of the fade shown beside each scroll button. |
| --ds-auro-carousel-gradient-color-two | Color at the inner edge of the fade shown beside each scroll button. |