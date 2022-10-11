var num = Math.random()*45 +1;
//0이상 1미만의 실수형 자료형

var ball1 = parseInt(num);
// document.writeln(ball1);

var ex = [1,2,3,4,5,6];
ex.push(7);
// document.writeln(ex);

var lotto = [];
for(i=0;i<6;i++){
    var num = parseInt(Math.random()*45+1);
    if(lotto.indexOf(num) == -1){
        lotto.push(num);
    }
    
}

var lotto2= [];
while(lotto2.length<6){
    var num = parseInt(Math.random()*45+1);
    if(lotto2.indexOf(num) == -1){
        lotto2.push(num);
    }
}


document.writeln(lotto);
document.write(lotto2);




