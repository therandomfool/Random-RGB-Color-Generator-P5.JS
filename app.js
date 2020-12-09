let past=[255,255,255];
function setup() {
    createCanvas(windowWidth, windowHeight)
    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER);
    text('*#*# Click Anywhere To Change Background Color #*#*', width/2, height/2 -100);
}

function draw() {
    // background()
    

}



function mouseClicked() {
    let msg = [];
    let r = floor(random(255));
    msg.push(r + ' ');
    let g = floor(random(255));
    msg.push(g + ' ');
    let b = floor(random(255));
    msg.push(b + ' ');

    background(r, g, b);
    // document.getElementById("hex").innerHTML = '<b>R: </b>' + msg[0] + '<b>G: </b>' + msg[1] + '<b>B: </b>' + msg[2];
    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER);
    text('Click Anywhere To Change Background Color', width/2, height/2 -100);
    text(msg[0], width / 2 - 200, height / 2);
    text('Red', width / 2 - 200, height / 2 + 50);
    text(msg[1], width / 2, height / 2);
    text('Green', width / 2 , height / 2 + 50);
    text(msg[2], width / 2 + 200, height / 2);
    text('Blue', width / 2 + 200, height / 2 + 50);
    
    rect(35, 150, 250, 150,)
    strokeWeight(3)
    fill(past);
    textSize(30);
    textStyle(BOLD);
    textAlign(LEFT);
    text('Previous Color',54,280);

    textAlign(CENTER);
    text(past[0], 80, 240);
    text('Red', 80, 200);
    text(past[1], 160, 240);
    text('Green', 160, 200);
    text(past[2], 240, 240);
    text('Blue', 240, 200);
    
    past = msg;
    msg=[];
}