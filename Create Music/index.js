//an object that holds all the classes in HTML
const elements = {
  sounds: ".sounds",
  pads: ".pads div",
};
window.addEventListener("load", () => {
  const padColurs = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3",
  ];
  const sounds = document.querySelectorAll(elements.sounds);
  const pads = document.querySelectorAll(elements.pads);

  //Play specific sound when clicked on pads
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
  //funtion to create bubbles
  const createBubbles = (index) => {
    // const bubble = document.createElement("div");
    // visual.appendChild(bubble);
    // bubble.style.backgroundColor = padColors[index];
    // bubble.style.animation = "fade 2s ease";
  };
});
