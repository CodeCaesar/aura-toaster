({
  notice: function (cmp, event, helper) {
    const header = event.getParams().arguments.header
    cmp.set('v.header', header)
    return cmp
  },

  sticky: function (cmp, event, helper) {
    cmp.set('v.mode', 'sticky')
    return cmp
  },

  pester: function (cmp, event, helper) {
    cmp.set('v.mode', 'pester')
    return cmp
  },

  error: function (cmp, event, helper) {
    const { title, message } = event.getParams().arguments
    helper.sendMessage(cmp, title, message, 'error')
  },

  info: function (cmp, event, helper) {
    const { title, message } = event.getParams().arguments
    helper.sendMessage(cmp, title, message, 'info')
  },

  success: function (cmp, event, helper) {
    const { title, message } = event.getParams().arguments
    helper.sendMessage(cmp, title, message, 'success')
  },

  warning: function (cmp, event, helper) {
    const { title, message } = event.getParams().arguments
    helper.sendMessage(cmp, title, message, 'warning')
  }
})
