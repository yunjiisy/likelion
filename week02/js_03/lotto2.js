var lottoex = [1,2,3,33,22,11];
lottoex.sort();
//sort => 사전 순으로 정렬 됨 (맨 앞자리 기준으로 정렬됨) 1,11,2,22,3,33
//document.writeln(lottoex);
//숫자의 크기 순으로 정렬 (오름차순)
lottoex.sort((a,b)=>a-b);
//document.writeln(lottoex);



var lotto = [];

while(lotto.length<6){
    var num = parseInt(Math.random()*45 +1);
    if(lotto.indexOf(num) == -1){
        lotto.push(num);
    }    
}
lotto.sort((a,b) => a-b);
document.writeln(lotto);
document.write("<div class='ball1'>" + lotto[0] + "<div>");
document.write("<div class='ball2'>" + lotto[1] + "<div>");
document.write("<div class='ball3'>" + lotto[2] + "<div>");
document.write("<div class='ball4'>" + lotto[3] + "<div>");
document.write("<div class='ball5'>" + lotto[4] + "<div>");
document.write("<div class='ball6'>" + lotto[5] + "<div>");


// while(lotto.length<6) {
//     var num = parseInt(Math.random()*45 +1);
// }

