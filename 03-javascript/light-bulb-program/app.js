const bulb = document.getElementById('myLightBulb');
const c = document.getElementById('card');

let i = 0;

function switchOn() {
    bulb.src = "i2.png";
}

function switchOff() {
    bulb.src = "i1.jpg";
}

let colors = [
    "green",
    "blue",
    "red",
    "yellow",
    "brown",
    "gray",
    "black",
    "pink",
    "white",
    "purple"
]


function switchChange(){
    c.style.backgroundColor = colors[i];
    
    
    i++;

    if (i == 10){
        i = 0;
    }

}
