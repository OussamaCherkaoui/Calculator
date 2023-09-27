const container = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

//add items
const item1=document.createElement('div');
item1.classList.add('item1');
const item2=document.createElement('div');
item2.classList.add('item2');
const item3=document.createElement('div');
item3.classList.add('item3');
const item4=document.createElement('div');
item4.classList.add('item4');
const item5=document.createElement('div');
item5.classList.add('item5');
const item6=document.createElement('div');
item6.classList.add('item6');
const item7=document.createElement('div');
item7.classList.add('item7');

//add input and button 
const input1=document.createElement('input')
input1.type="text";
input1.readOnly=true;
input1.value=0;

const buttonclear=document.createElement('button');
buttonclear.id="buttonclear";
buttonclear.textContent="AC";
const buttonaddsub=document.createElement('button');
buttonaddsub.id="buttonaddsub";
buttonaddsub.textContent="+/-";
const buttonmodulo=document.createElement('button');
buttonmodulo.id="buttonmodulo";
buttonmodulo.textContent="%";
const buttondivision=document.createElement('button');
buttondivision.id="buttondivision";
buttondivision.textContent="/";
const buttonmultiple=document.createElement('button');
buttonmultiple.id="buttonmultiple";
buttonmultiple.textContent="x";
const buttonsubstract=document.createElement('button');
buttonsubstract.id="buttonsubstract";
buttonsubstract.textContent="-";
const buttonadd=document.createElement('button');
buttonadd.id="buttonadd";
buttonadd.textContent="+";
const buttonegal=document.createElement('button');
buttonegal.id="buttonegal";
buttonegal.textContent="=";
const buttonvergul=document.createElement('button');
buttonvergul.id="buttonvergul";
buttonvergul.textContent=",";
const button0=document.createElement('button');
button0.id="button0";
button0.textContent="0";
const button1=document.createElement('button');
button1.id="button1";
button1.textContent="1";
const button2=document.createElement('button');
button2.id="button2";
button2.textContent="2";
const button3=document.createElement('button');
button3.id="button3";
button3.textContent="3";
const button4=document.createElement('button');
button4.id="button4";
button4.textContent="4";
const button5=document.createElement('button');
button5.id="button5";
button5.textContent="5";
const button6=document.createElement('button');
button6.id="button6";
button6.textContent="6";
const button7=document.createElement('button');
button7.id="button7";
button7.textContent="7";
const button8=document.createElement('button');
button8.id="button8";
button8.textContent="8";
const button9=document.createElement('button');
button9.id="button9";
button9.textContent="9";




content.appendChild(item1);
content.appendChild(item2);
content.appendChild(item3);
content.appendChild(item4);
content.appendChild(item5);
content.appendChild(item6);
content.appendChild(item7);

item2.appendChild(input1);
item3.appendChild(buttonclear);
item3.appendChild(buttonaddsub);
item3.appendChild(buttonmodulo);
item3.appendChild(buttondivision);

item4.appendChild(button7);
item4.appendChild(button8);
item4.appendChild(button9);
item4.appendChild(buttonmultiple);

item5.appendChild(button4);
item5.appendChild(button5);
item5.appendChild(button6);
item5.appendChild(buttonsubstract);

item6.appendChild(button1);
item6.appendChild(button2);
item6.appendChild(button3);
item6.appendChild(buttonadd);

item7.appendChild(button0);
item7.appendChild(buttonvergul);
item7.appendChild(buttonegal);

let operationappliquer = false;
let operateur = null;
let number1=0;
let number2=0;
buttondivision.addEventListener('click',()=>{
    const result = input1.value;
    buttondivision.style.cssText="background-color:white; color:orange";
    buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    operateur="/";
    resultatfinal=false;
    moduloappliquer=false;
    if(result!=0)
    {
        number1=parseFloat(input1.value);
        operationappliquer = true;
    }
});
buttonadd.addEventListener('click',()=>{
    const result = input1.value;
    buttonadd.style.cssText="background-color:white; color:orange";
    buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    operateur="+";
    resultatfinal=false;
    moduloappliquer=false;
    if(result!=0)
    {
        number1=parseFloat(input1.value);
        operationappliquer = true;
    }
});
buttonsubstract.addEventListener('click',()=>{
    const result = input1.value;
    buttonsubstract.style.cssText="background-color:white; color:orange";
    buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    operateur="-";
    moduloappliquer=false;
    resultatfinal=false;
    if(result!==0)
    {
        number1=parseFloat(input1.value);
        operationappliquer = true;
    }
});
buttonmultiple.addEventListener('click',()=>{
    const result = input1.value;
    buttonmultiple.style.cssText="background-color:white; color:orange";
    buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    operateur="*";
    resultatfinal=false;
    moduloappliquer=false;
    if(result!==0)
    {
        number1=parseFloat(input1.value);
        operationappliquer = true;
    }
});

