# aura-toaster

A fluent api wrapper for the [lightning:notificationsLibrary](https://developer.salesforce.com/docs/component-library/bundle/lightning:notificationsLibrary/documentation).

## Methods

`notice`, `sticky`, and `pester` all return the aura component instance so you can chain your call into the message.

| Name | Return Type | Arguments | Description |
|---|---|---|---|
| notice | `toaster` | `header: String` | Modifier. The next message will be invoked as an SLDS Alert |
| sticky | `toaster` | - | Modifier. The next message will be invoked as a sticky toast |
| pester | `toaster` | - | Modifier. The next message will be invoked as a pester toast |
| error | `undefined` | `title: String, message: String` | Message. Fires an error message provided title and message. |
| info | `undefined` | `title: String, message: String` | Message. Fires an info message provided title and message. |
| success | `undefined` | `title: String, message: String` | Message. Fires a success message provided title and message. |
| warning | `undefined` | `title: String, message: String` | Message. Fires a warning message provided title and message. |

## Usage

```html
<!-- MyComponent.cmp -->
<aura:component description="myComponent">
  <c:Toaster aura:id="toaster" />
</aura:component>
```
```js
// MyComponentController.js
({
  myFunction: function(cmp, event, helper) {
    const toaster = cmp.find('toaster')

    toaster.notice('heading text').error('title', 'message') // => A Javascript Alert like dialogue that must be excused by mouse click with Error style.
    toaster.sticky().warning('title', 'message') // => A sticky toast with warning style.
    toaster.pester().info('title', 'message') // A toast that may not be excused, but fades after 3 seconds with info style.
    toaster.success('title', 'message') // A default success toast.
  }
})
```