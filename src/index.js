Component({
  properties: {
    data: {
      type: 'Array',
      value: [],
    },
    headerPhoto: {
      type: 'String',
      value: '',
    }
  },
  methods: {
    handleError({currentTarget}) {
      this.setData({
        [currentTarget.dataset.name]: './images/loaderror.png',
      })
    }
  }
})
