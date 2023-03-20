let timer = setInterval(textAnimation, 100);
let num = 0;
let str = 'movie'
/*
function textAnimation(){ 
    document.getElementById('h1').innerHTML = str.substring(0, num);
    num++;

    if(num > str.length){
        clearInterval(timer);
        //alert('timerout');
    } 
}*/

function textAnimation(){ 
    document.querySelector('a').innerHTML = str.substring(0, num);
    num++;

    //if(num >= str.length)
    if(!(num <= str.length)) {
        clearInterval(timer);
        /*timer = setInterval(lastTextAnimation, 100);*/
        num = 0;
    }//글씨 쓰는 코드


}
/*function lastTextAnimation(){ 
    if(num>=0){
        document.querySelector('.logo').innerHTML = str.substring(num, str.length);
        num++;
    }
}*/

//햄버거버튼 
const ham = document.querySelector('.ham-btn');
ham.addEventListener('click', showNavi)

function showNavi() {
    document.querySelector('.ham-navigation').classList.toggle('active');
}
