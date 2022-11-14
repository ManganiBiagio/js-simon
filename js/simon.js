const btnStartGame=document.querySelector(".start-game");
const btnResultGame=document.querySelector(".result-game");




btnStartGame.addEventListener("click",function(){
    const numOutEl=document.querySelector(".numeri-out");
    const listNum=random5Number();
    listNum.forEach(i=>numOutEl.append(i+" "));
    setTimeout(clearList,2000); 
    console.log(listNum);

})

function clearList(){
    const numOutEl=document.querySelector(".numeri-out");
    numOutEl.innerHTML="";

}


btnResultGame.addEventListener("click",function(){
    
})

//********************************************************************* */
//******************GENERAZIONE DINAMICA DEGLI INPUT  */    
const inputGroupEl=document.querySelector(".my-input-group");
for(let i=0;i<5;i++){
    const inputEl=document.createElement("input");
    inputEl.type="text";
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