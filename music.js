const tm = window.TinyMusic || require("./TinyMusic.min.js");
// create a new Web Audio API context
var ac = new AudioContext();

// set the playback tempo (120 beats per minute)
var tempo = 120;

// create a new sequence
var bass = new tm.Sequence(ac, tempo, [
  "- w",
  "- w",
  "- w",
  "- w",

  // start in next antra
  "B1 h",
  "B2 e",
  "B2 e",
  "- h",
  "B1 h",
  "B0 s",
  "B0 s",
  "- h",
  "A1 h",
  "A2 s",
  "A2 s",
  "- h",
  "F#0 e",
  "F#0 e",
  "F#1 e",
  "F#1 e",

  // repeat
  "B1 h",
  "B2 e",
  "B2 e",
  "- h",
  "B1 h",
  "B0 s",
  "B0 s",
  "- h",
  "A1 h",
  "A2 s",
  "A2 s",
  "- h",
  "F#0 e",
  "F#0 e",
  "F#1 e",
  "F#1 e",

  // repeat
  "B1 h",
  "B2 e",
  "B2 e",
  "- h",
  "B1 h",
  "B0 s",
  "B0 s",
  "- h",
  "A1 h",
  "A2 s",
  "A2 s",
  "- h",
  "F#0 e",
  "F#0 e",
  "F#1 e",
  "F#1 e"

  // "B1 e",
  // "B0 s",
  // "B0 s",
  // "B2 e",
  // "- h",
  // "- e",
  // "B1 e",
  // "- e",
  // "B1 e",
  // "- h",
  // "- e",
  // "A1 e",
  // "A0 s",
  // "A0 s",
  // "A2 e",
  // "- h",
  // "- e",
  // "F#1 e",
  // "- e",
  // "F#1 e",
  // "- h",
  // "- e"
]);

bass.staccato = 0.05;
bass.smoothing = 0.4;
bass.gain.gain.value = 0.3;
bass.mid.gain.value = 3;
bass.bass.gain.value = 8;
bass.bass.frequency.value = 80;
bass.mid.gain.value = -6;
bass.mid.frequency.value = 500;
bass.treble.gain.value = -2;
bass.treble.frequency.value = 1400;
// disable looping
bass.loop = false;

const lead = new tm.Sequence(ac, tempo, [
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "C#4 e",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "C#4 e",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "F#3 e",
  "F#3 s",
  "F#3 s",
  "F#3 e",
  "F#3 s",
  "F#3 s",
  "G3 e",
  "G3 s",
  "G3 s",
  "G3 e",
  "G3 s",
  "G3 s",

  //repeat
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "B3 s",
  "B3 s",
  "B3 e",
  "C#4 e",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "C#4 e",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "A3 e",
  "A3 s",
  "A3 s",
  "F#3 e",
  "F#3 s",
  "F#3 s",
  "F#3 e",
  "F#3 s",
  "F#3 s",
  "G3 e",
  "G3 s",
  "G3 s",
  "G3 e",
  "G3 s",
  "G3 s",

  // melody
  "B3 e",
  "B3 e",
  "F#4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "E4 e",
  "C#4 e",
  "A3 e",
  // break
  "B3 e",
  "B3 e",
  "F#4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "E4 e",
  "C#4 e",
  "A3 e",
  // break
  "A3 e",
  "A3 e",
  "E4 e",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "D4 e",
  "C#4 e",
  "A3 e",
  // break
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "D4 e",
  "C#4 e",
  "A3 e",
  "A3 e",
  // break

  // melody
  "B3 e",
  "B3 e",
  "F#4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "E4 e",
  "C#4 e",
  "A3 e",
  // break
  "B3 e",
  "B3 e",
  "F#4 e",
  "D4 s",
  "D4 s",
  "D4 e",
  "E4 e",
  "C#4 e",
  "A3 e",
  // break
  "A3 e",
  "A3 e",
  "E4 e",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "D4 e",
  "C#4 e",
  "A3 e",
  // break
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "C#4 s",
  "C#4 s",
  "C#4 s",
  "C#4 e",
  "D4 e",
  "C#4 e",
  "A3 e",
  "A3 e"
  // break
]);
lead.staccato = 0.4;
lead.gain.gain.value = 0.7;
lead.mid.frequency.value = 800;
lead.mid.gain.value = 3;

lead.loop = true;
bass.loop = true;
lead.waveType = "triangle";

// play it
bass.play();
lead.play();
