# Component
The `CardBackground` component has one custom attribute called `image`. It is a string that represents what image file will be loaded. If the value is invalid or not passed at all, it defaults to `default`. The valid `image` values are: `venice`, `berlin`, `barcelona`, `paris`, `amsterdam`, `london` and `default`.

It will try to load the `.webp` image and fallback to `.jpg` if not supported.

## Modifiers
The available modifier for this component is the `--position-absolute`, it is used to position the component behind other elements and attain the background effect. 
