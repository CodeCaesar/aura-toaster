({
  sendMessage: function (cmp, title, message, variant) {
    const mode = cmp.get('v.mode')
    const header = cmp.get('v.header')
    const notifier = cmp.find('notifier')

    const notify = () => {
      notifier.showNotice({
        header,
        title,
        message,
        variant,
        mode
      })
    }

    const toast = () => {
      notifier.showToast({
        title,
        message,
        variant,
        mode
      })
    }

    header ? notify() : toast()

    cmp.set('v.header', null)
    cmp.set('v.mode', 'dismissible')
  },
})
