let matches = require("../public/output/matches.json");
//let deliveires = require("../public/output/deliveries.json");
function playerOfTheWatch(matches) {
  // let obj = {};
  // for (let i of matches) {
  //   if (obj[i.season]) {
  //     if (obj[i.season][i.player_of_match]) {
  //       obj[i.season][i.player_of_match]++;
  //     } else {
  //       obj[i.season][i.player_of_match] = 1;
  //     }
  //   } else {
  //     obj[i.season] = {};
  //     obj[i.season][i.player_of_match] = 1;
  //   }
  // }

  let object = matches.reduce((acc,cv)=>{
    let season = cv.season
    let player_of_match = cv.player_of_match
    
    
    if (acc[season]){
        acc[season][player_of_match] ? acc[season][player_of_match]++ : acc[season][player_of_match] = 1 
      }
        else{ 
          acc[season] = {}
          acc[season][player_of_match]=1
      }
      return acc
  },{})
  let keys=Object.keys(object)

  let values = Object.values(object);
  
  const entriesValue = [];
  values.forEach((el) => {
    entriesValue.push(Object.entries(el));
  });
  

  let sorted = entriesValue.map((entry) => {
    return entry.sort((a, b) => {
      return b[1] - a[1];
    })[0];
  });
  
  let manOfTheMatch = {}

  for(let i=0;i<sorted.length;i++){
    manOfTheMatch[keys[i]]=sorted[i]
  }
  return manOfTheMatch
}
console.log(playerOfTheWatch(matches));
//module.exports = {playerOfTheWatch}














 


           


// let arr=[33,445,2,,1,,,22];


// let obj={
//     bumrah:{"bowled":240,"runs":300},
//     steyn:{"bowled":300,"runs":350}
// }

// let keys=Object.keys(obj);
// let eco={}
// keys.map(el=>{
//     // let obj={};
   

//     let economy =((obj[el].runs)/((obj[el].bowled)/6)).toFixed(2)
    
    
// eco[el]=economy
// })
// let sorted=Object.entries(eco).sort((a,b)=>{
//     return a[1]-b[1]
// })
// console.log(Object.fromEntries(sorted));

