function tossAndMatchWinning(matches){
    
   return matches.reduce((result,elements)=>{
    (elements.toss_winner === elements.winner)?result[elements.toss_winner]++:result[elements.toss_winner]=1
   return result
   },{})      
}
module.exports = {tossAndMatchWinning}







// let obj ={}
    // for(let i of matches){
    //     if(i.toss_winner === i.winner){
    //         obj[i.toss_winner]++
    //     }
    //     else{
    //         obj[i.toss_winner]= 1
    //     }
    // }
    // return obj