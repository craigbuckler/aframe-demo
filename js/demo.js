/* scale an entity */
/* global AFRAME */

(() => {

  'use strict';

  AFRAME.registerComponent('onover-scale', {
    schema: {
      to: { default: '2 2 2' }
    },
    init: function () {
      let data = this.data;

      this.el.addEventListener('mouseenter', function() {
        this.currentScale = this.getAttribute('scale');
        this.setAttribute('scale', data.to);
      });

      this.el.addEventListener('mouseleave', function() {
        this.setAttribute('scale', this.currentScale);
      });

    }
  });

})();
