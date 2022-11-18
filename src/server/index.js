let matches = require("../public/output/matches.json");
let deliveires = require("../public/output/deliveries.json");
let {matchesPerYear} = require("./question1");
let {matchesWonPerTeamPerYear} = require("./question2")
let {extraruns} = require("./question3")
let {economicalBowlers} = require("./question4")
let {tossAndMatchWinning} = require("./question5")
let {playerOfTheWatch} = require("./question6")
let {dismissed} = require("./question7")
let {strikerate} = require("./question8")
let {superEconomy} = require("./question9")


let fs = require('fs');

let a = matchesPerYear(matches)
let b = matchesWonPerTeamPerYear(matches)
let c = extraruns(matches,deliveires)
let d = economicalBowlers(deliveires, matches)
let e = tossAndMatchWinning(matches)
let f = playerOfTheWatch(matches)
let g = dismissed(matches,deliveires)
let h = strikerate(matches,deliveires)
let i = superEconomy(deliveires,matches)

fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/1_output.json', JSON.stringify(a, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/2_output.json', JSON.stringify(b, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/3_output.json', JSON.stringify(c, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/4_output.json', JSON.stringify(d, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/5_output.json', JSON.stringify(e, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/6_output.json', JSON.stringify(f, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/7_output.json', JSON.stringify(g, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/8_output.json', JSON.stringify(h, null, 2), err => { console.log (err)});
fs.writeFile('/home/anusha/Desktop/IPL/src/public/output/9_output.json', JSON.stringify(i, null, 2), err => { console.log (err)});