let p = new Promise((resolve,reject)=> {
    let k = 2 + 1;

    if (k == 2){
        resolve("Sucess");
               }
    else{
        reject("Failed");
        }

});



p.then((message) => {
    console.log("Yes Bro.." + message);

})

.catch( (message) => {
    console.log("No Bro.." + message);
})