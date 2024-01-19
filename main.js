prediction_1="";

Webcam.set({
    height:350,
    width:350,
    image_format:'jpeg',
    jpeg_quality:100
})
Webcam.attach('#div_camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("div_snapshot").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});    
}

console.log("ml5 version:",ml5.version);