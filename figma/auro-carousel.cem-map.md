# auro-carousel — code-side map (from CEM)

Scope: attributes and slots only.

## Attributes

| attribute | kind | values | default | flags |
|---|---|---|---|---|
| `centerselected` | boolean |  |  |  |
| `displayarrows` | boolean |  |  |  |
| `scrolldistance` | number |  | 300 |  |
| `label` | string |  |  | deprecated |

## Slots

| slot | description |
|---|---|
| `(default)` | The elements to scroll through, such as `auro-pane` elements or images. |
| `ariaLabel` | Text that screen readers announce as the carousel's name, for example "Flight date options". Takes priority over the `label` attribute. |
| `ariaLabel.scroll.left` | Text that screen readers announce for the left scroll button, for example "Show earlier dates". Defaults to "Scroll Left". |
| `ariaLabel.scroll.right` | Text that screen readers announce for the right scroll button, for example "Show later dates". Defaults to "Scroll Right". |
