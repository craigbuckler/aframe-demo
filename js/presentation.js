// create the presentation
'use strict';

const
  slide = [

    {
      title:  'Raise your VR A-game\nwith A-Frame',
      body:   'TechExeter 2017\nCraig Buckler\n@craigbuckler',
      foot:   'github.com/craigbuckler/aframe-demo'
    },

    {
      body:  'Who\'s excited by VR and AR?'
    },

    {
      body:   'VR and AR combine the\ntoughest challenges in IT...'
    },

    {
      body:   '1. Keeping up with\nnew technologies'
    },

    {
      body:   '2. Dealing with users'
    },

    {
      body:   '3. Solving challenges\n1 & 2 in a 20-minute\npresentation'
    },

    {
      body:   'Virtual Reality and\nAugemented Reality\nare on the cusp of\nmainstream adoption',
    },

    {
      title:  'like they have been\nfor 30 years',
      image:  'old-vr'
    },

    {
      title:  'First problem',
      body:   'who owns...'
    },

    {
      title:  'Oculus Rift',
      image:  'oculus-rift'
    },

    {
      title:  'Playstation VR',
      image:  'playstation-vr'
    },

    {
      title:  'Samsung Gear VR',
      image:  'samsung-vr'
    },

    {
      title:  'HTC Vive',
      image:  'htc-vive'
    },

    {
      title:  'Google Daydream',
      image:  'google-daydream'
    },

    {
      title:  'Google Cardboard',
      image:  'google-cardboard'
    },

    {
      title:  'User issues:',
      body:   'over-hyped\nexpensive\nnot selling well\nlittle content\nimpractical'
    },

    {
      title:  'but it\'s still great technology...',
      body:   'games\nvideo\neducation / training\nmeetings\ndata visualisation\nresearch\ne-commerce',
      foot:   '',
      image:  ''
    },

    {
      title:  'and, ahem...',
      body:   '\nadult entertainment'
    },

    {
      title:  'Development issues:',
      body:   'it\'s difficult\ndevice fragmentation\ndifferent APIs\nclosed platforms\n****ing AppStores\nnon-VR users',
      foot:   ''
    },

    {
      title:  'What we need...',
      body:   'an open platform which can\ndeliver VR content to anyone\nusing any device\nregardless of the hardware'
    },

    {
      body:   'THE WEB'
    },

    {
      title:  'Browser APIs',
      body:   '1. WebGL\n2. WebVR'
    },

    {
      body:   'it\'s still too difficult!'
    },

    {
      title:  'device-agnostic VR library',
      foot:   'https://aframe.io/',
      image:  'aframe'
    },

    {
      title:  'A-Frame benefits',
      body:   'easy to use\nHTML and JavaScript\ncomponent-based\neasy to extend\nvery fast\nsmall payload\nworks everywhere',
      foot:   'https://aframe.io/'
    },

    {
      title:  'Demonstrations',
      body:   'You\'re looking at one!\ncraigbuckler.com/vr/'
    },

    {
      title:  'Thank you for watching!',
      body:   'Craig Buckler\n@craigbuckler\ncraigbuckler.com/vr/',
      foot:   'github.com/craigbuckler/aframe-demo'
    },

    {
      title:  'Any questions?...',
      body:   'Craig Buckler\n@craigbuckler\ncraigbuckler.com/vr/',
      foot:   'github.com/craigbuckler/aframe-demo'
    }

  ],

  view = {
    boxZ:     -5,     // first slide Z co-ordinate (minus = further away)
    camY:     1.6,    // camera height
    camZ:     -3      // first slide camera Z co-ordinate
  },

  box = {
    width:    4,      // slide width (meters)
    height:   3,      // slide height
    depth:    0.1,    // slide depth
    maxX:     4,      // maximum number of slides in horizontal X-axis
    gapX:     1,      // horizontal gap between slides
    gapZ:     4,      // distance between rows of slides
    color:    '#222'  // slide color
  },

  text = {
    font:     'exo2semibold',
    color:    '#fff',
    title: {
      align:    'left',
      baseline: 'top',
      position: '-1.8 1.3 0.1',
      scale:    '1.2 1.2 1.2',
      color:    '#999',
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
    },
    slide: {
      align:    'left',
      baseline: 'bottom',
      position: '-1.8 -1.3 0.1',
      scale:    '0.4 0.4 0.4',
      color:    '#666'
    }
  },

  image = {
    maxWidth:   0.6 * box.width,
    maxHeight:  0.6 * box.height
  },


  slideNav = {
    switchCam: ['c', 'C', 'Enter', 'Tab', 'Escape'],
    back: ['z', 'Z', 'a', 'A', 'w', 'W', ',', 'ArrowLeft', 'ArrowUp', 'PageUp'],
    next: ['x', 'X,', 'd', 'D', 's', 'S', '.', 'ArrowRight', 'ArrowDown', 'PageDown'],
    home: ['Home']
  };


// start
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

    // slide number
    let sp = se.appendChild(document.createElement('a-text'));
    sp.setAttribute('value', s+1);
    sp.setAttribute('font', text.font);
    for (let tp in text.slide) {
      sp.setAttribute(tp, text.slide[tp]);
    }

    // slide text
    for (let t in slide[s]) {

      if (!slide[s][t]) continue;

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
            iScale = Math.min(image.maxWidth / img.width, image.maxHeight / img.height);

          si.setAttribute('position', `0 0 ${box.depth * 3}`);
          si.setAttribute('src', '#' + slide[s][t]);
          si.setAttribute('width', img.width * iScale);
          si.setAttribute('height', img.height * iScale);

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
    move = (parseInt(location.hash.slice(1),10) || 1) - 1, // current slide
    minX = (box.width / 2) - (box.maxX * (box.width + box.gapX) - box.gapX) / 2,
    cameraFree = document.getElementById('camera-free'),
    cameraFixed = document.getElementById('camera-fixed'),
    cameraMove = document.createElement('a-animation'),
    activeFree = true;

  cameraMove.setAttribute('attribute', 'position');
  cameraMove.setAttribute('direction', 'normal');
  cameraMove.setAttribute('duration', 2000);
  cameraMove.setAttribute('repeat', 0);

  document.addEventListener('keyup', keyHandler);

  // activate fixed camera
  keyHandler({ key: slideNav.switchCam[0] });

  // keypress handler
  function keyHandler(e) {

    let key = e.key;

    // switch cameras
    let fixedSwitch = false;
    if (slideNav.switchCam.indexOf(key) >= 0) {
      if (activeFree) cameraFixed.setAttribute('camera', 'active', 1);
      else cameraFree.setAttribute('camera', 'active', 1);
      fixedSwitch = activeFree;
      activeFree = !activeFree;
    }

    let oldMove = move;
    if (!activeFree) {
      move += slideNav.back.indexOf(key) >= 0 ? -1 : slideNav.next.indexOf(key) >= 0 ? 1 : 0;
      if (slideNav.home.indexOf(key) >= 0) move = 0;
    }

    if (fixedSwitch || move !== oldMove) {

      // return to first or last slide
      if (move >= slide.length) move = 0;
      else if (move < 0) move = slide.length - 1;

      // remove current animation
      while (cameraFixed.lastChild) cameraFixed.removeChild(cameraFixed.lastChild);

      // add new camera animation
      cameraMove.setAttribute('from', vPos(oldMove));
      cameraMove.setAttribute('to', vPos(move));

      cameraFixed.appendChild(cameraMove);

      // update URL
      history.pushState({}, 'slide ' + move, '#' + (move + 1));

    }

  }


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
