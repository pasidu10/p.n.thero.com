// Language Switch
const langBtn = document.getElementById('langBtn');
let sinhala = true;

langBtn.addEventListener('click', () => {
  if (sinhala) {
    // English Texts
    const engTexts = {
      heroTitle: "Punnānanda Thero Official Website",
      heroDesc: "Educational journey with Projects, Degrees and Skills...",
      aboutTitle: "About Me",
      aboutText: "I am a Software Engineer graduated from University of Moratuwa & IT Guru Global Company, specializing in Full Stack Development, Mobile Apps and Cyber Security.",
      skillsTitle: "My Skills",
      projectsTitle: "My Projects",
      degreesTitle: "My Degrees"
    };
    for (const id in engTexts) {
      if (document.getElementById(id)) {
        document.getElementById(id).innerText = engTexts[id];
      }
    }
    langBtn.innerText = "සිං";
    sinhala = false;
  } else {
    // Sinhala Texts
    const sinTexts = {
      heroTitle: "පුඤ්ඤානන්ද Thero Official Website",
      heroDesc: "ඉගෙනුම්, Projects, Degrees සහ Skills එකතු කරගත් අධ්‍යාපනික මග…",
      aboutTitle: "මම ගැන",
      aboutText: "මම University of Moratuwa සහ IT Guru Global Company හි ඉගෙනුම ලබාගත් Software Engineer කෙනෙක්. Full Stack Development, Mobile Apps සහ Cyber Security පැත්තේ නවීන තාක්ෂණයන්ගෙන් ඔබ සැමට සේවය කරනවා.",
      skillsTitle: "මගේ ඉකිල්ස්",
      projectsTitle: "මගේ Projects",
      degreesTitle: "මගේ Degrees"
    };
    for (const id in sinTexts) {
      if (document.getElementById(id)) {
        document.getElementById(id).innerText = sinTexts[id];
      }
    }
    langBtn.innerText = "EN";
    sinhala = true;
  }
});

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
