# aura-toaster

A fluent api wrapper for the [lightning:notificationsLibrary](https://developer.salesforce.com/docs/component-library/bundle/lightning:notificationsLibrary/documentation).

## Methods

| Name | Return Type | Arguments | Description |
|---|---|---|---|
| notice | `toaster` | `header: String` | Modifier. The next message will be invoked as an SLDS Alert |
| sticky | `toaster` | - | Modifier. The next message will be invoked as a sticky toast |
| pester | `toaster` | - | Modifier. The next message will be invoked as a pester toast |
| error | `undefined` | `title: String, message: String` | Message. Fires an error message provided title and message. |
| info | `undefined` | `title: String, message: String` | Message. Fires an info message provided title and message. |
| success | `undefined` | `title: String, message: String` | Message. Fires a success message provided title and message. |
| warning | `undefined` | `title: String, message: String` | Message. Fires a warning message provided title and message. |
