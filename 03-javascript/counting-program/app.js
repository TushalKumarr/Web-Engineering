let number = 0;

function next() {
    number++;
    document.getElementById("count").innerHTML = number;
}

function previous() {
    number--;
    document.getElementById("count").innerHTML = number;
}

