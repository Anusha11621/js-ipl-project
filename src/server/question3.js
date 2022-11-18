
function extraruns(matches,deliveires){
    let ids  = []
    for (let match of matches){
        if(match.season === '2016'){
            ids.push(match.id)
        }
    }
    let result = {}

    for (let elements of deliveires){
        if(ids.includes(elements.match_id)){
            if(!result[elements.bowling_team]){
                result[elements.bowling_team] = elements.extra_runs*1
            }else{
                result[elements.bowling_team] += elements.extra_runs*1
            }
        }
    }
    return result

}

module.exports = {extraruns}