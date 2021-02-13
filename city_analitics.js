const fs = require("fs")

const cityList = JSON.parse(fs.readFileSync("city.list.json"))
// console.log(JSON.parse(cityList))
const regions = new Set()
for (let a of cityList) {
    regions.add(a.country)
}
for (let a of regions) {
    console.log(a)
}