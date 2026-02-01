let userScore=0;
let comScore=0;

let choies=document.querySelectorAll(".img");
let usc=document.querySelector("#usc");
let coc=document.querySelector("#coc");
let msg=document.querySelector("#msg");
let upara =document.querySelector("#upara");
let cpara =document.querySelector("#cpara");


choies.forEach(chois => {
   chois.addEventListener("click",()=>{
    let chid=chois.getAttribute("id");
    // console.log("click");
    console.log(chid);
     
    let costr=comch();
    playgame(chid,costr);
   })
    

});
const comch=()=>{
    arr=["rock","paper","scissors"];
    let comRc=Math.floor(Math.random()*3);
     console.log(arr[comRc]);
     let Fchos=arr[comRc];
     return Fchos;
    }  
const playgame=(chid,constr)=>{
    if(chid===constr){
        draw(chid,constr);
    }
    else{
        let uswin=true;
        if(chid==="rock"){   //paper // scissor  for com choies
            uswin=constr==="paper"?false:true;   // first is true is execure //first block like if else
                                                   
              
        }
        else if(chid==="paper"){  // scissor rock for comchoies
                uswin=constr==="scissors"?false:true;
        }
        else{   // uschoies =scissors ==> so comchoies = like rock  paper 
            uswin= constr==="rock"?false:true;

        }
        showiner(chid,constr,uswin);
    }
}
const showiner=(chid,constr,userWin)=>{

     if(userWin){
        userScore++;
        upara.innerText=userScore;
        msg.innerText="you win";
        msg.style.color="green";
        console.log("win ");
     }
     
     else{
        comScore++;
        cpara.innerText=comScore;
        console.log("lose");
        msg.innerText="lose";
        msg.style.color="red";
     }
    chLook(chid,constr);
}
const chLook=(chid,constr)=>{
    usc.innerHTML=chid;
    coc.innerText=constr;
    


}




const draw=(chid,constr)=>{
    console.log("\n\ndraw\n\n");
    msg.innerHTML="draw";
    msg.style.color="powderBlue"

    usc.innerHTML=chid;
    coc.innerText=constr;
    
}