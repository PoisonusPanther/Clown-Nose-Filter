ClownX = 0;
ClownY = 0;
function preload(){
    clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose', gotPose);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clownNose, ClownX, ClownY, 50, 50);
}
function takeSnapshot(){
    save('myFilter.png');
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPose(result){
    console.log(result);
    if (result.length > 0){
        ClownX = result[0].pose.nose.x - 15;
        ClownY = result[0].pose.nose.y - 15;
    }
}
