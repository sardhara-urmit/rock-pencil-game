aalert(
"1. you play this game with computer\n" +
"2. computer chooses randomly\n" +
"3. display user choice and computer choice\n" +
"4. display win, lose or draw\n" +
"5. enjoy the game"
);

let userScore=0;
let comScore=0;

let choises=document.querySelectorAll(".img");
let msg =document.querySelector("#msg");
let usc =document.querySelector("#usc");
let coc=document.querySelector("#coc");
let upara=document.querySelector("#upara");
let cpara=document.querySelector("#cpara");


let choss=(usChoies,comchoies)=>{
   usc.innerText=`*${usChoies}*`;
   coc.innerText=`*${comchoies}*`;

}

const comch=()=>{
   const opt=["rock","paper","scissors"];
  let Ranidx= Math.floor(Math.random()*3);
  return opt[Ranidx];

};


const draw=(usChoies,comChoies)=>{
   usc.innerText=`${usChoies}`;
    coc.innerText=`${comChoies}`;
   console.log("draw\n\n");
   msg.innerText=" match is draw";

}

let shwiner=(userWin,comchoies,usChoies)=>{
   if(userWin){
      userScore++;
      upara.innerText=userScore;
      msg.innerText=`🎉winer🎉`;
      
   }
   else{
       comScore++;
       cpara.innerText=comScore;
       msg.innerText=`❌lose❌`;
   }

}

const playgame =(usChoies) =>{
   console.log("user chois=",usChoies);
   let comchoies=comch();
   console.log("com choies=",comchoies);
   if(usChoies===comchoies){        //darw fun
      draw(usChoies,comchoies);
      return;
   }
   else{
      let userWin=true;
      if(usChoies==="rock"){
         // sissors // paper
         userWin=comchoies==="paper"? false :true;

      }
      else if(usChoies==="paper"){
         //sissor //rock
         userWin=comchoies==="scissors"? false: true;
      }
      else{
         //user ===scissors 
         //rock //paper
         userWin=comchoies==="rock"? false:true;
      }
         shwiner(userWin,comchoies,usChoies);
         choss(usChoies,comchoies);

   }
  
}




choises.forEach(choies => {
   // console.log(choies);

   choies.addEventListener("click",()=>{
   let chId=choies.getAttribute("id");
   //  console.log("clickd",chId);
    playgame(chId);
   });
    
});




// this is the sound for game ------------------------------------------ 

let bgm = document.querySelector("#bgm");
let musicStarted = false;

document.body.addEventListener("click", () => {
   if (!musicStarted) {
      bgm.volume = 0.4;
      bgm.play().catch(err => {
         console.log("Music play blocked:", err);
      });
      musicStarted = true;
   }
});
