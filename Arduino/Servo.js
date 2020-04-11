var j = require("johnny-five");
//Board funcion que trae la conexión con el arduino
var circuito = new j.Board({ port: 'COM7' });
var bombillo;
var motorcito;
var motion;

circuito.on("ready", prender);

function prender() {
  motion = new j.Motion('2');

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function () {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function () {
    console.log(Date.now() + ": motionstart");
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function () {
    console.log(Date.now() +": motionend");
  });

  bombillo = new j.Led(13);
  bombillo.on();

  motorcito = new j.Servo(9);
  motorcito.to(0);

  setInterval(() => {
    motorcito.to(90);
  }, 1500);
}

