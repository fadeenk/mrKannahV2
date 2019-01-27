export default {
  "particles": {
  "number": {
    "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
    }
  },
  "color": {
    "value": "#ffffff"
  },
  "shape": {
    "type": ["circle", "triangle", "polygon"],
      "stroke": {
      "width": 0,
        "color": "#000000"
    },
    "polygon": {
      "nb_sides": 5
    },
  },
  "opacity": {
    "value": 0.5,
      "random": false,
      "anim": {
      "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
    }
  },
  "size": {
    "value": 5,
      "random": true,
      "anim": {
      "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
    }
  },
  "line_linked": {
    "enable": true,
      "distance": 150,
      "color": "#02f257",
      "opacity": 0.4,
      "width": 1
  },
  "move": {
    "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
      "enable": false,
        "rotateX": 600,
        "rotateY": 1200
    }
  }
},
  "interactivity": {
    "detect_on": "canvas",
      "events": {
      "onhover": {
        "enable": false,
          "mode": "repulse"
      },
      "onclick": {
        "enable": false,
          "mode": "push"
      },
      "resize": true
    },
  },
  "retina_detect": true
};
