
function matchesWonPerTeamPerYear(matches){
    
    // for (let index =0; index< matches.length; index++){
    //     if(!result[matches[index].winner]){
    //         result[matches[index].winner] = {}
    //     }
    //     if (result[matches[index].winner][matches[index].season]){
    //         result[matches[index].winner][matches[index].season]++

    //     }
    //     else {
    //         result[matches[index].winner][matches[index].season] = 1

    //     }
    // }
    // return result
    return matches.reduce((result,match)=>{
        let winner = match.winner
        let season = match.season
        if(!result[season]){
            result[season ] ={}
        }
        if(result[season][winner]){
            result[season][winner]++   
        }else{
            result[season][winner] = 1
        }
        return result
    },{})
    
}

module.exports = {matchesWonPerTeamPerYear}

