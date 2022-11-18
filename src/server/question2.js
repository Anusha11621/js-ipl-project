
function matchesWonPerTeamPerYear(matches){
    let result = {}
    for (let index =0; index< matches.length; index++){
        if(!result[matches[index].winner]){
            result[matches[index].winner] = {}
        }
        if (result[matches[index].winner][matches[index].season]){
            result[matches[index].winner][matches[index].season]++

        }
        else {
            result[matches[index].winner][matches[index].season] = 1

        }
    }
    return result
}

module.exports = {matchesWonPerTeamPerYear}

