<!-- build-mismatch:begin summary -->
# auro-carousel — what matches by name and what does not, before translate

Sources: CEM from `origin/main` (auro-carousel.cem-map.json) and Figma component set **Carousel** (node 3693:13840). Pairing: exact name equality after lowercasing and trimming, and nothing else. This is the gap before `auro-carousel.translate.md`: nothing from that file is applied or noted here, and every item in PART 2 and PART 3 gets a row in it. Scope: attributes and slots only.

Matched by name: 0 of 3 Figma properties (), with 0 extra state blocks. Design-related code attributes with no Figma counterpart: **1 of 1**; functionality-related ones are listed separately in PART 3 (2 of 2) (1 more excluded as deprecated or private). Figma properties with no code counterpart: **3 of 3**.
<!-- build-mismatch:end summary -->

<!-- build-mismatch:begin addressed -->
# PART 1 — Matched by name (before translate)

0 of 3 bindable attributes (4 in the CEM; 1 deprecated or private excluded) and 0 of 4 slots match a Figma property by name. An attribute can appear more than once if more than one Figma property matches it.

### Attributes

_none_

### Slots

_none_

### Figma blocks (name matches only)

- single block, no variant restriction

Every block also carries the 0 non-state matches above.
<!-- build-mismatch:end addressed -->

<!-- build-mismatch:begin not-addressed -->
# PART 2 — NOT matched by name (before translate)

Everything below has no Figma counterpart with an equal name. Each item has a row in `auro-carousel.translate.md` (mapped, `n/a` or `TBD`); build-translate adds the missing ones.

## Design-related code attributes with no Figma counterpart

| attribute | kind / values | default | flags |
|---|---|---|---|
| `displayarrows` | boolean |  |  |

## Code attributes excluded by rule (deprecated or private)

| attribute | kind / values | flags |
|---|---|---|
| `label` | string | deprecated |

## Code slots with no Figma counterpart

- `(default)`
- `ariaLabel`
- `ariaLabel.scroll.left`
- `ariaLabel.scroll.right`

## Code enum values with no Figma counterpart (on paired properties)

_none_

## Figma properties with no code counterpart

| Figma property | type | options / default | why |
|---|---|---|---|
| Gradient Background | BOOLEAN | true | no CEM attribute or slot with this name |
| State | VARIANT | Default, Hover, Focused, Active (default Default) | no CEM attribute or slot with this name |
| Direction | VARIANT | False, True (default False) | no CEM attribute or slot with this name |

## Figma variant options with no code counterpart (all variant properties)

- State = Default
- State = Hover
- State = Focused
- State = Active
- Direction = False
- Direction = True
<!-- build-mismatch:end not-addressed -->

<!-- build-mismatch:begin functionality -->
# PART 3 — Functionality-related, NOT matched by name (before translate)

Not design-related: these do not change how the component looks or a state shown in Figma (behaviour, accessibility, form, validation, browser hints). They are not part of the 100% design target.

| attribute | kind / values | default | flags |
|---|---|---|---|
| `centerselected` | boolean |  |  |
| `scrolldistance` | number | 300 |  |
<!-- build-mismatch:end functionality -->
