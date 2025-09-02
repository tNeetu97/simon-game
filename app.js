let games=[];
let users=[];
let sco=0;
let started=false;
let level=0;
let h1=document.querySelector('h1');
let btm=document.querySelector('#btm');
let outer=document.querySelector('.outer');
let inner1=document.querySelector('.inner1');
let inner2=document.querySelector('.inner2');
let inner3=document.querySelector('.inner3');
let inner4=document.querySelector('.inner4');
let h4=document.querySelector('h4');
let h3=document.querySelector('h3');
let btn=document.querySelectorAll('#inner');
let start=document.querySelector("#start");
start.addEventListener("click",function(){
     games=[];
     users=[];
     
     h1.innerText='Simon Game';
     if(started==false){
          console.log("game started");
          started=true;
           blink();
     }
     else if(started==true){
          started=false;
          level=0;
           h3.innerText=`Level ${level}`;
           h1.innerText="you quit......";
     setTimeout(()=>{
          h1.innerText=" Simon Game";
     },2000);
     }
     
     
})
// quit.addEventListener('click',function(){
//      started==false;
//      h1.innerText="you quit......";
//      setTimeout(()=>{
//           h1.innerText=" Simon Game";
//      },2000);
// })
function blink(){
      
     level++;
     h3.innerText=`Level ${level}`;
     trace();
}
function trace(){
      ran=rand();
     switch(ran){
          case 0:
               btnflash();
               break;
          case 1:
                btnflash();
               break;
          case 2:
                btnflash();
               break;
          case 3:
                btnflash();
}}
function rand(){
     let ran=Math.floor(Math.random()*4);
     return ran;
}
function btnflash(){
     games.push(btn[ran].classList);
     btn[ran].classList.add('flash');
     setTimeout(function(){
          btn[ran].classList.remove('flash');
     },200);
}
document.addEventListener('click', function(event){
     let inId=event.target.classList;
     if(inId=='inner1' || inId=='inner2'|| inId=='inner3' || inId=='inner4'){
           users.push(inId);
     let inle=event.target;
     inle.classList.add('flash');
     setTimeout(function(){
          inle.classList.remove('flash');
     },200);
     }
}

)
btm.addEventListener('click',function(event){
      
     let check=[];
      for(let i=0;i<games.length;i++){
          for(let j=i;j<=i;j++){ 
               if(users[j]==games[i]){
                    check.push(true);
               }
               else{
                    check.push(false);
      
               }
          }
           

      }
      if(check.every((el)=>el==true)){
          outer.classList.add('correct');
          setTimeout(function(){
          outer.classList.remove('correct');
          },200);
          users=[];
          setTimeout(blink,1000);
          




      }
      else{
          outer.classList.add('wrong');
          setTimeout(function(){
          outer.classList.remove('wrong');
          },200);
          let scor=games.length-1;
          h1.innerText=`your score is ${games.length-1}`

          h3.innerText="Start again by playing any key";
          setTimeout(()=>{
                h1.innerText=" Simon Game";
          },2000);
          level=0;
          started=false;
          
          if(sco>=scor){
          h4.innerText=`higest score:${sco}`;
           
     }
     else{
          sco=scor;
          h4.innerText=`higest score:${scor}`;
          
     }
           
           

      }
     
})
 
      

 
 
 
 
 
 
 
