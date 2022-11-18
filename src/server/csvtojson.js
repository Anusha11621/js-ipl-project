const csv = require('csvtojson');
const fs= require('fs')


csv()
.fromFile("src/data/matches.csv")
.then(source =>{
    
    fs.writeFile('src/public/output/matches.json',JSON.stringify(source,null,4),(err)=>{
        if(err){
        console.log(err)
        }
    }
    )
})

csv()
.fromFile("src/data/deliveries.csv")
.then(source =>{
    
    fs.writeFile('src/public/output/deliveries.json',JSON.stringify(source,null,4),(err)=>{
        if(err){
        console.log(err)
        }
    }
    )
})