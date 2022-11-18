


function economicalBowlers(deliveires, matches) {
    let ids = [];
  
    for (let match of matches) {
      if (match.season === "2015") {
        ids.push(match.id);
      }
    }
  
    let matchesIds = [];
    ids.map((item) => {
      deliveires.filter((element) => {
        if (element.match_id === item) {
          matchesIds.push(element);
        }
      });
    });
    
    let bowlers = {}
    matchesIds.map(items=>{
      if (bowlers[items.bowler]){
          const bowled = items.ball <= 6 ? bowlers[items.bowler].bowled + 1 : bowlers[items.bowler].bowled;
          const runs = bowlers[items.bowler].runs + Number(items.total_runs)
          bowlers[items.bowler] = {bowled, runs}
      }
      else{
          const bowled = 1;
          const runs = Number(items.total_runs)
          bowlers[items.bowler] = {bowled, runs}
      }
    })
    //console.log(bowlers);
   
      let keys = Object.keys(bowlers)
      let economical = {}
      keys.map(element=> {
        //console.log(bowlers[element].runs)
          let economicalcalculation = ((bowlers[element].runs)/((bowlers[element].bowled)/6)).toFixed(2)
  
          
          economical[element]=economicalcalculation
  
      })
    //console.log(economical)
      let sorted=Object.entries(economical).sort((a,b)=>{
              return (a[1]-b[1])
          })
      //console.log(sorted);
        return (Object.fromEntries(sorted.splice(0,10)));
      
  }
 
  module.exports = {economicalBowlers}