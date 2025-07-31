// Since only English, no language switching needed
// But keeping button for future use or design consistency

const langBtn = document.getElementById('langBtn');
langBtn.style.display = 'none';  // hide button since only English

// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#FFD700" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.7 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "color": "#FFD700" },
    "move": { "enable": true, "speed": 2 }
  }
});
