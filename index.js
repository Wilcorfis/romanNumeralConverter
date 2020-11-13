function convertToRoman(num) {
    let numRom = "";
    while (num > 0) {
        if (num < 4) {
            decrement("I",1);
        }else if(num===4){
            decrement("IV",4);
        }else if(num>=5 && num<9){
            decrement("V",5);
        }else if(num===9){
            decrement("IX",9);          
        }else if(num>=10 && num<40){
            decrement("X",10);
        }else if(num>=40 && num<50){
            decrement("XL",40);
        }else if(num>=50 && num<90){
            decrement("L",50);
        }else if(num>=90 && num<100){
            decrement("XC",90);
        }else if(num>=100 && num<400){
            decrement("C",100);
        }else if(num>=400 && num<500){
            decrement("CD",400);
        }else if(num>=500 && num<900){
            decrement("D",500);
            
        }else if(num>=900 && num<1000){
            decrement("CM",900);
            
        }else{
            decrement("M",1000);
        }
    }
    function decrement(letter, acum) {
        numRom += letter;
        num -= acum;
    }
    return numRom;
}
var element= convertToRoman(549);
alert(element);
