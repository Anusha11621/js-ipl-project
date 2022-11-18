
function dismissed(matches,deliveires){
    let array = []
    for(let elements of deliveires){
        if(!(elements.player_dismissed === "")){
            array.push(elements)
        }
    }
    let bowlers = []
    array.map(items=>{
        bowlers.push(items.player_dismissed.concat(' by ',items.bowler))
    })
    
    let result = bowlers.reduce((acc,curr) =>{
            if (acc[curr]){
                acc[curr] += 1
            }
            else{
                acc[curr] = 1
            }
            return acc
        },{})
    let final ={}
    let index = 0
    let max = 0
    for(let keys in result){
        if(result[keys] > max){
            max  = result[keys]
            index = keys

        }

    }
    final[index] = max
    return final;
   
}
module.exports = {dismissed}