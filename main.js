console.log("ml5 version: ", ml5.version);

status1 = false;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();

  capture = createCapture(VIDEO);
  capture.size(400, 400);
  capture.hide();
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoded);
  document.getElementById('status').innerHTML="Status: Detecting Objects";
  object_name = document.getElementById('Object_name').value;
}

function modelLoded() {
  console.log('Model Loaded!');
  status1 = true;
}

function draw() {
  image(capture, 0, 0, 400, 400);
}