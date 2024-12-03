

 
const decreaseBtn=document.getElementById("decreaseBtn");

const resetBtn=document.getElementById("resetBtn");

const increaseBtn=document.getElementById("increaseBtn");

 let count =0 ;
 
increaseBtn.onclick=function(){

 myCounter.textContent= count;

count++;

} 

resetBtn.onclick =function(){

    myCounter.textContent= count

    count = count * 0
};

decreaseBtn.onclick=function(){

    myCounter.textContent= count;

    count--
}
   



    





