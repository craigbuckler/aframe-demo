// create the presentation
'use strict';

const
  slide = [

    {
      title:  'Raise your VR A-game\nwith A-Frame',
      body:   'TechExeter 2017',
      foot:   'Craig Buckler, @craigbuckler'
    },

    {
      title:  'Who\'s excited?!',
      body:   'Virtual Reality and\nAugemented Reality:\non the cusp of\nmainstream adoption',
      foot:   'Craig Buckler, @craigbuckler'
    },

    {
      title:  'like they have been\nfor 30 years',
      image:  'old-vr'
    },

    {
      title:  'Slide 4',
      body:   'Some other stuff',
      foot:   'Another footer'
    }

  ],

  view = {
    boxZ:     -5,
    camY:     1.6,
    camZ:     -3
  },

  box = {
    width:    4,
    height:   3,
    depth:    0.1,
    maxX:     3,
    gapX:     1,
    gapZ:     4,
    color:    '#222'
  },

  text = {
    font:     'exo2semibold',
    color:    '#fff',
    title: {
      align:    'left',
      baseline: 'top',
      position: '-1.8 1.3 0.1',
      scale:    '1.2 1.2 1.2'
    },
    body: {
      align:    'center',
      baseline: 'center',
      position: '0 0 0.3'
    },
    foot: {
      align:    'right',
      baseline: 'bottom',
      position: '1.8 -1.3 0.1',
      scale:    '0.7 0.7 0.7',
      color:    '#aaa'
    }
  };

let scene;


window.addEventListener('load', () => {

  scene = document.getElementsByTagName('a-scene')[0];
  if (!scene) return;

  // create slides
  makeSlides();

  // camera mover
  cameraMove();

});


// generate all slides
function makeSlides() {

  let minX = (box.width / 2) - (box.maxX * (box.width + box.gapX) - box.gapX) / 2;

  for (let s = 0; s < slide.length; s++) {

    // create slide box
    let
      x = (s % box.maxX) * (box.width + box.gapX) + minX,
      z = view.boxZ - (Math.floor(s / box.maxX) * box.gapZ),
      se = document.createElement('a-box');

    se.setAttribute('width', box.width);
    se.setAttribute('height', box.height);
    se.setAttribute('depth', box.depth);
    se.setAttribute('color', box.color);
    se.setAttribute('position', `${x} ${box.height / 2} ${z}`);

    // slide text
    for (let t in slide[s]) {

      if (text[t]) {

        // text handler
        let st = se.appendChild(document.createElement('a-text'));

        // core attributes
        st.setAttribute('font', text.font);
        st.setAttribute('color', text.color);
        st.setAttribute('value', slide[s][t]);

        // text attributes for type
        for (let tp in text[t]) {
          st.setAttribute(tp, text[t][tp]);
        }

      }
      else if (t === 'image') {

        // image handler (must be defined as an asset)
        let img = document.getElementById(slide[s][t]);

        if (img) {

          let
            si = se.appendChild(document.createElement('a-image')),
            iPx = Math.max(img.width, img.height);

          si.setAttribute('position', `0 0 ${box.depth * 3}`);
          si.setAttribute('src', '#' + slide[s][t]);
          si.setAttribute('width', 2);
          si.setAttribute('height', 1.06);

          // TODO calculate w x h based on N% of slide dimensions

        }

      }

    }

    // add to scene
    scene.appendChild(se);

  }

}


// camera functionality
function cameraMove() {

  let
    move = 0,
    minX = (box.width / 2) - (box.maxX * (box.width + box.gapX) - box.gapX) / 2,
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

      // return to first or last slide
      if (move >= slide.length) move = 0;
      else if (move < 0) move = slide.length - 1;

      // remove current animation
      while (cameraFixed.lastChild) cameraFixed.removeChild(cameraFixed.lastChild);

      // add new camera animation
      cameraMove.setAttribute('from', vPos(oldMove));
      cameraMove.setAttribute('to', vPos(move));
      cameraFixed.setAttribute('camera', 'active', 1);
      cameraFixed.appendChild(cameraMove);

    }

    if (key === '\\') {
      cameraFree.setAttribute('camera', 'active', 1);
    }

  });

  // calculate X Y Z position
  function vPos(s) {
    return (
      ((s % box.maxX) * (box.width + box.gapX) + minX) +
      ' ' +
      view.camY +
      ' ' +
      (view.camZ - (Math.floor(s / box.maxX) * box.gapZ))
    );
  }

}
