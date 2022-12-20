let body =  document.querySelector('#body');
let hexbtn = document.querySelector('.hex-colr');
let hex =  document.querySelector('.change-colr');
let clear =  document.querySelector('.btn-clear');
let defaultColor = '';
let btnval = '';
function colorChange(newfn){
  
   hex.addEventListener('click', colorValue);
   function colorValue(){
   
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
       body.style.backgroundColor = color;
       console.log(color);
       defaultColor = color;
   }

   clear.addEventListener('click', function(){
        defaultColor = '#fff'  
        hex.disabled = true;   
       body.style.backgroundColor = defaultColor;
       console.log( body.style.backgroundColor)
   })
}
function hexbtnfn(){
        hex.disabled = false;
   
}

colorChange();

let names = "Gurpreet";

let newarr = names.split('')

let revarr = newarr.reverse();

console.log(revarr)
let blank = '';
revarr.map(newarr =>{
   blank += newarr;
  
})




class Insert{
constructor(){
}

myfunction(){
let data = [5,20,4,30,40,50];
let newEl = 70;
let position= 2;

for(let i = data.length-1; i > 0; i--){
   if(i >= position){
      data[i+1] = data[i];
     if(i===position){
      data[i]=newEl;
     }
   }
}
//console.log(data);
}
}
let newarrs = new Insert();
console.log(newarrs.myfunction());

let datas = [50,20,4,30,40,50];

for(i=0; i< datas.length; i++){
   if(datas[i] > datas[i+1]){
      let temp = datas[i];
      datas[i] = datas[i+1];
      datas[i+1] = temp;
   }
}
// console.log(datas);





function buyApple(x){

   
   if(x > 0){
      
      console.log("f1 box", x, "and apple", apple);
      apple++
      f2(x-5);
   }
   else{
      "No Apple"
   }
   
}


// function f2(b){
//    f1(b-5)
// }

// let price = 100;
// let apple = 0;

// buyApple(price)



let newArr = []
let currentSize = newArr.length;
console.log(currentSize);

function push(){
   let val = document.getElementById('inputbox').value;
   if(currentSize >= 5){
      alert("Value is Add" + val)
}
newArr[currentSize] = val;
currentSize++
console.log("Value is Add" , val)
document.getElementById('inputbox').value = '';
}

function pop(){
   if(currentSize > 0){
   currentSize --;
   newArr.length = currentSize;
   }
}

function display(){
   for(let i = 0; i<=currentSize-1; i++){
      console.warn(`Stack value is ${newArr[i]} and number is ${[i]}`);
   }
}

// push(20);
// push(30);
// push(40);
// push(50);
// pop()
// pop()
// push(60);
// push(70);

console.warn(newArr);