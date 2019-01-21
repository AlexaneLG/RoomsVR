AFRAME.registerComponent('displayStars', {
  schema: {
    event: {type: 'string', default: ''}
  },

  init: function () {
    var self = this;
    var el = this.el;
    console.log("HELLO");
  },
  update: function () {
    console.log("WORLD");
  }
});