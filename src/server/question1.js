let matches = require("../public/output/matches.json");
let deliveires = require("../public/output/deliveries.json");

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

function matchesPerYear(matches){
    let result = matches.reduce((acc,item) => {
        if(acc[item.season]){
           acc[item.season]++
        }else{
            acc[item.season]=1
        }
        return acc
    },{})
    return result
}
console.log(matchesPerYear(matches))
//module.exports = {matchesPerYear}

