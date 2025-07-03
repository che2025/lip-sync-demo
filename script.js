// initialize Rive instance with the canvas and state machine
const riveInstance = new rive.Rive({
  src: "gum_boy.riv",
  canvas: document.getElementById("riveCanvas"),
  stateMachines: "MouthSync",
  autoplay: true,
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});

// viseme sequence for testing
const fakeVisemeSequence = [
  { time: 0, viseme: 3 },
  { time: 500, viseme: 5 },
  { time: 1000, viseme: 7 },
  { time: 1500, viseme: 10 },
  { time: 2000, viseme: 14 },
  { time: 2500, viseme: 2 },
  { time: 3000, viseme: 1 },
];

// button for playing audio and triggering viseme changes
document.getElementById("playBtn").addEventListener("click", () => {
  const audio = new Audio("Davis.wav");
  audio.play();

  const input = riveInstance.stateMachineInputs("MouthSync").find(i => i.name === "viseme");
  if (!input) {
    console.error("cannot find 'viseme' input！");
    return;
  }

  fakeVisemeSequence.forEach(({ time, viseme }) => {
    setTimeout(() => {
      input.value = viseme;
    }, time);
  });
});
