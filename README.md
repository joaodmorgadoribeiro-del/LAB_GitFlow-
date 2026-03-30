# LAB_GitFlow-
Git Flow Lab for Ironhack!

## Feature: Dark Mode Interaction

A responsive theme switcher was implemented using JavaScript and CSS attribute selectors.

- **Trigger:** Clicking the `#theme-toggle` button in the header.
- **Behavior:** The JavaScript toggles the `data-theme` attribute on the `<body>` element between `light` and `dark`.
- **Styling:** CSS uses the `body[data-theme="dark"]` selector to override default colors with dark-themed variables, providing a better user experience in low-light environments.
- **Transition:** A `0.3s` transition was added for a smooth visual shift between modes.
