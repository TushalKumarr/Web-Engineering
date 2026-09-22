let number = 0;

function next() {
    number = number + 1;
    if (number > 10){
        document.getElementById("count").innerHTML = 10;

    }

    document.getElementById("count").innerHTML = number;
}

function previous() {
    number = number - 1;
    document.getElementById("count").innerHTML = number;
}

