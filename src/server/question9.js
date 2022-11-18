


function superEconomy(deliveires,matches){
    const array = [];
    for (let superover of deliveires){
        if (superover.is_super_over > 0){
            array.push(superover)
        }
    }

    let bowlers = {}

    array.map(element =>{
        if(bowlers[element.bowler]){
            const bowled = Number(element.ball)<=6 ? bowlers[element.bowler].bowled +1 :bowlers[element.bowler].bowled
            const runs = bowlers[element.bowler].runs + Number(element.total_runs)
            bowlers[element.bowler] = {bowled, runs}
            
        }else{
            const  runs = Number(element.total_runs)
            const bowled = 1
            bowlers[element.bowler] = {bowled, runs}
        }
    })
    let keys = Object.keys(bowlers)
      let economical = {}
      keys.map(elements=> {
        
          let economicalcalculation = ((bowlers[elements].runs)/((bowlers[elements].bowled)/6)).toFixed(2)
          economical[elements]=economicalcalculation
  
      })
    
      let sorted=Object.entries(economical).sort((a,b)=>{
              return (a[1]-b[1])
          })
        return (Object.fromEntries(sorted));
    

}
module.exports = {superEconomy}
