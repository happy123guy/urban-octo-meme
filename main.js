difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 120)

    canvas = createCanvas(500, 500);
    canvas.position(800, 125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left wrist - " + left_wrist_x + " right wrist - " + right_wrist_x + " differnce - " + difference);
    }
}

function draw(){
    background("#8c8eab");
    document.getElementById("font_size").innerHTML = difference;
    textSize(difference);
    fill("#e2f263");
    text('Charvik' , 50, 400);
}