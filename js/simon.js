const btnStartGame=document.querySelector(".start-game");
const btnResultGame=document.querySelector(".result-game");
const inputElList=[];
let listNum;



btnStartGame.addEventListener("click",function(){
    const resoultOutEl=document.querySelector(".resoult-output")
    const numOutEl=document.querySelector(".numeri-out");
    const inputGroupEl=document.querySelector(".my-input-group");
    inputGroupEl.classList.add("visually-hidden");
    btnResultGame.classList.add("visually-hidden");

    numOutEl.innerHTML="";
    resoultOutEl.innerHTML="";
    listNum=random5Number();
    listNum.forEach(i=>numOutEl.append(i+" "));
    
    setTimeout(clearList,3000); 
    console.log(listNum);
    

})

function clearList(){
    const numOutEl=document.querySelector(".numeri-out");
    numOutEl.innerHTML="";
    const inputGroupEl=document.querySelector(".my-input-group");
    inputGroupEl.classList.remove("visually-hidden");
    btnResultGame.classList.remove("visually-hidden");


}


btnResultGame.addEventListener("click",function(){
    const resoultOutEl=document.querySelector(".resoult-output")
    const numUser=[];
    let numIndovinatiList=[];
    let counterCorrect=0;
    inputElList.forEach(i=>numUser.push(+i.value))

    //inizio i controlli su i due array per verificare i dati utente
    numUser.forEach(i=>{
        if(listNum.includes(i)){
            counterCorrect++;
            numIndovinatiList.push(i);

        }
        

    })
    if(counterCorrect===0){
        resoultOutEl.innerHTML=`Non hai una buona memoria`;

    }
    else{
        
        resoultOutEl.innerHTML=`Hai ricordato ${counterCorrect} numeri e sono 
    ${numIndovinatiList.toString()}`
    }

    
    
    


})

//********************************************************************* */
//******************GENERAZIONE DINAMICA DEGLI INPUT  */    
const inputGroupEl=document.querySelector(".my-input-group");
for(let i=0;i<5;i++){
    const inputEl=document.createElement("input");
    inputEl.type="text";
    inputElList.push(inputEl);
    inputGroupEl.append(inputEl);

}



//********************************************************************* */
//******************CREAZIONE HARRAY DI NUMERI CASUALI TRA 1 E 100  */
/**
 * 
 */
function random5Number(){
    const outList=[];
    while(outList.length<5){
        const num=generatorNumRandom(1,100);
        if(!outList.includes(num)){
            outList.push(num);
        }
    }
    return outList;

}
/**
 * Genera un numero casuale tra min e max compresi
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
 function generatorNumRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//********************************************************************* */

