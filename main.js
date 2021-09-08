diffrance=0
nosex=0
nosey=0
left_wristx=0
right_wristx=0
function setup(){
canvas=createCanvas(500,500)
canvas.position(650,100)
video=createCapture(VIDEO)

poseNet=ml5.poseNet(video,model_loaded)
poseNet.on('pose',got_poses)
}    
function draw(){
   background("#5a99f2")
   stroke("red")
square(nosex, nosey ,diffrance)
document.getElementById('square_size').innerHTML="The width and height of the square will be = "+diffrance+" px"
}
function model_loaded(){
    console.log("model loaded")
}
function got_poses(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        right_wristx=results[0].pose.rightWrist.x
        left_wristx=results[0].pose.leftWrist.x
        diffrance=floor(left_wristx-right_wristx)
    }
}