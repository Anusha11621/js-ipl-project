
function matchesPerYear(matches){
    return matches.reduce((result,item) => { result[item.season]?result[item.season]++:result[item.season]=1
        return result
    },{})
}

module.exports = {matchesPerYear}









// function matchesPerYear(matches){
//     let result = {}
//     for (let item of matches){
//          if(result[item.season]){
//              result[item.season]++
//          }else{
//             result[item.season]=1
//          }
//     }
//     return result
// }

//console.log(matchesPerYear(matches))