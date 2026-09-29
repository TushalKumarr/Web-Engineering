function abc(res){
    console.log("The output is: " + res);

}

function xyz(a, b, callback){
    sum = a + b;
    callback(sum);
}

setInterval(() => {
    console.log("IBA");

}, 2000);

console.log("IBA KK");

