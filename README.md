# Livewire Turbolinks/Turbo Plugin

If you are using Turbolinks/Turbo AND Livewire on the same page, this plugin is required.

Livewire Version 1 supported Turbolinks internally. Livewire Version 2 has removed internal support and extracted it into this plugin.

The goal of this adapter is to provide full Turbolinks/Turbo support in Livewire. However, because certain current and future features may be incompatible, we've extracted this into a separate package with the goal of keeping Turbolinks expectations, bugs, and fixes, isolated and away from the core of Livewire.

To that end, there are loose plans to add a Turbolinks-esque set of functionality to Livewire itself, but there are no immediate plans.

For the forseeable future, this adapter will remain a valid option for Livewire users hoping to use Turbolinks in their apps.

## Livewire Version Support
(Livewire version 1.x supports Turbolinks out of the box)

Livewire Version | Turbolinks/Turbo Plugin Version
--- | ---
2.x | 0.1.x

## Installation
### CDN
Include the CDN asset after `@livewireScripts` or  `<livewire:scripts>` in your app's HTML:

> Note: You MUST have either the `data-turbolinks-eval="false"` or `data-turbo-eval="false"` attributes added to the script tag (having both won't hurt).

```html
    ...
    @livewireScripts
    <script src="https://cdn.jsdelivr.net/gh/livewire/turbolinks@v0.1.x/dist/livewire-turbolinks.js" data-turbolinks-eval="false" data-turbo-eval="false"></script>
</body>
```
