// var equalbutton=document.getElementById('equalbutton');
// var clearbutton=document.getElementById('clearbutton');
var display=document.getElementsByClassName('display')[0];
// var numberbutton=document.querySelectorAll('.numbutton');
// var operatorbutton=document.querySelectorAll('.operatorbutton');
var numberbutton=document.querySelectorAll('.numbutton');

class Calculate{
    constructor(num1,num2,operator){
        this.num1=num1;
        this.num2=num2;
        this.operator=operator;
    }
}

numberbutton.forEach(function(numbutton){
    numbutton.addEventListener('click',function(){
        num1=numbutton.innerHTML;
        display.innerHTML=num1;
    })
})

var calculate=new Calculate(3,4,'+');
console.log(calculate.num1," ",calculate.num2," ",calculate.operator)