button0.addEventListener('click',()=>{
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "0";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
   {
    input1.value= "0";
    moduloappliquer=false;
    resultatfinal=false;
}
   else if(result=="0")
   {
    return;
   }
    else{
        input1.value= result+"0";
    }
}
});

button1.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "1";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "1";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-1";
    }
    else if(result=="0")
    {
        input1.value= "1";
    }
    else input1.value= result+"1";
}
});

button2.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "2";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "2";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-2";
    }
    else if(result=="0")
    {
        input1.value= "2";
    }
    else input1.value= result+"2";
}
});

button3.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "3";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "3";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-3";
    }
    else if(result=="0")
    {
        input1.value= "3";
    }
    else input1.value= result+"3";
}
});

button4.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "4";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "4";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-4";
    }
    else if(result=="0")
    {
        input1.value= "4";
    }
    else input1.value= result+"4";
}
});

button5.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "5";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "5";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-5";
    }
    else if(result=="0")
    {
        input1.value= "5";
    }
    else input1.value= result+"5";
}
});

button6.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "6";
        operationappliquer=false;
    }
    else{
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "6";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-6";
    }
    else if(result=="0")
    {
        input1.value= "6";
    }
    else input1.value= result+"6";
}
});

button7.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "7";
        operationappliquer=false;
    }
    else{ 
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "7";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-7";
    }
    else if(result=="0")
    {
        input1.value= "7";
    }
    else input1.value= result+"7";
}
});

button8.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "8";
        operationappliquer=false;
    }
    else{ 
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "8";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-8";
    }
    else if(result=="0")
    {
        input1.value= "8";
    }
    else input1.value= result+"8";
}
});

button9.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(operationappliquer==true)
    {
        buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
        input1.value= "9";
        operationappliquer=false;
        
    }
    else{ 
    if(moduloappliquer==true||resultatfinal==true)
    {
     input1.value= "9";
     moduloappliquer=false;
     resultatfinal=false;
 }
    else if(result=="-0")
    {
        input1.value= "-9";
    }
    else if(result=="0")
    {
        input1.value= "9";
    }
    else input1.value= result+"9";
}
});

buttonclear.addEventListener('click',()=>{
    input1.value= 0;
    buttonclear.textContent="AC";
    buttondivision.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonsubstract.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonmultiple.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    buttonadd.style.cssText="background-color:ancienBackgroundColor; color:ancienneColor";
    moduloappliquer = false;
    operationappliquer=false;
    number1=0;
    number2=0;
    operateur=null;
});

buttonvergul.addEventListener('click',()=>{
    buttonclear.textContent="C";
    const result = input1.value;
    if(moduloappliquer==true)
    {
     input1.value= "0.";
     moduloappliquer=false;
 }
    else if(result.includes('.'))
    {
        return;
    }
    else input1.value= result+".";
});

buttonaddsub.addEventListener('click',()=>{
    const result = input1.value;
    if(result.includes('-'))
    {
        input1.value= result.replace(/-/g, '');
        return;
    }
    input1.value= "-"+result;
});
let moduloappliquer = false;
buttonmodulo.addEventListener('click',()=>{
    const result = input1.value;
    if(result!=="0")
    {
        moduloappliquer=true;
        input1.value= result*0.01;
    }
});

function division(number1,number2)
{
    if(number2=="0")
    {
        input1.value="ERREUR";
        return;
    }
    else{
        input1.value=number1/number2;
    }
}
function sum(number1,number2)
{
        input1.value= number1+number2;
}

function substract(number1,number2)
{
        input1.value=number1-number2;
}

function Multiply(number1,number2)
{
        input1.value=number1*number2;
}
let resultatfinal =false;
buttonegal.addEventListener('click',()=>{
    if(operateur=="/"&&number1!="0")
    {
        const number2=parseFloat(input1.value);
        division(number1,number2);
        resultatfinal=true;
    }
    else if(operateur=="+"&&number1!="0")
    {
        const number2=parseFloat(input1.value);
        sum(number1,number2);
        resultatfinal=true;
    }
    else if(operateur=="-"&&number1!="0")
    {
        const number2=parseFloat(input1.value);
        substract(number1,number2);
        resultatfinal=true;
    }
    else if(operateur=="*"&&number1!="0")
    {
        const number2=parseFloat(input1.value);
        Multiply(number1,number2);
        resultatfinal=true;
    }
});



