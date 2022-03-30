// var button1=document.getElementById('button1');
// var button2=document.getElementById('button2');
// var button3=document.getElementById('button3');
// var button4=document.getElementById('button4');
// var button5=document.getElementById('button5');
// var button6=document.getElementById('button6');
// var button7=document.getElementById('button7');
// var button8=document.getElementById('button8');
// var button9=document.getElementById('button9');
// var button0=document.getElementById('button0');
// var addbutton=document.getElementById('addbutton');
// var subtractbutton=document.getElementById('subtrackbutton');
// var multiplybutton=document.getElementById('multiplybutton');
// var dividebutton=document.getElementById('dividebutton');

var equalbutton=document.getElementById('equalbutton');
var clearbutton=document.getElementById('clearbutton');
var display=document.getElementsByClassName('display')[0];
var numberbutton=document.querySelectorAll('.numbutton');
var operatorbutton=document.querySelectorAll('.operatorbutton')
var displaystring="";

numberbutton.forEach(function(numbutton){
    numbutton.addEventListener('click',function(){
        displaystring+=numbutton.innerHTML;
        display.innerHTML=displaystring;
    })
})

operatorbutton.forEach(function(operbutton){
    operbutton.addEventListener('click',function(){
        displaystring+=operbutton.innerHTML;
        display.innerHTML=displaystring;
    })
})


clearbutton.addEventListener('click',function(){
    console.log('clear button is clicked');
    display.innerHTML="";
    displaystring="";
})

equalbutton.addEventListener('click',function(){
    // console.log('equal button is clicked');
    display.innerHTML=displaystring;
    // console.log(displaystring);
    // var convertString=displaylist.toString();
    // console.log(convertString)
    // console.log(displaylist)
    // if(displaylist.includes('+')){
    //     console.log("It has plus operator");
    //     var index=displaylist.indexOf();
        
    // }
    if(displaystring.includes('+')){
        console.log("It has plus operator");
        var index=displaystring.indexOf('+');
        numberone=displaystring.slice(0,index);
        numbertwo=displaystring.slice(index+1,displaystring.length);
        var addresult=add(numberone,numbertwo);
        display.innerHTML=addresult;
        displaystring=addresult;
    }
    else if(displaystring.includes('-')){
        console.log("It has minus operator");
        var index=displaystring.indexOf('-');
        numberone=displaystring.slice(0,index);
        numbertwo=displaystring.slice(index+1,displaystring.length);
        var subtractresult=subtract(numberone,numbertwo);
        display.innerHTML=subtractresult;
        displaystring=subtractresult;
    }
    else if(displaystring.includes('*')){
        console.log("It has multiply operator");
        var index=displaystring.indexOf('*');
        numberone=displaystring.slice(0,index);
        numbertwo=displaystring.slice(index+1,displaystring.length);
        var multiplyresult=multiply(numberone,numbertwo);
        display.innerHTML=multiplyresult;
        displaystring=multiplyresult;
    }
    else if(displaystring.includes('/')){
        console.log("It has divide operator");
        var index=displaystring.indexOf('/');
        numberone=displaystring.slice(0,index);
        numbertwo=displaystring.slice(index+1,displaystring.length);
        var divideresult=division(numberone,numbertwo);
        display.innerHTML=divideresult;
        displaystring=divideresult;
    }
})

function add(n1,n2){
    num1=Number(n1);
    num2=Number(n2);
    return num1+num2;
}
function subtract(n1,n2){
    num1=Number(n1);
    num2=Number(n2);
    return num1-num2;
}
function multiply(n1,n2){
    num1=Number(n1);
    num2=Number(n2);
    return num1*num2;
}
function division(n1,n2){
    num1=Number(n1);
    num2=Number(n2);
    return num1/num2;
}
