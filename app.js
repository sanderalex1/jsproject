/*TODO:

- Load in each sound.
- Loop over each sound, to add a button
- Click a button, to make a sound
- Click the keyboard, to play a sounds.
*/
const soundMap = {
  q: "work_it",
  w: "make_it",
  e: "do_it",
  r: "make us",
  t: "harder",
  y: "better",
  u: "faster",
  i: "stronger",
  o: "more_than",
  p: "hour",
  a: "our",
  s: "never",
  d: "ever",
  f: "fortnite",
  g: "work_is",
  h: "over",
};

const soundContainer = document.getElementById("sounds-container");

for (let key in soundMap) {
  const soundElement = document.createElement("div");

  const textElement = document.createElement("p");
  textElement.textContent = `${key}: ${soundMap[key]}`;
  soundElement.append(textElement);

  soundElement.addEventListener("click", () => {
    playSound(soundMap[key]);
  });

  soundContainer.append(soundElement);
}

const playSound = (sound) => {
  const audio = new Audio(`./sounds/${sound}.wav`);
  audio.play();
};

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const sound = soundMap[key];
  if (sound) {
    playSound(sound);
  }
});
