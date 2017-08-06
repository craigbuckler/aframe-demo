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


  window.addEventListener('load', () => {

    // camera functionality
    let
      move = 0,
      cameraFree = document.getElementById('camera-free'),
      cameraFixed = document.getElementById('camera-fixed'),
      cameraMove = document.createElement('a-animation');

    cameraMove.setAttribute('attribute', 'position');
    cameraMove.setAttribute('direction', 'normal');
    cameraMove.setAttribute('duration', 2000);
    cameraMove.setAttribute('repeat', 0);

    document.addEventListener('keypress', (e) => {

      let key = e.key;
      if (!(key === '.' || key === ',' || key === '\\')) return;

      let oldMove = move;
      move += key === ',' ? -1 : key == '.' ? 1 : 0;

      if (move !== oldMove) {

        // remove animations
        while (cameraFixed.lastChild) cameraFixed.removeChild(cameraFixed.lastChild);

        // update camera animation
        cameraMove.setAttribute('from', oldMove * 2 + ' 1.6 0');
        cameraMove.setAttribute('to', move * 2 + ' 1.6 0');
        cameraFixed.setAttribute('camera', 'active', 1);
        cameraFixed.appendChild(cameraMove);

      }

      if (key === '\\') {
        cameraFree.setAttribute('camera', 'active', 1);
      }

    });

  });

})();
