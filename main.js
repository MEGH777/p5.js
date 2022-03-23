function preload() {

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw() {

image(video,150,130,320,240);
tint(tint_color);

stroke(2,900,90);
circle(110,90,20);

fill(5,900,90);
line(110,90,520,90);

circle(520,90,20);
line(520,90,520,400,);

circle(520,400,20);
line(520,400,110,400);

circle(110,400,20);
line(110,400,110,90);


}
function take_snapshot() {
    save('megh.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
