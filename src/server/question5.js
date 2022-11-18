



function tossAndMatchWinning(matches){
    let obj ={}
    for(let i of matches){
        if(i.toss_winner === i.winner){
            obj[i.toss_winner]++
        }
        else{
            obj[i.toss_winner]= 1
        }
    }
    return obj
}
module.exports = {tossAndMatchWinning}