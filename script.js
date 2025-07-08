document.getElementById("setVisemeBtn").addEventListener("click", () => {
  const riveInstance = new rive.Rive({
    src: "gum_boy.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
    artboard: "main_artboard",
    stateMachines: "MouthSync",
    autoBind: true,
    onLoad: () => {
      const vmi = riveInstance.viewModelInstance;
      const visemeProp = vmi.number("viseme_value");

      if (!visemeProp) {
        console.error("Unable to get viseme_value property!");
        return;
      }

      const visemeSequence = [1, 3, 6, 2, 5, 8, 0, 4, 7, 0];
      const visemeDuration = 200; // each viseme lasts 200ms
      let index = 0;

      const interval = setInterval(() => {
        visemeProp.value = visemeSequence[index];
        index++;
        if (index >= visemeSequence.length) {
          clearInterval(interval);
          console.log("Viseme sequence completed.");
        }
      }, visemeDuration);
    }
  });
});
