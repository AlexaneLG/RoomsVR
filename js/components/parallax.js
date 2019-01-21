AFRAME.registerComponent('parallax', {
  schema: {
    event: {type: 'string', default: ''},
    xNormalized: {type: 'float', default: 0},
    yNormalized: {type: 'float', default: 0}
  },

  init: function () {
    var self = this;
    // display stars
    document.getElementById("displaystars").innerHTML = "<a-entity id='1' obj-model='obj: #star-5-obj' position='12 -4 -6' scale='0.05 0.05 0.05' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='2' obj-model='obj: #star-4-obj' position='10.6 -2 -6' scale='0.05 0.05 0.05' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='3' obj-model='obj: #star-5-obj' position='10 -2 -2' scale='0.03 0.03 0.03' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='4' obj-model='obj: #star-4-obj' position='-11 -2 -2' scale='0.03 0.03 0.03' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='5' obj-model='obj: #star-5-obj' position='-12 -1 -6' scale='0.05 0.05 0.05' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='6' obj-model='obj: #star-4-obj' position='11 1 -2' scale='0.05 0.05 0.05' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='7' obj-model='obj: #star-5-obj' position='-10 -5 -6' scale='0.03 0.03 0.03' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
              + "<a-entity id='8' obj-model='obj: #star-5-obj' position='-0.5 2.6 -15' scale='0.03 0.03 0.03' material='color: #edc55a; metalness: 0; roughness: 1'></a-entity>"
  },

  update: function () {
    var el = this.el;
    var data = this.data;
    document.addEventListener("mousemove", (event) => {
      var values = this.getValues(event);
      el.object3D.rotation.x = values[1] * 0.1;
      el.object3D.rotation.y = values[0] * 0.1;
    });
  },
  
  getValues(event) {
    xNormalized = (event.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2);
    yNormalized = (event.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2);
    return [xNormalized, yNormalized];
  }
});