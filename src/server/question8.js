


function strikerate(matches,deliveires){
    // Find the strike rate of a batsman for each season
    let bm = "S Dhawan"
    let obj = []
   
    for (let player of deliveires){
     if (player.batsman == bm){
         obj.push(player)
     }
    }
    
    let ids ={}
 
    matches.map(item =>{
     ids[item.id] = item.season
    }
     )
    
    let strike = {}
  
    for (let curruntevalue of obj){
     if (strike[ids[curruntevalue.match_id]]){
         const balls = strike[ids[curruntevalue.match_id]].balls +1
         const runs = strike[ids[curruntevalue.match_id]].runs + Number(curruntevalue.batsman_runs)
     }
    }
    obj.map(elements =>{
     if(strike[ids[elements.match_id]]){
         const balls = strike[ids[elements.match_id]].balls +1
         const runs = strike[ids[elements.match_id]].runs + Number(elements.batsman_runs)
         strike[ids[elements.match_id]] = {balls,runs}
 
     }
     else{
         const balls = 1
         const runs =Number(elements.batsman_runs)
         strike[ids[elements.match_id]] = {balls,runs}
     }
    })
    
    let keys = Object.keys(strike)
    let batsmanAndStrikeRate={}
    let strikeRate = {}
    keys.map(elements=> {
         
               let strikematch = ((strike[elements].runs/strike[elements].balls)*100).toFixed(2)
               strikeRate[elements]=strikematch
       
           })
 
 
 batsmanAndStrikeRate[bm]=strikeRate
 return batsmanAndStrikeRate
 
 
 
    
 
 }
module.exports = {strikerate}