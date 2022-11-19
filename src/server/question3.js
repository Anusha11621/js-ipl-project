function extraruns(matches,deliveires){
    
    let ids = matches.filter(elements => elements.season === '2016').map(x=> x.id)
    //console.log(ids);
    return deliveires.reduce((team,extraruns)=>{
        if(ids.includes(extraruns.match_id)){
            (!team[extraruns.bowling_team]) ? team[extraruns.bowling_team] = extraruns.extra_runs*1 :team[extraruns.bowling_team] += extraruns.extra_runs*1
            
        }
        return team
    },{})

}

module.exports = {extraruns}





// for (let match of matches){
    //     if(match.season === '2016'){
    //         ids.push(match.id)
    //     }
    // }
// let result = {}

    // for (let elements of deliveires){
    //     if(ids.includes(elements.match_id)){
    //         if(!result[elements.bowling_team]){
    //             result[elements.bowling_team] = elements.extra_runs*1
    //         }else{
    //             result[elements.bowling_team] += elements.extra_runs*1
    //         }
    //     }
    // }
    //return result