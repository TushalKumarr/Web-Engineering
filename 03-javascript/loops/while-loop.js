function even(){

    document.write("Even Numbers from 1 to 100: <br>");

    var i = 1;
    while (i<=100){
        if(i % 2 == 0){
            document.write(i + " ")
        }

        i++;
    }
}


function odd(){
    
    document.write("odd Numbers from 1 to 100: <br>");
    var j = 1;

    while(j<=100){
        if (j % 2 !=0){
            document.write(j + " ")
        }
        j++;

    }
    
    
}
