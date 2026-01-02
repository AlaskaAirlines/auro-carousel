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