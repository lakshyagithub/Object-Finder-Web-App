Status = "";
input_text = "";
objects = [];

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();
}

function start() {
  detector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerText="Status: Detecting Objects";
  input_text = document.getElementById('input').value;
}

function modelLoaded() {
  console.log("model loaded");
  Status = true;
}

function draw() {
  image(video, 0, 0, 400, 400);
  if (Status != "") {
    for (let index = 0; index < objects.length; index++) {
      
    }
  }
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  objects = results;
}